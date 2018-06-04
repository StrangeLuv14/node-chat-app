const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var str = 123;
		res = isRealString(str);
		expect(res).toBeFalsy();
	});

	it('should reject string with only space', () => {
		var str = '      ';
		res = isRealString(str);
		expect(res).toBeFalsy();

	});

	it('should allow string with non-space characters', () => {
		var str = '  I   feel   good!    ';
		res = isRealString(str);
		expect(res).toBeTruthy();
	});
});
