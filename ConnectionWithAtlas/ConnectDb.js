let mongodb = require("mongoose")
require("dotenv").config()
let url = process.env.ATLAS_URL
console.log()

mongodb.connect("mongodb+srv://Tab:Tab187@cluster0.0j3qf.mongodb.net/")
.then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log(e)
})
