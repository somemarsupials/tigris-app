import React from 'react';
import { shallow } from 'enzyme';
import { LandingContainer } from './landingContainer';

describe('LandingContainer', () => {
  it('matches snapshot', () => {
    expect(shallow(<LandingContainer />)).toMatchSnapshot();
  });
});



