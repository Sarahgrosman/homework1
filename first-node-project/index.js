const express = require('express');
const user = require('./pages')
console.log(user)
const app = express();
const PORT = 5001
app.get('/index',(req,res)=>{

 res.send(user.index)
 

})

app.get('/eng',(req,res)=>{
 res.send(user.eng)
})

app.get('/heb',(req,res)=>{
    res.send(user.heb)
   })

   app.get('/goodBye',(req,res)=>{
    res.send(user.gb)
   })

app.listen(PORT)