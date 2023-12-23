require('dotenv').config()
const express = require('express')
const app = express.Router()
const productData=require('../Models/admin')
// Add a product
app.post("/product",(req,res)=>{
  const data =new productData({
    Name: req.body.Name,
        Image: req.body.Image,
        Price: req.body.Price,
        Category: req.body.Category,
        Gender: req.body.Gender
  })
  data.save()
  .then(res.json(data))
  .catch((err)=>{
    res.send("Cannot add data")
  })
})
// Get all products
app.get("/products",(req,res)=>{
  productData.find({}).then((data)=>res.json(data)).catch((err)=>res.send("Unable to fetch data"))
   
})
// Get a specific product
app.get("/product/:id",(req,res)=>{
  console.log("hit")
  productData.findOne({'_id':req.params.id}).then((data)=>res.json(data)).catch((err)=>res.send(err))
})
module.exports = app
