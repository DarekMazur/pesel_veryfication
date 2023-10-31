import {lang} from "../lang/lang.js";

export const getPeselData = (inputPesel, userLang = 'pl') => {
  const errorMessage = lang[userLang].verification.data.invalid
  const errorType = lang[userLang].verification.data.invalidFormat
  const peselValidate = (pesel) => {
    if (pesel.length === 11) {
      if (isNaN(Number(pesel))) {
        return errorType
      }

      const calcCheckSum = pesel.split('').map((number, index) => {
        switch (index) {
          case 0:
          case 4:
          case 8:
            number = number * 1
            break
          case 1:
          case 5:
          case 9:
            number = number * 3
            break
          case 2:
          case 6:
            number = number * 7
            break
          case 3:
          case 7:
            number = number * 9
            break
        }

        return Number(String(number).slice(-1))
      })

      calcCheckSum.pop()
      const checkSum = calcCheckSum.reduce((acc, currentValue) => (
        acc + currentValue
      ))

      const isValid = 10 - Number(String(checkSum).slice(-1)) === Number(inputPesel[inputPesel.length - 1])

      return isValid || errorMessage

    } else {
      throw new Error(errorMessage)
    }
  }

  try {
    peselValidate(inputPesel)
    return peselValidate(inputPesel)
  } catch (err) {
    return err.message
  }
}