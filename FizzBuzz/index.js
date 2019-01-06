const FizzBuzz = require('./fizzbuzz');
const Utils = require('./utils');

exports.handler = async (event) => {
	const qsParam = event['queryStringParameters'] || {};
	const number = Utils.determineNumber(qsParam);
	const data = FizzBuzz.createFizzBuzzData(number);

	const returnObj = {
		data,
		number,
		qsParam,
		lang: 'js'
	};
	const response = {
		statusCode: 200,
		body: JSON.stringify(returnObj)
	};
	return response;
};
