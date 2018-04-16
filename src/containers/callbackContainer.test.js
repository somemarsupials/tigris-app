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
    global.window.close = jest.fn();
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
    describe('when successful', () => {
      beforeEach(() => {
        props.success = true;
        shallow(<CallbackContainer {...props} />);
      });

      it('closes window', () => {
        expect(global.window.close).toHaveBeenCalled();
      });
    });

    describe('when unsuccessful', () => {
      describe('with no error', () => {
        it('matches snapshot', () => {
          expect(shallow(<CallbackContainer {...props} />))
            .toMatchSnapshot();
        });
      });

      describe('with error', () => {
        beforeEach(() => {
          props.error = {
          };
        });

        it('matches snapshot', () => {
          expect(shallow(<CallbackContainer {...props} />))
            .toMatchSnapshot();
        });
      });
    });
  });
});
