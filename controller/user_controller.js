const chalk = require("chalk")
const express = require("express")
const { verifyToken, createToken } = require("../helper_funcs/jwt")
const { user_model } = require("../models/user")

const router = express.Router()

router.get("/", async (req,res)=>{
    const {user_name, passcode} = req.body
    let resp 
    try {
        const userDetails = await user_model.findOne({ user_name: user_name })
        console.log("userDetails",userDetails);
        if( userDetails?.user_name === user_name )
        {
            if ( userDetails?.passcode === passcode ) {
                const token = createToken( { id: userDetails?._id, user_name, passcode } )
                res.statusCode = 200
                resp= {
                    message: "Logged in Successfully",
                    error: false,
                    success: true,
                    data: userDetails,
                    token
                }
            }
            else{
                res?.statusCode = 404
                resp= {
                    message: "Pasecode not found",
                    error: true,
                    success: false,
                    data: userDetails,
                }
            }
        }
        else{
            res?.statusCode = 404
            resp= {
                message: "Username not found",
                error: true,
                success: false,
                data: {},
            }
        }
    } catch (error) {
        console.log(chalk.bgRed("error while login",error));
        res?.statusCode = 503
        resp = error
    }
    return res.json(resp)
})

router.post("/", async ( req, res )=>{
    try {
        const userData = await new user_model(req.body).save()
        res.status(201).json({
            msg:"User Created Successfully",
            error: false,
            success: true,
            data: userData
        })
    } catch (error) {
        res.status(503).json({
            msg:"Error while Creating User",
            error: true,
            success: false,
            data: error
        })
    }
})

router.patch("/", async ( req, res )=>{
    try {
        const { username, id } = req.body
        const data = verifyToken(req.headers.token)
        if(username){
            if(username !== data.user_name )
                Error("Not Authorised")
            const userData = await user_model.findOneAndUpdate({ user_name: username }, req,body, {new:true} )
            res.status(200).json({
                msg:"User Updated Successfully",
                error: false,
                success: true,
                data: userData
            })
        }
        else if(id){
            const userData = await user_model.findByIdAndUpdate( id , req,body, { new: true } )
            res.status(200).json({
                msg:"User Updated Successfully",
                error: false,
                success: true,
                data: userData
            })
        }
        else{
            Error("Username or Id required")
        }
    } catch (error) {
        res.status(503).json({
            msg:"Error while updating User",
            error: true,
            success: false,
            data: error
        })
    }
})

router.get("/all", async (req,res)=>{
    let resp 
    try {
        const userDetails = await user_model.find()
        res.statusCode = 200
        resp= {
            message: "Fetched All Users Successfully",
            error: false,
            success: true,
            data: userDetails,
        }
        
    } catch (error) {
        res.statusCode = 503
        resp = error
    }
    return res.json(resp)
})

router.delete("/", async (req,res)=>{
    let resp 
    try {
        const userDetails = await user_model.remove()
        res.statusCode = 200
        resp= {
            message: "Deleted All Users Successfully",
            error: false,
            success: true,
            data: userDetails,
        }
        
    } catch (error) {
        res.statusCode = 503
        resp = error
    }
    return res.json(resp)
})

router.delete("/:id", async (req,res)=>{
    let resp 
    try {
        const userDetails = await user_model.findByIdAndRemove(req.params.id)
        res.statusCode = 200
        resp= {
            message: "Deleted User Successfully",
            error: false,
            success: true,
            data: userDetails,
        }
        
    } catch (error) {
        res.statusCode = 503
        resp = error
    }
    return res.json(resp)
})

module.exports.user_routes = router
