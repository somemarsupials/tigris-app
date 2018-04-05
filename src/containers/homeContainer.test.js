import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './homeContainer';

describe('HomeContainer', () => {
  it('matches snapshot', () => {
    expect(shallow(<HomeContainer />)).toMatchSnapshot();
  });
});


