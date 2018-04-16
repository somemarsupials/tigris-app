import axios from 'axios';
import env from '../env';
import { prefix } from '../lib';

export const ACTIONS = prefix('CALLBACK', [
  'SUCCESS',
  'FAILURE',
]);

function success(provider, data, store = localStorage) {
  return function thunk(dispatch) {
    store.setItem(provider, JSON.stringify(data));
    return dispatch({
      type: ACTIONS.SUCCESS,
      data: data,
    });
  };
}

function failure(error) {
  return {
    type: ACTIONS.FAILURE,
    error: error,
  };
}

const OUTCOMES = {
  success: success,
  failure: failure,
};

function getToken(provider, httpClient = axios, outcomes = OUTCOMES) {
  return async function thunk(dispatch) {
    let response;

    try {
      response = await httpClient({
        method: 'get',
        url: `${env.api}/auth/${provider}/token`,
        withCredentials: true,
      });
      return dispatch(outcomes.success(provider, response.data));
    }
    catch (error) {
      let data = error.response || {
        status: 500,
        data: {
          error: error.message,
        },
      };
      return dispatch(outcomes.failure(data));
    }
  };
}

export default {
  success,
  failure,
  getToken,
};
