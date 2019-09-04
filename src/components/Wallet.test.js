import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'; 

import { Wallet } from './Wallet';

describe('Wallet', () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  test('renders properly', () => {
    expect(toJson(wallet)).toMatchSnapshot();
  });
  test('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toBe('Wallet balance: 20');
  });
});