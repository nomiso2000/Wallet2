import { createReducer } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  getAllTransactionsFromBack,
} from '../action';
import { combineReducers } from 'redux';

const initialState = [];
const transactionReducer = createReducer(initialState, {
  [addTransaction]: (state, action) => {
    return [action.payload, ...state];
  },

  [getAllTransactionsFromBack]: (state, action) => {
    return [...action.payload];
  },
  [deleteTransaction]: (state, action) => {
    return [...state.filter(transaction => transaction.id !== action.payload)];
  },

  [editTransaction]: (state, action) => {
    const newArrTransactions = [
      ...state.map(transaction => {
        if (transaction.id === action.payload.id) {
          return action.payload;
        }
        return transaction;
      }),
    ];

    return newArrTransactions;
    // return [
    //   ...state.filter(transaction => {
    //     if (transaction.id === action.payload.id) {
    //       return action.payload;
    //     }
    //     return transaction.id !== action.payload.id;
    //   }),
    // ];
  },
});

export default transactionReducer;
