import axios from 'axios';

import * as constants from './constants';

export const fetchBitcoin = () => {
  return dispatch => {
    return axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => dispatch({
        type: constants.FETCH_BITCOIN,
        bitcoin: response.data
      }));
  }
}