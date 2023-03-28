export const CompletionResponse = (res, msg) => {
  var data = {
    status: 1,
    code: 200,
    message: msg,
  }
  return res.status(200).json(data)
}

export const CompletionResponseAlongValue = (res, msg, data) => {
  var resData = {
    status: 1,
    code: 200,
    message: msg,
    data: data,
  }
  return res.status(200).json(resData)
}

export const ErrorStatus = (res, msg) => {
  var data = {
    status: 0,
    code: 500,
    message: msg,
  }
  return res.status(500).json(data)
}

export const NotAvailable = (res, msg) => {
  var data = {
    status: 0,
    code: 404,
    message: msg,
  }
  return res.status(404).json(data)
}

export const AlreadyExists = (res, msg) => {
  var data = {
    status: 0,
    code: 400,
    message: msg,
  }
  return res.status(400).json(data)
}

export const ValidationValues = (res, msg, data) => {
  var resData = {
    status: 0,
    code: 400,
    message: msg,
    data: data,
  }
  return res.status(400).json(resData)
}
export const BackendErrorWithValues = (res, msg, data) => {
  var resData = {
    status: 0,
    code: 500,
    message: msg,
    data: data,
  }
  return res.status(500).json(resData)
}

export const UnaccessValues = (res, msg) => {
  var data = {
    status: 0,
    message: msg,
    code: 401,
  }
  return res.status(401).json(data)
}
export const NotAccessible = (res, msg = 'Forbidden') => {
  var data = {
    code: 403,
    status: 0,
    message: msg,
  }
  return res.status(403).json(data)
}
