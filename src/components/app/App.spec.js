import React from 'react';
import { shallow } from 'enzyme';
import App from './app';
import Timer from '../timer/Timer';

describe('App', () => {
  let container;

  beforeEach(() => (container = shallow(<App />)))

  it('should render a <div />', () => {
    const container = shallow(<App />);
    expect(container.find('div').length).toEqual(1);
  })

  it('should render the Timer Component', () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  })
})