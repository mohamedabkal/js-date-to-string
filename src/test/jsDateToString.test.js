const jsDateToString = require('../index');

test('returns undefined if date is invalid', () => {
    expect(jsDateToString(null)).toBe(undefined);
})

test('returns now', () => {
    expect(jsDateToString(new Date())).toBe('now');
})

test('returns 20m', () => {
    const twentyMinutesInMs = 1200000;
    expect(jsDateToString(new Date(Date.now() - twentyMinutesInMs))).toBe('20m');
})

test('returns 2h', () => {
    const twoHoursInMs = 3600000 * 2;
    expect(jsDateToString(new Date(Date.now() - twoHoursInMs))).toBe('2h');
})

test('returns 4d', () => {
    const fourDaysInMs = 86400000 * 4;
    expect(jsDateToString(new Date(Date.now() - fourDaysInMs))).toBe('4d');
})

test('returns 1w', () => {
    const weekInMs = 604800000;
    expect(jsDateToString(new Date(Date.now() - weekInMs))).toBe('1w');
})

test('returns 6m', () => {
    const sixMonthsInMs = 2629746000 * 6;
    expect(jsDateToString(new Date(Date.now() - sixMonthsInMs))).toBe('6m');
})

test('returns 1y', () => {
    const yearInMs = 31556952000;
    expect(jsDateToString(new Date(Date.now() - yearInMs))).toBe('1y');
})