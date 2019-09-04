import * as constants from '../actions/constants';
import reducer from './balance';

describe('balance reducer', () => {
  test('sets a balance', () => {
    const balance = 10;

    expect(reducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
  });

});
