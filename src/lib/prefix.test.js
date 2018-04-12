import prefix from './prefix';

describe('prefix', () => {
  let obj;

  beforeEach(() => {
    obj = prefix('PRE', ['A', 'B']);
  });

  it('applies prefix to keys', () => {
    expect(obj).toEqual({
      A: 'PRE/A',
      B: 'PRE/B',
    });
  });
});
