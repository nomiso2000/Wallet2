import { createSelector } from '@reduxjs/toolkit';

const getStatistics = state => state.statistics;
const getAllTransactions = state => state.statistics.allTransactions;

export default {
  getStatistics,
  getAllTransactions,
};
