import React, { Component } from 'react';
import { Doughnut, defaults } from 'react-chartjs-2';

import { connect } from 'react-redux';
import { statisticsSelectors } from '../../redux/staticstics';

import SelectYrsMth from './Select';
import graphColors from './graphColors';

import styles from './Statistics.module.css';

class Statistics extends Component {
  state = {
    categoriesExpenseWithColors: [],
  };

  componentDidUpdate(prevProps) {
    const { statistics } = this.props;
    const { categoriesSummary } = this.props.statistics.transactionsSummary;
    const { categoriesExpense, categoriesExpenseWithColors } = this;
    if (
      statistics !== prevProps.statistics &&
      categoriesSummary !== undefined
    ) {
      const array = categoriesExpense(categoriesSummary);
      const arrayWithColors = categoriesExpenseWithColors(array);
      this.setState({ categoriesExpenseWithColors: arrayWithColors });
    }
  }

  categoriesExpense = array => array.filter(({ type }) => type === 'EXPENSE');

  categoriesExpenseWithColors = array =>
    array.map((category, i) => {
      const categoryWithColor = { ...category, color: graphColors[i] };

      return { categoryWithColor };
    });

  render() {
    const { categoriesExpenseWithColors } = this.state;
    const { transactionsSummary } = this.props.statistics;
    const { incomeSummary, expenseSummary, periodTotal } = transactionsSummary;
    defaults.global.legend.display = false;

    defaults.global.legend.position = 'right';
    const data = {
      labels: categoriesExpenseWithColors.map(
        ({ categoryWithColor }) => categoryWithColor.name,
      ),
      datasets: [
        {
          data: categoriesExpenseWithColors.map(({ categoryWithColor }) =>
            Math.abs(categoryWithColor.total).toFixed(2),
          ),
          backgroundColor: graphColors,
        },
      ],
    };
    const options = {
      elements: {
        arc: {
          borderWidth: 0,
        },
      },
      cutoutPercentage: 75,
    };

    return (
      <div className={styles.statisticsBlock}>
        <div className={styles.doughnut}>
          <div className={styles.statHeader}>Статистика</div>
          {periodTotal && (
            <div className={styles.periodTotal}>
              &#x20b4; {periodTotal.toFixed(2)}
            </div>
          )}
          <Doughnut data={data} width={320} height={320} options={options} />
        </div>

        <div className={styles.stat}>
          <SelectYrsMth />

          <table className={styles.statTable}>
            <thead className={styles.theadStat}>
              <tr className={styles.trStat}>
                <th className={styles.thStat}>Категория</th>
                <th className={styles.thStat}>Сумма</th>
              </tr>
            </thead>
            {transactionsSummary && incomeSummary !== undefined && (
              <tbody className={styles.tbodyStat}>
                {categoriesExpenseWithColors.map(({ categoryWithColor }) => (
                  <tr className={styles.trStat} key={categoryWithColor.name}>
                    <td className={styles.tdStat}>
                      <div className={styles.nameBlock}>
                        <div
                          className={styles.color}
                          style={{ backgroundColor: categoryWithColor.color }}
                        />
                        <div>{categoryWithColor.name}</div>
                      </div>
                    </td>
                    <td className={styles.tdStat}>
                      {Math.abs(categoryWithColor.total).toFixed(2)}
                    </td>
                  </tr>
                ))}
                <tr className={styles.trStat}>
                  <td className={styles.tdStat}>Расходы:</td>
                  <td className={styles.tdStat}>
                    {Math.abs(expenseSummary).toFixed(2)}
                  </td>
                </tr>
                <tr className={styles.trStat}>
                  <td className={styles.tdStat}>Доходы:</td>
                  <td className={styles.tdStat}>{incomeSummary.toFixed(2)}</td>
                </tr>
              </tbody>
            )}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  statistics: statisticsSelectors.getStatistics(state),
  // transactionsSummary: statisticsSelectors.getTransactionsSummary(state),
  // categoriesSummary: statisticsSelectors.getCategoriesSummary(state),
  // incomeSummary: statisticsSelectors.getIncomeSummary(state),
  // expenseSummary: statisticsSelectors.getExpenseSummary(state),
  // periodTotal: statisticsSelectors.getPeriodTotal(state),
});
export default connect(mapStateToProps)(Statistics);
// export default Statistics;
