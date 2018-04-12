import actions from './callback';

describe('callback actions', () => {
  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
  });

  describe('#success', () => {
    let store;

    beforeEach(() => {
      store = { setItem: jest.fn() };
      actions.success('spotify', { a: 1 }, store)(dispatch);
    });

    it('calls setItem with stringified data', () => {
      expect(store.setItem).toHaveBeenCalledWith('spotify', '{"a":1}');
    });

    it('dispatches action', () => {
      expect(dispatch.mock.calls).toMatchSnapshot();
    });
  });

  describe('#failure', () => {
    beforeEach(() => {
      actions.failure({ error: 'problem' })
    });

    it('dispatches action', () => {
      expect(dispatch.mock.calls).toMatchSnapshot();
    });
  });

  describe('#getToken', () => {
    let httpClient, outcomes;

    beforeEach(() => {
      httpClient = jest.fn();
      outcomes = {
        success: jest.fn().mockReturnValue('y'),
        failure: jest.fn().mockReturnValue('n'),
      };
    });

    describe('when non-http error', () => {
      let error;

      beforeEach(() => {
        httpClient.mockImplementation(() => {
          error = new Error();
          throw error;
        });
        actions.getToken('spotify', httpClient, outcomes)(dispatch);
      });

      it('calls failure', () => {
        expect(outcomes.failure).toHaveBeenCalledWith(error);
      });

      it('dispatches action', () => {
        expect(dispatch).toHaveBeenCalledWith('n');
      });
    });

    describe('when error', () => {
      let error;

      beforeEach(() => {
        httpClient.mockImplementation(() => {
          error = new Error();
          error.response = {
            status: 404,
            message: 'message',
          };
          throw error;
        });
        actions.getToken('spotify', httpClient, outcomes)(dispatch);
      });

      it('calls failure', () => {
        expect(outcomes.failure).toHaveBeenCalledWith(error.response);
      });
      it('dispatches action', () => {
        expect(dispatch).toHaveBeenCalledWith('n');
      });
    });

    describe('when success', () => {
      beforeEach(() => {
        httpClient.mockReturnValue({ data: [1, 2, 3] });
        actions.getToken('spotify', httpClient, outcomes)(dispatch);
      });

      it('calls success', () => {
        expect(outcomes.success).toHaveBeenCalledWith('spotify', [1, 2, 3]);
      });

      it('dispatches action', () => {
        expect(dispatch).toHaveBeenCalledWith('y');
      });
    });
  });
});
