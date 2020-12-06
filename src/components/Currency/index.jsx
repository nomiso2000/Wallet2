import React, { Component } from 'react';
import CurrencyAPI from './CurrencyAPI';
import { v4 as uuidv4 } from 'uuid';
import styles from './CurrencyStyles.module.css';
uuidv4();

class Currency extends Component {
  state = {
    currency: [],
  };

  componentDidMount = () => {
    CurrencyAPI.getCurrencyValue().then(currencyItems =>
      this.setState({ currency: currencyItems }),
    );
  };

  render() {
    const arrayOfCurrency = this.state?.currency?.filter(
      item => item.ccy !== 'BTC',
    );
    return (
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <td>Валюта</td>
            <td>Покупка</td>
            <td>Продажа</td>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {arrayOfCurrency?.map(itemOfCurrency => (
            <tr key={uuidv4()}>
              <td>{itemOfCurrency.ccy}</td>
              <td>{parseFloat(itemOfCurrency.buy).toFixed(2)}</td>
              <td>{parseFloat(itemOfCurrency.sale).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className={styles.tableFooter}>
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    );
  }
}

export default Currency;
