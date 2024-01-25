require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const mongoose=require('mongoose')
const connectDB=require('./dbConn')
const adminRouter = require('./Routes/admin')
const cors = require('cors')
const {userRouter}= require('./Routes/user')

app.use(cors())
app.use(express.json())
connectDB()
app.use("/admin",adminRouter)
app.use("/auth",userRouter)
mongoose.connection.once("open",()=>{
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})




