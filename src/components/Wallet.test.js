import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { Wallet } from './Wallet';

describe('Wallet', () => {
  const depositMock = jest.fn();
  const withdrawMock = jest.fn();
  const props = { balance: 20, deposit: depositMock, withdraw: withdrawMock };
  const wallet = shallow(<Wallet {...props} />);

  test('renders properly', () => {
    expect(toJson(wallet)).toMatchSnapshot();
  });
  test('displays the balance from props', () => {
    expect(wallet.find('.balance').text()).toBe('Wallet balance: 20');
  });
  test('creates an input to deposit into or withdraw from the balance', () => {
    expect(wallet.find('.input-wallet').exists()).toBe(true);
  });
  describe('when the user types into the wallet input', () => {
    const userBalance = '25';

    beforeEach(() => {
      wallet.find('.input-wallet')
        .simulate('change', { target: { value: userBalance } });
    });

    test('updates the local wallet balance in `state` and converts it to number', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10));
    });

    describe(('when the user wants to make a deposit'), () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      });
      test('dispatches the `deposit()` it receives from props with the local balance', () => {
        expect(depositMock).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });

    describe('when the user wants to make a withdrawal', () => {
      beforeEach(() => wallet.find('.btn-withdraw').simulate('click'));

      test('dispathces the `withdraw()` it receives from props with the local balance', () => {
        expect(withdrawMock).toHaveBeenCalledWith(parseInt(userBalance, 10));
      });
    });
  });
});