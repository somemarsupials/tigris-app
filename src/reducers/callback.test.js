import { success, failure } from './callback';

describe('callback reducers', () => {
  describe('success', () => {
    it('returns action data for success action', () => {
      expect(success(null, {
        type: 'CALLBACK/SUCCESS',
        data: 'data',
      })).toEqual('data');
    });

    it('returns state for other action', () => {
      expect(success(123, { type: 'other' })).toEqual(123);
    });

    it('returns null when no state is given', () => {
      expect(success(undefined, { type: 'other' })).toBe(null);
    });
  });

  describe('failure', () => {
    it('returns action error for failure action', () => {
      expect(failure(null, {
        type: 'CALLBACK/FAILURE',
        error: 'error',
      })).toEqual('error');
    });

    it('returns state for other action', () => {
      expect(failure(123, { type: 'other' })).toEqual(123);
    });

    it('returns null when no state is given', () => {
      expect(failure(undefined, { type: 'other' })).toBe(null);
    });
  });
});
