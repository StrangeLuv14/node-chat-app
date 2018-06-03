const expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		var from = 'Shannon';
		var text = 'I feel fantasic!';

		var message   = generateMessage(from, text);

		expect(message ).toMatchObject({from, text});
		expect(typeof message .createdAt).toBe('number');
	})
});

describe('generateLocationMessage', () => {
	it('should generate correct location object', () => {
		var from = 'Eric';
		var latitude = 1;
		var longitude = 2;
		var url = 'https://www.google.com/maps?q=1,2';

		var message = generateLocationMessage(from, latitude, longitude);

		expect(message ).toMatchObject({from, url});
		expect(typeof message .createdAt).toBe('number');
	})
})
