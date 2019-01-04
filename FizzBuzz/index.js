const FizzBuzz = require('./fizzbuzz');

console.log(FizzBuzz.createFizzBuzzData(100));

exports.handler = async (event) => {
	let number = 100;
	const qsParam = event['queryStringParameters'] || {};
	const queryNumber = qsParam['number'] || '1';
	if (queryNumber.length > 0) {
		try {
			number = parseInt(queryNumber);
			if (number > 10000) {
				number = 10000;
			}
		} catch (err) {
			// do nothing
		}
	}
	const data = FizzBuzz.createFizzBuzzData(number);
	// for (let i = 1; i <= number; i++) {
	// 	data.push(i.toString());
	// }
	const returnObj = {
		data,
		number,
		queryNumber,
		qsParam
	};
	const response = {
		statusCode: 200,
		body: JSON.stringify(returnObj)
	};
	return response;
};
