import React from 'react';
import { shallow } from 'enzyme';
import CallbackPage from './callbackPage';

describe('CallbackPage', () => {
  it('matches snapshot', () => {
    expect(shallow(<CallbackPage />)).toMatchSnapshot();
  });
});

