const mongoose = require("mongoose")

const db_url = "mongodb://localhost:27017/mlog"

mongoose.connect(db_url,(err)=>!err && console.log("Connected to mongoose on port 27017"))