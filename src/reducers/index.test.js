import rootReducer from './index';

describe('rootReducer', () => {
  test('initializes the default state', () => {
    expect(rootReducer({}, {})).toEqual({balance: 0, bitcoin: {}});
  })
});