import test from 'ava';
import FizzBuzz from '../index';

test('IsDivisibleByThree functions passes', t => {
	t.is(FizzBuzz.isDivisibleByThree(4), true, 'isDivisibleByThree failed with value 3');
});
