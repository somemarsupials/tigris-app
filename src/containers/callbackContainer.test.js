import React from 'react';
import { shallow } from 'enzyme';
import { CallbackContainer } from './callbackContainer';

describe('CallbackContainer', () => {
  let props;

  beforeEach(() => {
    props = {
      match: {
        params: {
          provider: 'spotify',
        },
      },
      getToken: jest.fn(),
    };
  });

  describe('on mount', () => {
    beforeEach(() => {
      shallow(<CallbackContainer {...props} />);
    });

    it('calls getToken with provider', () => {
      expect(props.getToken).toHaveBeenCalledWith('spotify');
    });
  });

  describe('when rendering', () => {
    it('matches snapshot', () => {
      expect(shallow(<CallbackContainer {...props} />)).toMatchSnapshot();
    });
  });
});



