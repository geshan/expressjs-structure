export const RequestCompleted = (res, msg) => {
  const data = {
    status: 1,
    code: 200,
    msg: msg,
  }
  return res.status(200).json(data)
}

export const RequestRecivedWithDataAndMessage = (res, msg, data) => {
  const resData = {
    status: 1,
    code: 200,
    msg: msg,
    data: data,
  }
  return res.status(200).json(resData)
}

export const ErrorStatusWithMessage = (res, msg) => {
  const data = {
    status: 0,
    code: 500,
    msg: msg,
  }
  return res.status(500).json(data)
}

export const ServiceUnavailable = (res, msg) => {
  const data = {
    status: 0,
    code: 503,
    msg: msg,
  }
  return res.status(503).json(data)
}

export const Unavailable = (res, msg) => {
  const data = {
    status: 0,
    code: 404,
    msg: msg,
  }
  return res.status(404).json(data)
}

export const AlreadyExists = (res, msg) => {
  const data = {
    status: 0,
    code: 400,
    msg: msg,
  }
  return res.status(400).json(data)
}

export const ValidationError = (res, msg, data) => {
  const resData = {
    status: 0,
    code: 400,
    msg: msg,
    data: data,
  }
  return res.status(400).json(resData)
}
export const ServerErrorWithDataAndMessage = (res, msg, data) => {
  const resData = {
    status: 0,
    code: 500,
    msg: msg,
    data: data,
  }
  return res.status(500).json(resData)
}

export const MethodNotAllowed = (res, msg) => {
  const data = {
    status: 0,
    code: 405,
    msg: msg,
  }
  return res.status(405).json(data)
}

export const UnathorizedAccess = (res, msg) => {
  const data = {
    status: 0,
    msg: msg,
    code: 401,
  }
  return res.status(401).json(data)
}
export const NotAccessible = (res, msg) => {
  const data = {
    code: 403,
    status: 0,
    msg: msg,
  }
  return res.status(403).json(data)
}
