import React,{useEffect,useState} from 'react'
import{Link,navigate, Router} from '@reach/router';
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
    const deleteProduct = (productId) =>{
        axios.delete("http://localhost:8000/api/deleteProduct/" + productId)
        .then((res) => {
            console.log(res.data);
            const remaingProducts = allProducts.filter((product) => product._id !== productId);
            setAllProducts(remaingProducts);
        })
        .catch((err) => console.log(err) )
    }
    return(
        
        <div>
            <h1>All products</h1>
            <div>
                { allProducts.map((product,index) => (
                    <div>
                <p><Link to ={`/details/${product._id}`}>{product.title}</Link></p> 
                <button><Link to ={`/updateProduct/${product._id}`}>Edit</Link></button>
                <button onClick ={() => deleteProduct(product._id)}>Delete</button>
                </div>
                ))}
                 
            </div>
        </div>)
}
export default ListAll;