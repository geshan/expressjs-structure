import axios from 'axios'

export const CheckEmail = (val) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim())
}

export const GenerateSixDigitOtp = () => {
  // Generate a random 6-digit number
  const randomNumber = Math.floor(Math.random() * 1000000)

  // Convert the random number to a string and pad it with leading zeroes if necessary
  const otp = randomNumber.toString().padStart(6, '0')
  return otp
}

export const GenerateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min
}

export const GenerateRandomString = (length) => {
  var result = ''
  var characters = ''
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

export const AxiosGetRequest = (url, token) => {
  return axios.get(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const AxiosPostRequest = (url, data, token) => {
  return axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const AxiosPutRequest = (url, data, token) => {
  return axios.put(url, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const AxiosDeleteRequest = (url, token) => {
  return axios.delete(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export const AxiosPostRequestWithoutToken = (url, data) => {
  return axios.post(url, data)
}

export const AxiosPutRequestWithoutToken = (url, data) => {
  return axios.put(url, data)
}

export const AxiosDeleteRequestWithoutToken = (url) => {
  return axios.delete(url)
}
