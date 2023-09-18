import { getBirthDay } from "./getBirthday"
import { getSex } from "./getSex"

export const getPeselData = (inputPesel) => {
  const errorMessage = 'PESEL is not valid'
  const peselValidate = (pesel) => {
    if (pesel.length === 11) {
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
      return !isNaN(Number(number)) ? Number(String(number).slice(-1)) : `${index}: false`
    })

      calcCheckSum.pop()
      const checkSum = calcCheckSum.reduce((acc, currentValue) => (
        acc + currentValue
      ))

      console.log(10 - Number(String(checkSum).slice(-1)) === Number(inputPesel[inputPesel.length - 1]))
      console.log(getSex(inputPesel[inputPesel.length - 2]))
      console.log(getBirthDay(inputPesel.split('').slice(0,6).join('')))

    } else {
      throw new Error(errorMessage)
    }
  }

  try {
    peselValidate(inputPesel)
  } catch (err) {
    console.error(err.message)
  }
}