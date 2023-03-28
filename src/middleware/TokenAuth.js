import * as apiResponse from '../helper/apiResponse.js'
import jwt from 'jsonwebtoken'

const CheckTokenExpiry = (req, res, next) => {
  const token = req.headers['x-access-token']
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' })
  }
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: 'Failed to authenticate token.' })
    }
    // if everything good, save to request for use in other routes
    next()
  })
}
export default CheckTokenExpiry
