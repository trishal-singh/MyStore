
import { useState } from "react"
import "./Add.css"
import categories from "../data"
const Add = () => {
  // handle name 
  const [name,setName]=useState("")
  const handleName = (e)=>{
   setName(e.target.value)
  }
  // handle Image
  const [image,setImage]=useState("")
  const  handleImage = (e)=>{
    setImage(e.target.value)
  }
  // handle price
  const [price,setPrice]=useState("")
  const handlePrice = (e)=>{
   setPrice(e.target.value)
  }
  // handle Gender
  const [gender, setGender] = useState("Men");

	const  handleGender = (e) => {
		setGender(e.target.value);
	}
  // handle Categories
  const [category, setCategory] = useState("Shirt");

	const  handleCategory = (e) => {
		setCategory(e.target.value);
	}
  // Submit Form
  const handleSubmit= (e)=>{
    e.preventDefault()
    const formdata={
      "Name": name,
      "Image": image,
      "Gender": gender,
      "Price": price,
      "Category": category
    }
    console.log(formdata)
  }
  return (
    <>
    <div className="logo">MyStore</div>
    <div className="body">

    
    <form onSubmit={handleSubmit}>
      <label>
       Name : <input type="text" value={name} onChange={handleName}></input>
      </label>
      <label>
        Image : <input type="url" value={image} onChange={handleImage}></input>
      </label>
      <label>
        Price : <input type="number" value={price} onChange={handlePrice}></input>
      </label>
      <label>
			Gender :
				<select  value={gender} onChange={handleGender}>
				<option  value="Men">Men</option>
				<option  value="Women">Women</option>
				<option  value="Boys">Boys</option>
        <option  value="Girls">Girls</option>
			</select>
      </label>
      <label>
        Categories :
        <select value={category} onChange={handleCategory}>
          {categories.map((item)=>
           <option value={item}>{item}</option>
          )}

        </select>
      </label>
      <button type="submit">SUBMIT</button>
    </form>
    </div>
    </>
  )
}

export default Add