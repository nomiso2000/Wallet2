import React, { Component } from 'react';
import moment from 'moment-with-locales-es6';
import { connect } from 'react-redux';

import {
  statisticsSelectors,
  statisticsOperations,
} from '../../../redux/staticstics';

import {
  finalYMArrayMethod,
  transactionsYearsMonths,
} from '../services/selectServices';

import styles from './Select.module.css';

moment.locale('ru');

class SelectYrsMth extends Component {
  state = {
    valueMonth: 0,
    valueYear: 0,
    monthsInRequestedYear: [],
    arrayOfDates: [],
  };

  componentDidMount() {
    this.props.onFetchAllTransactions();
  }

  componentDidUpdate(prevProps) {
    const { valueMonth, valueYear } = this.state;
    const { allTransactions } = this.props;
    // const { finalYMArrayMethod, transactionsYearsMonths } = this;
    if (allTransactions !== prevProps.allTransactions) {
      const assembledArrayOfYrsMths = finalYMArrayMethod(
        transactionsYearsMonths(allTransactions),
      );

      this.setState({ arrayOfDates: assembledArrayOfYrsMths });
    }
    if (valueMonth !== 0 && valueYear !== 0) {
      this.props.onFetchSummaryTransactions(valueYear, valueMonth);
    }
  }

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    const { arrayOfDates, valueMonth, valueYear } = this.state;
    if (name === 'valueYear') {
      this.setState({ valueMonth: 0 });
      const requestedYear = arrayOfDates.find(({ year }) => year === value);

      this.setState({ monthsInRequestedYear: requestedYear.month });
    }
    this.setState({ [name]: Number(value) });
  };

  render() {
    const {
      valueMonth,
      valueYear,
      arrayOfDates,
      monthsInRequestedYear,
    } = this.state;

    return (
      <form className={styles.selectBlock}>
        {/* <div className={styles.selectWrapper}> */}
        <select
          className={styles.selectWrapper}
          name="valueMonth"
          // value="Month"
          onChange={this.handleChange}
        >
          {valueYear ? (
            <option className={styles.optionYM} disabled={!!valueMonth}>
              Месяц
            </option>
          ) : (
            <option className={styles.optionYM}>Выберите "год"</option>
          )}
          {monthsInRequestedYear &&
            monthsInRequestedYear.map(month => (
              <option className={styles.optionYM} key={month} value={month}>
                {moment(month, 'MM').format('MMMM')}
              </option>
            ))}
        </select>
        {/* </div> */}
        {/* <div className={styles.selectWrapper}> */}
        <select
          className={styles.selectWrapper}
          name="valueYear"
          onChange={this.handleChange}
        >
          <option className={styles.optionYM} disabled={!!valueYear}>
            Год
          </option>
          {arrayOfDates.map(({ year }) => (
            <option className={styles.optionYM} key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        {/* </div> */}
        {/* <button type="submit">Test</button> */}
      </form>
    );
  }
}
const mapStateToProps = state => ({
  allTransactions: statisticsSelectors.getAllTransactions(state),
});
const mapDispatchToProps = dispatch => ({
  onFetchAllTransactions: () =>
    dispatch(statisticsOperations.fetchAllTransactions()),
  onFetchSummaryTransactions: (year, month) =>
    dispatch(statisticsOperations.fetchTransactionsSummary(year, month)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectYrsMth);
