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

test('determineString with should return "fizzbuzz"', t => {
	t.is(FizzBuzz.determineString(15), 'fizzbuzz', 'determineString with value of 15 did not return "fizzbuzz"');
});

test('determineString with should return "fizz"', t => {
	const values = [3, 6, 9, 12];

	values.forEach(val => {
		t.is(FizzBuzz.determineString(val), 'fizz', `determineString with value of ${val} did not return "fizz"`);
	});
});

test('determineString with should return "buzz"', t => {
	const values = [5, 10, 20, 25];

	values.forEach(val => {
		t.is(FizzBuzz.determineString(val), 'buzz', `determineString with value of ${val} did not return "buzz"`);
	});
});

test('createFizzBuzzData returns correct length', t => {
	const values = [10, 100, 1000];

	values.forEach(val => {
		t.is(FizzBuzz.createFizzBuzzData(val).length, val, `createFizzBuzzData failed with value of ${val}`);
	});
});

test('createFizzBuzzData returns correct data', t => {
	const data = FizzBuzz.createFizzBuzzData(100);

	t.is(data[0], '1', 'createFizzBuzzData failed to create the value of "1"');

	t.is(data[1], '2', 'createFizzBuzzData failed to create the value of "2"');

	t.is(data[2], 'fizz', 'createFizzBuzzData failed to create the value of "fizz"');

	t.is(data[4], 'buzz', 'createFizzBuzzData failed to create the value of "buzz"');

	t.is(data[14], 'fizzbuzz', 'createFizzBuzzData failed to create the value of "fizzbuzz"');
})
