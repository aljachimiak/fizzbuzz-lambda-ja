function FizzBuzz() {}

module.exports = FizzBuzz;

FizzBuzz.isDivisibleByThree = (val) => {
	return (val % 3) === 0;
}

FizzBuzz.isDivisibleByFive = (val) => {
	return (val % 5) === 0;
}
