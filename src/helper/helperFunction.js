export const EmailValidation = (val) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val.trim())
}
export const DatesMovements = (
  date1,
  date2 = new Date(),
  milisecondDiffrenece = 0,
) => {
  const Date1 = new Date(date1).getTime()
  const Date2 = new Date(date2).getTime()

  if (Date1 + milisecondDiffrenece === Date2) {
    return 1
  } else {
    return -1
  }
}
export const createOtp = () => {
  return Math.random().toString().substring(3, 10)
}

export const createRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}
