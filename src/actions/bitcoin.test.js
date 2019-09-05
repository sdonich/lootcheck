/**
 * Alternative approach accroding with lecture
 */
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';
// import { FETCH_BITCOIN } from './constants';
// import { fetchBitcoin } from './bitcoin';
// const middleware = [thunk];
// const createMockStore = configureMockStore(middleware);
// const store = createMockStore({ bitcoin: {} });
// const mockResponse = { body: { bpi: 'bitcoin price index' } };
// fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);
// test('creates an async action to fetch the bitcoin value', () => {
//   const expectedAction = [{ bitcoin: mockResponse.body, type: FETCH_BITCOIN }];
//   return store.dispatch(fetchBitcoin())
//     .then(() => {
//       expect(store.getActions()).toEqual(expectedAction);
//     });
// });
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import { FETCH_BITCOIN } from './constants';
import { fetchBitcoin } from './bitcoin';

describe('async action creatore fetchBitcoin()', () => {
  const middlewares = [thunk];
  const createMockStore = configureMockStore(middlewares);
  const store = createMockStore({ bitcoin: {} });

  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  test('creates an async action to fetch the bitcoin value', () => {
    const mockResponse =  { bpi: 'bitcoin price index' } ;
    const expectedAction = [{ bitcoin: mockResponse, type: FETCH_BITCOIN }];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockResponse
      });
    });

    return store.dispatch(fetchBitcoin())
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedAction);
      })
  });
});


