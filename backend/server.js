require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoose=require('mongoose')
const connectDB=require('./dbConn')

connectDB()
mongoose.connection.once("open",()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})


app.get('/', (req, res) => {
  res.send('Hello ')
})

