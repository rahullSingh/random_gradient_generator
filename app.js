const express = require("express");

const app=express();

app.use(express.static("public"));

app.get("/",function(req,res){
  res.send("hello");
})

app.listen(3000,function(){
  console.log("server running at port : 3000");
})
