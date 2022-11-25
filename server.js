const { app } = require("./app");
const PORT = process.env.port || 3109
const chalk = require("chalk");

//////////////  Setup Configs  //////////////
require("./config/index")


// Middlewares

// Routes
require("./routes/routes")

/// COWSAY 
var cowsay = require("cowsay");

// Server
app.listen(PORT,(err,res)=>{
    if(err) return Error("cannot connect to server");
    console.log(
        chalk.green.bold(
            cowsay.say({
                text : "listning on PORT "+PORT,
            })
        )
    );
})


