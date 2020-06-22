import functions from '../functions'

test('getDateTime() - Should return a valid result', () => {
    expect(functions.getDateTime("2020-06-21T12:07:27.000Z")).toBe('Sun Jun 21 2020, at 5:07 pm')
})