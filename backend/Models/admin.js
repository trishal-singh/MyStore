const mongoose=require('mongoose')
const productSchema=new mongoose.Schema(
    {
        Name: String,
        Image: String,
        Price: Number,
        Category: String,
        Gender: String
    }
)
const productData= new mongoose.model("products",productSchema)
module.exports= productData
 
