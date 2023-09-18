export const getBirthDay = (date) => {
  const dateDetails = date.split('')
  const months = {
    1: 'stycznia',
    2: 'lutego',
    3: 'marca',
    4: 'kwietnia',
    5: 'maja',
    6: 'czerwca',
    7: 'lipca',
    8: 'sierpnia',
    9: 'września',
    10: 'października',
    11: 'listopada',
    12: 'grudnia',
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

  return `${dateDetails[4]}${dateDetails[5]} lorem ${getCentury(dateDetails[2])}`
}
