require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoose=require('mongoose')
const connectDB=require('./dbConn')
const adminRouter = require('./Routes/admin')
const cors = require('cors')

app.use(cors())
app.use(express.json())
connectDB()
app.use("/admin",adminRouter)

mongoose.connection.once("open",()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})




