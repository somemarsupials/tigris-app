import React from 'react';
import { shallow } from 'enzyme';
import SiteHeader from './siteHeader';

describe('SiteHeader', () => {
  it('matches snapshot', () => {
    expect(shallow(<SiteHeader />)).toMatchSnapshot();
  });
});
