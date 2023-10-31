import {lang} from "../lang/lang.js";

export const getBirthDay = (date, userLang = 'pl') => {
  const dateDetails = date.split('')
  const months = {
    1: lang[userLang].verification.birthday.month.jan,
    2: lang[userLang].verification.birthday.month.feb,
    3: lang[userLang].verification.birthday.month.mar,
    4: lang[userLang].verification.birthday.month.apr,
    5: lang[userLang].verification.birthday.month.may,
    6: lang[userLang].verification.birthday.month.june,
    7: lang[userLang].verification.birthday.month.july,
    8: lang[userLang].verification.birthday.month.aug,
    9: lang[userLang].verification.birthday.month.sep,
    10: lang[userLang].verification.birthday.month.oct,
    11: lang[userLang].verification.birthday.month.nov,
    12: lang[userLang].verification.birthday.month.dec,
  }

  const getCentury = (controlNumber) => {
    let year = `${dateDetails[0]}${dateDetails[1]}`
    switch (controlNumber) {
      case '0':
      case '1':
        year = '19' + year
        break
      case '2':
      case '3': 
        year = '20' + year
        break
      case '4':
      case '5': 
        year = '21' + year
        break
      case '6':
      case '7': 
        year = '22' + year
        break
      case '8':
      case '9': 
        year = '18' + year
        break
    }

    return year
  }

  const getMonth = (monthNumber) => {
    const month = () => {
      const monthName = monthNumber.split('')[0] % 2 === 0 ? (
        months[monthNumber.split('')[1]]
      ) : (
        months['1' + monthNumber.split('')[1]]
      )

      return monthName
    }

    return month(`${getCentury(dateDetails[2])}`)
  }

  const getMonthNumber = (monthNumber) => {
    const month = () => {
      const monthFullNumber = monthNumber.split('')[0] % 2 === 0 ? (
        '0' + monthNumber.split('')[1]
      ) : (
        '1' + monthNumber.split('')[1]
      )

      return monthFullNumber
    }

    return month(`${getCentury(dateDetails[2])}`)
  }

  const today = new Date()
  const birthDay = new Date(`${getCentury(dateDetails[2])}/${getMonthNumber(dateDetails[2] + dateDetails[3])}/${dateDetails[4]}${dateDetails[5]}`)

  try {
    if (Date.prototype.toString.call(birthDay) !== 'Invalid Date') {
      const timeGap = (today.getTime() - birthDay.getTime()) / (1000 * 3600 * 24)
      if (timeGap > 0) {
        return `${dateDetails[4] === '0' ? '' : dateDetails[4]}${dateDetails[5]} ${getMonth(dateDetails[2] + dateDetails[3])} ${getCentury(dateDetails[2])}`
      } else {
        throw new Error(lang[userLang].verification.birthday.fromFuture)
      }
    } else {
      throw new Error(lang[userLang].verification.birthday.invalid)
    }
  } catch(err) {
    return err.message
  }
}
