import test from 'ava';
import Utils from '../utils';

test('determineNumber handles empty queryStringObject', t => {
	t.is(Utils.determineNumber({}), 100, 'determineNumber doesnt return default value for empty queryString');
});

test('determineNumber returns default with missing number in query', t => {
	t.is(Utils.determineNumber({foo: 42}), 100, 'determineNumber doesnt return default value for missing number in queryString');
});

test('determineNumber returns default with string value for number in query', t => {
	t.is(Utils.determineNumber({number: 'poop'}), 100, 'determineNumber doesnt return default value for string value number in queryString');
});

test('determineNumber returns max with too large value for number in query', t => {
	t.is(Utils.determineNumber({number: '9999999999'}), 10000, 'determineNumber doesnt return max value for too large number in queryString');
});

test('determineNumber returns min with too small value for number in query', t => {
	t.is(Utils.determineNumber({number: '-1'}), 1, 'determineNumber doesnt return min value for too small number in queryString');
});
