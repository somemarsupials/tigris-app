import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './landingPage';

describe('LandingPage', () => {
  it('matches snapshot', () => {
    expect(shallow(<LandingPage />)).toMatchSnapshot();
  });
});

