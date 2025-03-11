
require("dotenv").config()
let http_module = require("http")
let port_no = process.env.PORT

 http_module.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"})
    res.write("<p>Tabassum Server Started</p>")
    res.write("<p>Tabassum Another Server Started</p>")

    res.end()
}).listen(port_no,()=> {
    console.log(`Server started at http://localhost:${port_no}`)
})



