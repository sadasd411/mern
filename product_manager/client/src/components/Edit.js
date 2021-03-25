import React,{useEffect,useState} from 'react'
import{Link,navigate,Navigate} from '@reach/router';
import axios from 'axios'

const Update = (props) => {
  
        const [title, setTitle] = useState("");
        const [price, setPrice] = useState("");
        const [description,setDescription] = useState("");

        
        console.log(props);
        
        useEffect(() => {
            axios.get("http://localhost:8000/api/details/" + props.id)
                .then(res =>{
                   console.log(res.data)
                   setTitle(res.data.title);
                   setPrice(res.data.price);
                   setDescription(res.data.description);
                } )
        }, [])
    
      const  onSubmitHandler = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/updateProduct/' + props.id, {
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
                <h2>Update product</h2>
                <div>
                    <label>Title</label>
                    <input type = "text"  value = {title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price</label>
                    <input type = "text" value = {price} onChange ={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description</label>
                    <input type = "text" value={description} onChange = {(e) => setDescription(e.target.value)}/>
                </div>
                <div>
                   
                    <input type = "Submit"  value="Update"/>
                </div>
            </form>
            </div>
            )
    
}
export default Update;