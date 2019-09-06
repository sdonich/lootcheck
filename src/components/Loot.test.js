import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Loot } from './Loot';

describe('Loot', () => {
  const fetchBitcoinMock = jest.fn();
  const props = { balance: 10, bitcoin: {} }
  let loot = shallow(<Loot {...props} />);
  test('render properly', () => {
    expect(toJson(loot)).toMatchSnapshot();
  });

  describe('when mounted', () => {
    beforeEach(() => {
      props.fetchBitcoin = fetchBitcoinMock;
      loot = mount(<Loot {...props} />);
    });

    test('dispatchers the `fetchBitcoin()` method it receives from props', () => {
      expect(fetchBitcoinMock).toHaveBeenCalled();
    });
  });
});