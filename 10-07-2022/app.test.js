const DNAStrand = require('./app')

test('Replaces each symbol with its complement.', () => {
    expect(DNAStrand('ACCTG')).toBe('TGGAC')
})