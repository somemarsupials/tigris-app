import React from 'react';
import { shallow } from 'enzyme';
import TabLink from './tabLink';

describe('TabLink', () => {
  it('matches snapshot', () => {
    expect(shallow(<TabLink />)).toMatchSnapshot();
  });
});

