import {year} from "./getYear.js";

describe('get year', () => {
	//if test fails check if current year is correct first
	const currentYear = 2023
	
	it('getSex returns correct sex', () => {
		expect(year).toBe(currentYear)
	})
})