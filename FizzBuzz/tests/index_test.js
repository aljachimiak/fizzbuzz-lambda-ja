import test from 'ava';
import index from '../index';

test('Index Test', t => {
	const responses = {
		number_100: null
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
			const data = responses.number_100.data;
			t.is(data.length, 100);
		});
});
