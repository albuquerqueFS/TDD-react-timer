import React from 'react';
import { shallow } from 'enzyme';
import App from './app';

describe('App', () => {
  it('should render a <div />', () => {
    const container = shallow(<App />);
    expect(container.find('div').length).toEqual(1);
  })
})