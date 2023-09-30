import {getSex} from "./getSex.js";

describe('get sex', () => {
	it('getSex returns correct sex', () => {
		expect(getSex('8')).toBe('Female')
		expect(getSex('7')).toBe('Male')
		expect(getSex('4')).toBe('Female')
		expect(getSex('9')).toBe('Male')
		expect(getSex('0')).toBe('Female')
		expect(getSex('3')).toBe('Male')
	})
})