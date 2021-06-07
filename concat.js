function concat(array, ...values) {
  const result = [...array];
  const { length } = values;

  for (let index = 0; index < length; index += 1) {
    const value = values[index];

    if (Array.isArray(value)) {
      result.push( ...value);
    } else {
      result.push(value);
    }
  }

  return result;
}
