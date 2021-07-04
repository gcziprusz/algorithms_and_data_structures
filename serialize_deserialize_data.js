const wrap = (data, visited = new Set()) => {
  switch (typeof data) {
    case 'undefined':
      return {
        type: 'undefined',
        value: 'undefined'
      }
    case 'string':
      return {
        type: 'string',
        value: data
      }
    case 'number':
      return {
        type: 'number',
        value: data.toString() // to support NaN, Infinity
      }
    case 'bigint':
      return {
        type: 'bigint',
        value: data.toString() // without n
      }
    case 'boolean':
      return {
        type: 'boolean',
        value: data
      }
    case 'object':
      if (data === null) 
        return {
          type: 'null',
          value: 'null'
        }
      
      if (visited.has(data)) {
        throw new Error('circular reference found')
      }
      visited.add(data)

      if (Array.isArray(data)) {
        return {
          type: 'Array',
          value: data.map((item) => wrap(item, new Set(visited)))
        }
      }

      // default treats as Object Literal
      {
        const keys = Object.keys(data)

        const value = keys.reduce((result, key) => {
          result[key] = wrap(data[key], new Set(visited))
          return result
        }, {})

        return {
          type: 'ObjectLiteral',
          value
        }
      }

    default:
      throw new Error('unsupported data type')
  }
}


const unwrap = (wrapper) => {
  switch (wrapper.type) {
    case 'undefined':
      return undefined
    case 'null':
      return null
    case 'number':
      return Number(wrapper.value)
    case 'string':
      return wrapper.value
    case 'bigint':
      return BigInt(wrapper.value)
    case 'boolean':
      return wrapper.value
    case 'ObjectLiteral':
      const keys = Object.keys(wrapper.value)

      return keys.reduce((result, key) => {
        result[key] = unwrap(wrapper.value[key])
        return result
      }, {})

    case 'Array':
      return wrapper.value.map(unwrap)
    default:
      throw new Error('unexpected data')
  }
}

const stringify = (data) => {
  return JSON.stringify(wrap(data))
}

const parse = (data) => {
  return unwrap(JSON.parse(data))
}
