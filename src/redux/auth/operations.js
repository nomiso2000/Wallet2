import axios from 'axios';
import types from '../types';
import API from '../../services/api';
import notification from '../../services/notification';
import routes from '../../routes';

const token = {
  set(authToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const logIn = (user, history) => async dispatch => {
  dispatch({ type: types.LOGIN_START });
  try {
    const { data, status } = await API.auth.login(user);
    // if (status < 200 && status >= 300) throw new Error('Something went wrong!');
    dispatch({ type: types.LOGIN_SUCCESS, payload: data });
    token.set(data.token);
    // clearForm();
    history.push('/home');
    notification({
      type: 'success',
      message: 'Login Success!',
    });
  } catch (e) {
    dispatch({ type: types.LOGIN_FAILURE, payload: e.response.data.message });
  }
};
export const register = (credentials, history) => async dispatch => {
  dispatch({ type: types.SIGNUP_START });
  try {
    const { data } = await API.auth.register(credentials);
    // if (status < 200 && status >= 300) throw new Error('Something went wrong!');
    dispatch({ type: types.SIGNUP_SUCCESS, payload: data });
    token.set(data.token);
    history.push('/home');
    notification({
      type: 'success',
      message: 'Register Success!',
    });
  } catch (e) {
    dispatch({ type: types.SIGNUP_FAILURE, payload: e.response.data.errors });
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) {
    return;
  }
  token.set(persistedToken);
  dispatch({ type: types.GET_CURRENT_USER_START });
  try {
    const { data } = await API.auth.getCurrentUser();
    dispatch({ type: types.GET_CURRENT_USER_SUCCESS, payload: data });
    // notification({
    //   type: 'success',
    //   message: 'getCurrentUser Success!',
    // });
  } catch (e) {
    dispatch({ type: types.LOGOUT_FAILURE });
  }
};

export const logOut = history => async dispatch => {
  dispatch({ type: types.LOGOUT_START });
  try {
    const data = await API.auth.logout();
    // if (status < 200 && status >= 300) throw new Error('Something went wrong!');
    dispatch({ type: types.LOGOUT_SUCCESS, payload: data });
    history.push('/login');
    token.unset();
    notification({
      type: 'success',
      message: 'Logout Success!',
    });
  } catch (e) {
    dispatch({ type: types.LOGOUT_FAILURE });
  }
};
