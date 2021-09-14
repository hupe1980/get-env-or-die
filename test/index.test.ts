import { URL } from 'url';
import { getEnv, getStringEnv, getIntEnv, getBoolEnv, getArrayEnv, getUrlEnv, getDateEnv, getRegExpEnv } from '../src';

test('getEnv - default', () => {
  const expected = 'hello, world!';
  process.env.TEST_STRING = expected;
  expect(getEnv('TEST_STRING')).toBe(expected);
});

test('getEnv - fallback', () => {
  const expected = 'hello, world!';
  expect(getEnv('XXX', expected)).toBe(expected);
});

test('getEnv - die', () => {
  expect(() => getEnv('XXX')).toThrow('Env XXX does not exist and no fallback value provided.');
});

test('getStringEnv - default', () => {
  const expected = 'hello, world!';
  process.env.TEST_STRING = expected;
  expect(getStringEnv('TEST_STRING')).toBe(expected);
});

test('getStringEnv - fallback', () => {
  const expected = 'hello, world!';
  expect(getStringEnv('XXX', expected)).toBe(expected);
});

test('getStringEnv - die', () => {
  expect(() => getStringEnv('XXX')).toThrow('Env XXX does not exist and no fallback value provided.');
});

test('getIntEnv - default', () => {
  process.env.INT_STRING = '10';
  expect(getIntEnv('INT_STRING')).toBe(10);
});

test('getIntEnv - fallback', () => {
  expect(getIntEnv('XXX', 10)).toBe(10);
});

test('getIntEnv - die', () => {
  expect(() => getIntEnv('XXX')).toThrow('Env XXX does not exist and no fallback value provided.');
});

test('getIntEnv - convert error', () => {
  process.env.NO_INT = 'XYZ';
  expect(() => getIntEnv('NO_INT')).toThrow('Env NO_INT is not an integer.');
});

test('getBoolEnv - default', () => {
  process.env.BOOL_STRING = '1';
  expect(getBoolEnv('BOOL_STRING')).toBe(true);
});

test('getBoolEnv - fallback', () => {
  expect(getBoolEnv('XXX', true)).toBe(true);
});

test('getBoolEnv - die', () => {
  expect(() => getBoolEnv('XXX')).toThrow('Env XXX does not exist and no fallback value provided.');
});

test('getBoolEnv - convert error', () => {
  process.env.NO_BOOL = 'X';
  expect(() => getBoolEnv('NO_BOOL')).toThrow('Env NO_BOOL is not a boolean.');
});

test('getArrayEnv - default', () => {
  process.env.ARRAY_STRING = 'a,b,c';
  expect(getArrayEnv('ARRAY_STRING')).toEqual(['a', 'b', 'c']);
});

test('getArrayEnv - fallback', () => {
  expect(getArrayEnv('XXX', ['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
});

test('getArrayEnv - die', () => {
  expect(() => getArrayEnv('XXX')).toThrow('Env XXX does not exist and no fallback value provided.');
});

test('getUrlEnv - default', () => {
  const expected = 'http://example.com';
  process.env.URL_STRING = expected;
  expect(getUrlEnv('URL_STRING')).toEqual(new URL(expected));
});

test('getUrlEnv - fallback', () => {
  const expected = 'http://example.com';
  expect(getUrlEnv('XXX', new URL(expected))).toEqual(new URL(expected));
});

test('getUrlEnv - die', () => {
  expect(() => getUrlEnv('XXX')).toThrow('Env XXX does not exist and no fallback value provided.');
});

test('getUrlEnv - convert error', () => {
  process.env.NO_URL = 'XYZ';
  expect(() => getUrlEnv('NO_URL')).toThrow('Env NO_URL is not an url.');
});

test('getDateEnv - default', () => {
  const expected = 'December 17, 1995 03:24:00';
  process.env.DATE_STRING = expected;
  expect(getDateEnv('DATE_STRING')).toEqual(new Date(expected));
});

test('getDateEnv - fallback', () => {
  const expected = 'December 17, 1995 03:24:00';
  expect(getDateEnv('XXX', new Date(expected))).toEqual(new Date(expected));
});

test('getDateEnv - die', () => {
  expect(() => getDateEnv('XXX')).toThrow('Env XXX does not exist and no fallback value provided.');
});

test('getDateEnv - convert error', () => {
  process.env.NO_DATE = 'XYZ';
  expect(() => getDateEnv('NO_DATE')).toThrow('Env NO_DATE is not a date.');
});

test('getRegExpEnv - default', () => {
  process.env.REG_EXP_STRING = '/ab+c/';
  expect(getRegExpEnv('REG_EXP_STRING')).toEqual(new RegExp('ab+c'));
});

test('getRegExpEnv - default with flags', () => {
  process.env.REG_EXP_STRING = '/ab+c/i';
  expect(getRegExpEnv('REG_EXP_STRING')).toEqual(new RegExp('ab+c', 'i'));
});

test('getRegExpEnv - fallback', () => {
  expect(getRegExpEnv('XXX', new RegExp('ab+c', 'i'))).toEqual(new RegExp('ab+c', 'i'));
});

test('getRegExpEnv - die', () => {
  expect(() => getRegExpEnv('XXX')).toThrow('Env XXX does not exist and no fallback value provided.');
});

test('getRegExpEnv - die', () => {
  process.env.REG_EXP_STRING = '/ab+c/ix';
  expect(() => getRegExpEnv('REG_EXP_STRING')).toThrow('Env REG_EXP_STRING is not a regExp.');
});