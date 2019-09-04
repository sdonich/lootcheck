import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json'; 

import App from './App';
import Wallet from './Wallet';

describe('App', () => {
  const app = shallow(<App />);
  
  test('renders properly', () => {
    expect(toJson(app)).toMatchSnapshot();
  });
  test('contains a connected  Wallet component', () => {
    expect(app.find(Wallet).exists()).toBe(true);
  });
});