const { app } = require("../app");
const { blog_routes } = require("../controller/blogs_controller");
const { user_routes } = require("../controller/user_controller");
const { checkToken } = require("../middleware/token_check");

// Test Route
app.get("/",(req,res)=>{
    res.send("Working ;) ")
})

// User Routes
app.use("/user",user_routes)

// valid Token Middleware
app.use(checkToken)

//Blog Routes
app.use("/blogs",blog_routes)

