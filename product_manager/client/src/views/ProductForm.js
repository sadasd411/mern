import React, {useState} from 'react'
import axios from 'axios';

const ProductForm =() =>{
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description,setDescription] = useState("");

  const  onSubmitHandler = e => {

    }

    return(
        <form onSubmit = {onSubmitHandler}>
            <h2>Product Manager</h2>
            <div>
                <label>Title</label>
                <input type = "text" />
            </div>
            <div>
                <label>Price</label>
                <input type = "text" />
            </div>
            <div>
                <label>Description</label>
                <input type = "text" />
            </div>
            <div>
               
                <input type = "Submit"  value="Create"/>
            </div>
        </form>
        )
}

export default ProductForm;