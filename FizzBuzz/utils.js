function Utils() {}

module.exports = Utils;

const determineNumber = (queryStringParams) => {
	const MIN_NUMBER = 1;
	const MAX_NUMBER = 10000;
	const DEFAULT_NUMBER = 100;
	
	if (queryStringParams) {
		let number = DEFAULT_NUMBER;
		const queryNumber = queryStringParams['number'];
		if (queryNumber && queryNumber.length > 0) {
			try {
				number = parseInt(queryNumber);
				if (isNaN(number)) {
					return DEFAULT_NUMBER;
				}
				number = Math.min(number, MAX_NUMBER);
				number = Math.max(number, MIN_NUMBER);
			} catch (err) {
				// do nothing
			}
		}
		return number;
	}
	
	return DEFAULT_NUMBER;
}

Utils.determineNumber = determineNumber;
