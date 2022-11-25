const express = require("express")
const { blog_model } = require("../models/user")
const router = express.Router()

router.get("/", async (req,res)=>{ 
    const { page } = req.body
    try {
        const userId = req.body.tokenData._id
        const blog = await blog_model.find({"written_by._id":{$ne:userId}}).skip(page || 0).limit(14).populate("written_by");
        return res.status(200).json({
            success: true,
            data: blog,
            error: null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            error
        })
    }
})

router.post("/", async (req,res)=>{
    try {
        const userId = req.body.tokenData._id 
        req.body._id = userId
        req.body.image = req.body.image || "https://source.unsplash.com/random/h=250&w=250"
        const lastblog = await blog_model.findOne().sort('-id')
        if(lastblog){
            req.body.id = lastblog.id +1
            console.log(lastblog);
        }
        const blog = await new blog_model(req.body).save()
        return res.status(200).json({
            success: true,
            data: blog,
            error: null
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            error
        })
    }
})

router.get("/:id",async (req,res)=>{
    console.log("in find by id");
    try {
        const blog = await blog_model.findById(req.params.id);
        
        return res.json({
            success: true,
            data: blog,
            error: null
        }).status(200)
    } catch (error) {
        return res.json({
            success: false,
            data: [],
            error
        }).status(500)
    }
})

router.delete("/", async (req,res)=>{
    try {
        const data = await blog_model.remove()
        return res.status(200).json({
            success: true,
            data,
            error:null,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            error
        })
    }
})

router.delete("/:id", async (req,res)=>{
    try {
        const data = await blog_model.findByIdAndRemove(req.param.id)
        return res.status(200).json({
            success: true,
            data,
            error:null,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            data: [],
            error
        })
    }
})

router.get("/most-liked",async (req,res)=>{
    try {
        const blog = await blog_model.find().sort("liked").skip(req.body.skip || 0).limit(req.body.limit || 20);
        
        return res.json({
            success: true,
            data: blog,
            error: null
        }).status(200)
    } catch (error) {
        return res.json({
            success: false,
            data: [],
            error
        }).status(500)
    }
})

// router.get("/:user",async (req,res)=>{
//     try {
//         const blog = await blog_model.find({writtrnBy}).sort("liked").skip(req.body.skip || 0).limit(req.body.limit || 20);
        
//         return res.json({
//             success: true,
//             data: blog,
//             error: null
//         }).status(200)
//     } catch (error) {
//         return res.json({
//             success: false,
//             data: [],
//             error
//         }).status(500)
//     }
// })


module.exports.blog_routes = router