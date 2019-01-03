import test from 'ava';
import FizzBuzz from '../index';

test('IsDivisibleByThree function returns true', t => {
	const values = [3, 6, 9];

	values.forEach(val => {
		t.is(FizzBuzz.isDivisibleByThree(val), true, `isDivisibleByThree failed with value ${val}`);
	});
});

test('IsDivisibleByThree function returns false', t => {
	const values = [1, 2, 4];

	values.forEach(val => {
		t.is(FizzBuzz.isDivisibleByThree(val), false, `isDivisibleByThree failed with value ${val}`);
	});
});

test('IsDivisibleByFive function returns true', t => {
	const values = [5, 10, 15];

	values.forEach(val => {
		t.is(FizzBuzz.isDivisibleByFive(val), true, `isDivisibleByFive failed with value ${val}`);
	});
});

test('IsDivisibleByFive function returns false', t => {
	const values = [1, 2, 3, 4, 6, 7, 8, 9];

	values.forEach(val => {
		t.is(FizzBuzz.isDivisibleByFive(val), false, `isDivisibleByFive failed with value ${val}`);
	});
});

test('determineString returns a string', t => {
	t.is(typeof FizzBuzz.determineString(1), 'string', 'determineString did not return a string');
});
