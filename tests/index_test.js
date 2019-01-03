import test from 'ava';
import FizzBuzz from '../index';

test('IsDivisibleByThree function passes', t => {
	t.is(FizzBuzz.isDivisibleByThree(3), true, 'isDivisibleByThree failed with value 3');
});

test('IsDivisibleByThree function fails', t => {
	const values = [1, 2, 4];

	values.forEach(val => {
		t.is(FizzBuzz.isDivisibleByThree(val), false, `isDivisibleByThree failed with value ${val}`);
	});
});
