import moment from 'moment-with-locales-es6';

moment.locale('ru');
export const transactionsYearsMonths = array =>
  array
    .filter(({ type }) => type === 'EXPENSE')
    .map(({ transactionDate }) => {
      const year = moment(transactionDate, 'YYYY MM D').format('YYYY');
      const month = moment(transactionDate, 'YYYY MM D').format('MM');
      return { year, month: [month] };
    })
    .sort((a, b) => a.year - b.year);

export const finalYMArrayMethod = array => {
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
