import React, { useEffect, useState } from 'react'
import{Link} from '@reach/router';
import axios from 'axios';
const Detail = (props) => {
    const [detail, setDetail] = useState({});
    console.log(props);
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/details/" + props.id)
            .then(res =>{
               console.log(res.data)
               setDetail(res.data)
            } )
    }, [])
    return (
        <div>
            <p>Title:{detail.title} </p>
            <p>Price:{detail.price} </p>
            <p>Description:{detail.description}</p>
            <Link to ="/">
                <button>Back</button>
            </Link>
        </div>
    )
}
export default Detail;
