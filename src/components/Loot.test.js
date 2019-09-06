import React from 'react';
import { mount, shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Loot } from './Loot';

describe('Loot', () => {
  const fetchBitcoinMock = jest.fn();
  let props = { balance: 10, bitcoin: {} }
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

  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = {
        balance: 10,
        bitcoin: {
          bpi: {
            USD: {
              rate: '1,000'
            }
          }
        }
      };
      loot = shallow(<Loot {...props} />);
    });
    test('displays the correct bitcoin value', () => {
      expect(loot.find('h3').text()).toBe('Bitcoin balance: 0.01');
    });
  });
});