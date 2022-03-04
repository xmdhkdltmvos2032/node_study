const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");



mongoose.connect("mongodb+srv://jbh2032:309203cj@cluster0.k4cli.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true, useUnifiedTopology: true,
}).then(()=>console.log("성공!!")).catch(err=>console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!!!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})