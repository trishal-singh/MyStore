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
const userSchema = new mongoose.Schema(
    {
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  availableMoney: { type: Number, default: 5000 },
  purchasedItems: [
    { type: mongoose.Schema.Types.ObjectId, ref: "product", default: [] },
  ],
    }
)
const productData= new mongoose.model("products",productSchema)
const userData= new mongoose.model("users",userSchema)
module.exports= {productData,userData}
 
