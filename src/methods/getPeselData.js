import { getSex } from "./getSex"

export const getPeselData = (inputPesel) => {
  const errorMessage = 'PESEL is not valid'
  const peselValidate = (pesel) => {
    if (pesel.length === 11) {
    const calcCheckSum = pesel.split('').map((number, index) => {
      switch (index) {
        case 0:
          number = number * 1
          break
        case 1:
          number = number * 3
          break
        case 2:
          number = number * 7
          break
        case 3:
          number = number * 9
          break
        case 4:
          number = number * 1
          break
        case 5:
          number = number * 3
          break
        case 6:
          number = number * 7
          break
        case 7:
          number = number * 9
          break
        case 8:
          number = number * 1
          break
        case 9:
          number = number * 3
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