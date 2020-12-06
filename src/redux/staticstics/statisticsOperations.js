import axios from 'axios';

// import API from '../../services/api';
import statsticsActions from './statisticsActions';

axios.defaults.baseURL = 'https://sheltered-sea-54747.herokuapp.com';

const fetchTransactionsSummary = (year, month) => async dispatch => {
  dispatch(statsticsActions.transactionsSummaryRequest());
  try {
    const response = await axios.get(
      `/api/transactions-summary?month=${month}&year=${year}`,
    );
    dispatch(statsticsActions.transactionsSummarySuccess(response.data));
    console.log(response.data);
    return response.data;
  } catch (error) {
    dispatch(statsticsActions.transactionsSummaryError(error));
  }
};
const fetchAllTransactions = () => async dispatch => {
  dispatch(statsticsActions.allTransactionsRequest());
  try {
    const response = await axios.get(`/api/transactions`);
    dispatch(statsticsActions.allTransactionsSuccess(response.data));
    console.log(response.data);
    return response.data;
  } catch (error) {
    dispatch(statsticsActions.allTransactionsError(error));
  }
};

export default { fetchTransactionsSummary, fetchAllTransactions };
