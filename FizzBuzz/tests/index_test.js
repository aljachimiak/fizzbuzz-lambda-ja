import test from 'ava';
import index from '../index';

test('Index Test', t => {
	const responses = {
		number_100: null,
		missing_number: null,
		number_999999: null
	};
	return Promise.resolve(null)
		.then(() => {
			return index.handler({
				queryStringParameters: {number: 100}
			});
		}) 
		.then(res => {
			responses.number_100 = JSON.parse(res.body);
			return null;
		})
		.then(() => {
			return index.handler({
				queryStringParameters: {}
			});
		}) 
		.then(res => {
			responses.missing_number = JSON.parse(res.body);
			return null;
		})
		.then(() => {
			return index.handler({
				queryStringParameters: {number: '999999'}
			});
		}) 
		.then(res => {
			responses.number_999999 = JSON.parse(res.body);
			return null;
		})
		.then(() => {
			const data = responses.number_100.data;
			t.is(data.length, 100, "Index returns incorrect data length when 100 is reuested");
		})
		.then(() => {
			const data = responses.missing_number.data;
			t.is(data.length, 100, "Index returns incorrect data length when no number is requested");
		})
		.then(() => {
			const data = responses.number_999999.data;
			t.is(data.length, 10000, "Index returns incorrect data length when a too large number is requested");
		});
});
