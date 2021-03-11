import React from 'react';


const Home =(props) =>{
    if(props.word){
        return(
            <div>
            <h3>The word is { props.word}</h3>
            </div>)
            } 
    
    else{
return(
    
<div>
    <h3>Welcome</h3>
</div>)
}
}
export default Home;