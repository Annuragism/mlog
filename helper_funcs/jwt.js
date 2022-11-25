const jwt = require("jsonwebtoken")
const childProcess = require("node:child_process") 

const getSecret = childProcess.execSync(`grep jwtSecret ${__dirname+"/../.env"} `).toString().split(" ").pop()

const createToken = ( details ) => {
    try {
        const token = jwt.sign( details , "_"+getSecret, { expiresIn: "12h" } )
            return token
    } catch (error) {
        return {
            error: error,
            token: null
        }
    }
}

const verifyToken = ( token ) => {
    try {
        const data = jwt.verify( token , "_"+getSecret )
        return data
    } catch (error) {
        if( error.message == "jwt expired"){
            return Error("Session Expired")
        }
        return Error(error.message)
    }
}

exports.createToken = createToken
exports.verifyToken = verifyToken

// console.log(verifyToken());