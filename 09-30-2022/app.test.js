const DNAtoRNA = require('./app')

test('Ts are converted into Us', () => {
  expect(DNAtoRNA('TTTTT')).toBe('UUUUU');
});