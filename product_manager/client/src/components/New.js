import React,{useEffect,useState} from 'react'
import{Link,Navigate} from '@reach/router';
import axios from 'axios'

const New = (props) => {
  
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
            <div>
            <form onSubmit = {onSubmitHandler}>
                <h2>Product Manager</h2>
                <div>
                    <label>Title</label>
                    <input type = "text"  onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type = "text" onChange ={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type = "text" onChange = {(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                   
                    <input type = "Submit"  value="Create"/>
                </div>
            </form>
            <Link to ="/allProducts"> 
            <p>All Products</p>
            </Link>
            </div>
            )
    
}
export default New;