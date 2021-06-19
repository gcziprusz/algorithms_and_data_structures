// expect(3).not().toBe(3)
function myExpect(input: any): Matcher & { not: Matcher } {
  let isReversed = false

  return {
    toBe(data: any) {
      const isIdentical = Object.is(data, input)
      if ((!isReversed && !isIdentical || (isReversed && isIdentical))) {
        throw new Error('not match')
      }
    },
    get not() {
      isReversed = !isReversed
      return this
    }
  }
}
