const express = require ("express")
const connect = require("./configs/db");
const UserController = require("./controller/user.controller")

const app=express ()
app.use(express.json())

app.use("/users",UserController)



app.listen(5000, async () => {
    try{
        await connect ()
        console.log("listening on port 5000")
    }
    catch(err)
    {
        console.log("err")
    }
})