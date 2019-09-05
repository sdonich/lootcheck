import reducer from './bitcoin';
import * as constants from '../actions/constants';

describe('bitcoin reducer', () => {
  const bitcoinData = { bpi: 'bitcoin price index' };

  test('fetches and sets the bitconin data', () => {
    expect(reducer({}, { type: constants.FETCH_BITCOIN, bitcoin: bitcoinData }))
      .toEqual(bitcoinData);
  });
});