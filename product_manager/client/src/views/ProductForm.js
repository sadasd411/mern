import React, {useState} from 'react'
import axios from 'axios';

const ProductForm =() =>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description,setDescription] = useState("");

  const  onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/createProduct', {
        title,
        price,
        description
    })
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
    }

    return(
        <form onSubmit = {onSubmitHandler}>
            <h2>Product Manager</h2>
            <div>
                <label>Title</label>
                <input type = "text"  
                name ="title"
                value ={title}
                onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label>
                <input type = "text" 
                name ="price"
                value ={price}
                onChange ={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type = "text"
                name ="description"
                value ={description}
                onChange = {(e) => setDescription(e.target.value)}/>
            </div>
            <div>
               
                <input type = "Submit"  value="Create"/>
            </div>
        </form>
        )
}

export default ProductForm;