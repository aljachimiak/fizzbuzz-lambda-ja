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
	if (isDivisibleByThree(val)) {
		return 'fizz';
	}
	if(isDivisibleByFive) {
		return 'buzz';
	}
	return val.toString();
}

const createFizzBuzzData = (val) => {
	const data = [];
	for (i = 1; i <= val; i++) {
		data.push('poop');
	}
	return data;
}

FizzBuzz.isDivisibleByThree = isDivisibleByThree;
FizzBuzz.isDivisibleByFive  = isDivisibleByFive;
FizzBuzz.determineString = determineString;
FizzBuzz.createFizzBuzzData = createFizzBuzzData;
