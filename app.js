const Express = require("express");

const app = Express();

app.get("/",(req,res) =>{
    res.send("Hello World!")
})
app.get("/yourname/:name",(req,res) =>{

   let n= req.params.name
   res.send(`Hello ${n}`)
})
   
app.listen(3000)
