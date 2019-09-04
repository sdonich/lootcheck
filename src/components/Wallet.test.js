import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { Wallet } from './Wallet';

describe('Wallet', () => {
  const props = { balance: 20 };
  const wallet = shallow(<Wallet {...props} />);

  test('renders properly', () => {
    const tree = renderer.create(<Wallet />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toBe('Wallet balance: 20');
  });
});