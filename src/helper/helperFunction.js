
export const isEmail = (val) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val.trim())
}
export const compareDate = (
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
export const generateOTP = () => {
  return Math.random().toString().substring(2, 8)
}

export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}
