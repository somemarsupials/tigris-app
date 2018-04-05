import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './homePage';

describe('HomePage', () => {
  it('matches snapshot', () => {
    expect(shallow(<HomePage />)).toMatchSnapshot();
  });
});
