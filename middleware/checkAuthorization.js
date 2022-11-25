const checkAuthorization = (req, res, next)=>{
    try {
        if(!req.headers.token){
            Error("Token is required")
        }
        else{
            const data = verifyToken(req.headers.token)
            req.body.tokenData = data
            next()
        }
    } catch (error) {
        return res.code(403).json({
            message: "Session Timeout",
            error: true,
            success: false,
            data: error 
        })
    }
}