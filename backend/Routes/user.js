
const jwt=require('jsonwebtoken')
const bcrypt=require('bcrypt')
const express = require('express')
const userRouter = express.Router()
const {userData}=require('../Models/model')

userRouter.post("/register", async (req, res) => {
    const { username, password } = req.body
    
    try {
      const user = await userData.findOne({ username })
      if (user) {
        return res.status(400).json({ type:"USERNAME_ALREADY_EXISTS" })
      }
      
      const hashedPassword = await bcrypt.hash(password, 10)
      
      const newUser = new userData({ username, password: hashedPassword })
      await newUser.save()
      
      res.json({ message: "User registered successfully" })
    } catch (err) {
      console.log(err.message)
      res.status(500).json({ type: err.message })
    }
  })

  userRouter.post("/login", async (req, res) => {
    const { username, password } = req.body
    
    try {
      const user = await userData.findOne({ username })
  
      if (!user) {
        return res.status(400).json({ type: "NO_USER_FOUND" })
      }
      const isPasswordValid = await bcrypt.compare(password, user.password)
      if (!isPasswordValid) {
        return res.status(400).json({ type: "WRONG_CREDENTIALS" })
      }
      const token = jwt.sign({ id: user._id }, "secret")
      res.json({ token, userID: user._id })
    } catch (err) {
      res.status(500).json({ type: err.message })
    }
  })

   const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    if (authHeader) {
      jwt.verify(authHeader, "secret", (err) => {
        if (err) {
          return res.sendStatus(403)
        }
        next()
      })
    } else {
      res.sendStatus(401)
    }
  }
  userRouter.get("/user/:userID", async (req, res) => {
    const { userID } = req.params;
  console.log('hit')
    try {
      const user = await userData.findOne({'_id':userID});
      if (!user) {
        return res.status(400).json({ type:"No User Found 1" });
      }
  
      res.json({ name: user.username,availableMoney: user.availableMoney });
    } catch (err) {
      res.status(500).json({ type: "No User Found 2" });
    }
  });
  module.exports={userRouter,verifyToken}