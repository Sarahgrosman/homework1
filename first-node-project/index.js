const express = require('express');
const user = require('./pages')
console.log(user)
const app = express();
const PORT = 5001
app.get('/index',(req,res)=>{
console.log(res);
 res.send(user.index)
 

})

app.listen(PORT)