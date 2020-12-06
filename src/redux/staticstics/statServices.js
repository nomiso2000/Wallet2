const finalYMArrayMethod = array => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (
        array[i].year === array[j].year &&
        array[i].month !== array[j].month
      ) {
        // eslint-disable-next-line no-unused-expressions
        array[j].year;

        // eslint-disable-next-line no-param-reassign
        array[i].month = [
          ...new Set([...array[i].month, ...array[j].month]),
        ].sort();

        array.splice(j, 1);
        j = i;
      }
    }
  }

  return array;
};
export default finalYMArrayMethod;
