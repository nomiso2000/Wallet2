import React from 'react';
import styles from './Filters.module.css';

import {
  filterIncomes,
  filterExpences,
  filterTransactionsByIncomes,
  filterTransactionsByExpences,
} from '../../redux/transactions/action';
import { filtredTransactions } from '../../redux/transactions/selector';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterALLTransactionOperation } from '../../redux/transactions/operations';

// import { NavLink } from 'react-router-dom';
const navigationLinks = [
  {
    name: 'ВСЕ',
    englishName: 'allTransactions',
  },
  {
    name: 'ДОХОДЫ',
    englishName: 'Incomes',
  },
  {
    name: 'ЗАТРАТЫ',
    englishName: 'Expences',
  },
];
const FiltersBar = () => {
  const filterValue = useSelector(state => state.transactions.filter);
  // const transactions = useSelector(state => state.transactions.items);
  const transactions = useSelector(filtredTransactions);
  const dispatch = useDispatch();
  return (
    <ul className={styles.filtersList}>
      Фильтры:
      {navigationLinks.map(link => {
        return (
          <li
            key={link.name}
            className={
              filterValue === link.englishName
                ? styles.hoveredLink
                : styles.link
            }
          >
            <a
              onClick={() => {
                if (link.name === 'ВСЕ') {
                  dispatch(filterALLTransactionOperation());
                } else if (link.name === 'ДОХОДЫ') {
                  dispatch(filterIncomes('Incomes'));
                } else {
                  dispatch(filterExpences('Expences'));
                }
              }}
            >
              {link.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default FiltersBar;
