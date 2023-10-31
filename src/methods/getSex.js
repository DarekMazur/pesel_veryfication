export const getSex = (digit) => {
  if (digit % 2 === 0) {
    return 'Female'
  }

  return 'Male'
}