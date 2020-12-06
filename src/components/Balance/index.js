import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Balance.module.css';
import authSelector from '../../redux/auth/selectors';
import { getTransaction } from '../../redux/transactions/selector';

const Balance = () => {
  const dispatch = useDispatch();
  const balance = useSelector(authSelector.getBalance);

  return (
    <div className={styles.div}>
      <p className={styles.balanceText}>ВАШ БАЛАНС</p>
      <span className={styles.sign}>$</span>{' '}
      <p className={styles.balanceValue}>
        {balance ? parseFloat(balance).toFixed(2) : '000.00'}
      </p>
    </div>
  );
};

export default Balance;
