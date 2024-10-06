import { overwriteMiddlewareResult } from "mongoose"

class ApiError extends Error {
    constructor(
        statustasCode,
        message= "somethign went wrong",
        errors= [],
        stack = ""

    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = this.errors

        if(stack){
            this.stack = stack

        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export{ApiError}