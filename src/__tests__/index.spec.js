const { getPhrase } = require('../../dist');

describe('getPhrase function', () => {
    test('yo, tomar => yo tomo', () => {
        expect(getPhrase('yo', 'tomar')).toEqual('yo tomo');
    });
});

describe('getPhrase function', () => {
    test('vosotros, tomar => vosotros tomais', () => {
        expect(getPhrase('vosotros', 'tomar')).toEqual('vosotros tomais');
    });
});


describe('getPhrase arst function', () => {
    test('vosotros, tomar => vosotros tomais', () => {
        expect(getPhrase('vosotros', 'tomar')).toEqual('vosotros tomais');
    });
});