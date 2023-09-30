import {getPeselData} from "./getPeselData.js";

describe('Get PESEL data', () => {
	it('getPeselData validate PESEL', () => {
		expect(getPeselData('94111366519')).toBe(true)
		expect(getPeselData('94111366529')).toBe('PESEL is not valid')
		expect(getPeselData('941113665290')).toBe('PESEL is not valid')
		expect(getPeselData('9411136652')).toBe('PESEL is not valid')
		expect(getPeselData('9411h366529')).toBe('PESEL is not valid')
	})
})