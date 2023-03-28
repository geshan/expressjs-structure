import bcrypt from 'bcrypt'
const saultRounds = 12
export const encryptPass = (value) => {
  return bcrypt.hashSync(value, saultRounds)
}
export const comparePass = (originVal, hashedVal) => {
  return bcrypt.compareSync(originVal, hashedVal)
}
