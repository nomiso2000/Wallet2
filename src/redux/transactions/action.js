import types from '../types';
import { createAction, createSelector } from '@reduxjs/toolkit';

const addTransaction = createAction(types.ADD_SUCCESS);

const deleteTransaction = createAction(types.DELETE_TRANSACTION_SUCCESS);

const editTransaction = createAction(types.EDIT_TRANSACTION);

const getAllTransactionsFromBack = createAction(
  types.GET_ALL_TRANSACTIONS_FROM_BACK,
);
const getCategories = createAction(types.GET_TRANSACTION_CATEGORIES_SUCCESS);
const setError = createAction(types.SET_ERROR);

const resetError = createAction(types.RESET_ERROR);

const loaderON = createAction(types.LOADER_ON);

const loaderOFF = createAction(types.LOADER_OFF);

const filterALL = createAction(types.FILTER_ALL);

const filterIncomes = createAction(types.FILTER_INCOMES);

const filterExpences = createAction(types.FILTER_EXPENCES);

export {
  addTransaction,
  deleteTransaction,
  editTransaction,
  setError,
  resetError,
  loaderON,
  loaderOFF,
  filterALL,
  filterIncomes,
  filterExpences,
  getAllTransactionsFromBack,
  getCategories,
};
