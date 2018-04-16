import React from 'react';
import { shallow } from 'enzyme';
import CallbackPage from './callbackPage';

describe('CallbackPage', () => {
  let props;

  describe('when error', () => {
    beforeEach(() => {
      props = {
        error: {
          status: 500, 
          data: {
            message: 'error'
          },
        },
      };
    });

    it('matches snapshot', () => {
      expect(shallow(<CallbackPage {...props} />)).toMatchSnapshot();
    });
  });

  describe('without error', () => {
    beforeEach(() => {
      props = {};
    });

    it('matches snapshot', () => {
      expect(shallow(<CallbackPage {...props} />)).toMatchSnapshot();
    });
  });
});
