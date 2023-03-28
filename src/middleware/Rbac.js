import {  forbiddenResponse } from '../helper/apiResponse.js';


export const roleAccess = (allowed = ['*']) => {
    return (req, res, next) => {
        
        const user = req.user_info;

        if (allowed[0] === "*" || (allowed.indexOf(parseInt(user.role)) !== -1)) {
            next()
        } else {
            return forbiddenResponse(res)
        }
    }
}
