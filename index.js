const express = require('express')
const app = express()
const port = 3000
const mongoose = require("mongoose");
const config = require("./config/key")

app.use(express.json()) //For JSON requests
app.use(express.urlencoded({ extended: true }));

const { User } = require("./models/User")

mongoose.connect(config.mongoURL, {
  useNewUrlParser: true, useUnifiedTopology: true,
}).then(() => console.log("성공!!")).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!!!!!')
})

app.post("/register", (req, res) => {

  const user = new User(req.body);
  
  user.save((err, doc) => {
    if (err) return res.json({ 성공: false, err })
    return res.status(200).json({
      성공: true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})