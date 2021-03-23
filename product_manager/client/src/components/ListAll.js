import React,{useEffect,useState} from 'react'
import{Link,navigate,Navigate, Router} from '@reach/router';
import axios from 'axios'

const ListAll = (props) => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() =>{
        axios.get("http://localhost:8000/api/allProducts")
        .then((res) =>{
            console.log(res.data);
            setAllProducts(res.data);
        })
        .catch((err) =>
        console.log(err));
    },[]);
    
    return(
        
        <div>
            
            
            <h1>All products</h1>
            <div>
            
                { allProducts.map((product,index) => (
                <p><Link to ={`/details/${product._id}`}>{product.title}</Link></p> 
                ))}
                
            
            </div>
            <Link to="/">
                <button>Back</button>
            </Link>
        </div>)
}
export default ListAll;