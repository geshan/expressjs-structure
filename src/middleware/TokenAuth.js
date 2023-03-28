import * as apiResponse from '../helper/apiResponse.js'
import jwt from 'jsonwebtoken'

const tokenVerifier = (req, res, next) => {
  try {
    const Bearer = req.header('Authorization')
    const token = Bearer.replace('Bearer ', '')
    if (jwt.verify(token, process.env.JWT_SECRET_KEY)) {
      next()
    } else {
      return apiResponse.unauthorizedResponse(res, 'Access Denied')
    }
    // return apiResponse.unauthorizedResponse(res,error);
  } catch (error) {
    // Access Denied
    return apiResponse.unauthorizedResponse(res, error)
  }
}
export default tokenVerifier
