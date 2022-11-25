const mongoose = require("mongoose")

const name = {
    first_name:{
        type:String,
        min:2,
        max:15,
        // required:true
    },
    middle_name:{
        type:String,
        max:15,
        default:""
    },
    last_name:{
        type:String,
        max:15,
        default:""
    },
    // full_name: `${this.first_name}${this.middle_name && " "+this.middle_name}${this.last_name && " "+this.last_name}`,
    updated_at: Date
}

{}

// Blogs

const Blogs = mongoose.Schema({
    id: {
        unique: true,
        type: Number,
        default: 1,
    },
    title: {
        required: true,
        min: 5,
        max: 40,
        type: String,
        default: "Title",
    },
    category: [{
        type: String,
        min: 3,
        max: 10,
    }],
    heading: {
        type: String,
        min:6,
        max:20,
        default: "Heading",
    },
    image: String,
    // written_by: {
    //     type: String,
    //     default: "user",
    // },
    // published_by:String,
    written_by:{
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    short_description: {
        max: 250,
        type: String,
        default: ""
    },
    description: {
        type: String,
        default: ""
        // required:true
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    },
    view_count: {
        type: Number,
        default: 0
    },
    key_words: [{
        type:Number
    }]

}, { timestamps: true })

// Blogs.createIndex("written_by")
// Blogs.createIndex("category")
// Blogs.

{}

// const user = mongoose.Schema({
//     user_name:{
//         type:String,
//         min:4,
//         max:20,
//         unique:true,
//         required:true
//     },
//     profile_photo: String,
//     name,
//     bio:{
//         type:String,
//         max:60,
//     },
//     followers:[
//         {
//             id: mongoose.Types.ObjectId,
//             // type:{
//             //     type:String
//             // },
//             date: Date
//         }
//     ],
//     following:[
//         {
//             id: mongoose.Types.ObjectId,
//             date: Date
//         }
//     ],
//     blogs: [Blogs],
// })

const user = mongoose.Schema({
    user_name:{
        type:String,
        min:4,
        max:20,
        unique:true,
        required:true
    },
    profile_photo: String,
    name,
    bio:{
        type:String,
        max:60,
    },
    blogs:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Blog",
        }
    ],
    followers:[
        {
            // id: mongoose.Types.ObjectId,
            // type:{
            //     type:String
            // },
            // data:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            // },
            date: Date
        }
    ],
    following:[
        {
            date: Date,
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    passcode:{
        type: String,
        min: 6,
        max: 20,
        required: true,
    }
}, { timestamps: true, toJSON: { virtuals: true } } )

user.virtual("full_name").get(
    function(){
        return `${this.name.first_name}${this.name.middle_name && " "+this.name.middle_name}${this.name.last_name && " "+this.name.last_name}`
    }
).set(function(fullname) {
    fullname = fullname.split(" ")
     
    const first_name = fullname[0]
    const middle_name = fullname.length==2 ? "" : fullname[1]
    const last_name = fullname.length==2 ? fullname[1] : fullname[2]
    this.set({ name: { first_name, middle_name, last_name } });
})

exports.user_model = mongoose.model("User",user)
exports.blog_model = mongoose.model("Blog",Blogs)