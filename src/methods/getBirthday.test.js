import {getBirthDay} from "./getBirthday.js";

describe('Get birthday', () => {
	it('getCentury returns correct year', () => {
		expect(getBirthDay('870507')).toContain('1987')
		expect(getBirthDay('750419')).toContain('1975')
		expect(getBirthDay('052307')).toContain('2005')
		expect(getBirthDay('422823')).toBe('Date of birth must be before today')
	})

	it('getMonth returns correct month name', () => {
		expect(getBirthDay('870507')).toContain('maja')
		expect(getBirthDay('750419')).toContain('kwietnia')
		expect(getBirthDay('052307')).toContain('marca')
		expect(getBirthDay('422823')).toBe('Date of birth must be before today')
	})

	it('getBirthday returns correct day', () => {
		expect(getBirthDay('870507')).toContain('7 ')
		expect(getBirthDay('750419')).toContain('19 ')
		expect(getBirthDay('052307')).toContain('7 ')
		expect(getBirthDay('422823')).toBe('Date of birth must be before today')
	})

	it('getBirthday returns full date', () => {
		expect(getBirthDay('870507')).toBe('7 maja 1987')
		expect(getBirthDay('750419')).toBe('19 kwietnia 1975')
		expect(getBirthDay('052307')).toBe('7 marca 2005')
		expect(getBirthDay('422823')).toBe('Date of birth must be before today')
	})
})