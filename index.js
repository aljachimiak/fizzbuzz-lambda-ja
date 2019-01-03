function FizzBuzz() {}

module.exports = FizzBuzz;

const isDivisibleByThree = (val) => {
	return (val % 3) === 0;
}

const isDivisibleByFive = (val) => {
	return (val % 5) === 0;
}

const determineString = (val) => {
	if (isDivisibleByFive(val) && isDivisibleByThree(val)) {
		return 'fizzbuzz';
	}
	return val.toString();
}

FizzBuzz.isDivisibleByThree = isDivisibleByThree;
FizzBuzz.isDivisibleByFive  = isDivisibleByFive;
FizzBuzz.determineString = determineString;
