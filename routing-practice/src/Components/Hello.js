import React from 'react';


const Hello =(props) =>{
    if(isNaN(props.word)){
        return(
        <div>
        <h3>The word is { props.word}</h3>
        </div>)
        }
        
        else
        {
        return(
            <div>
            <h3>This is not a word</h3>
        </div>)
        }
        }

export default Hello;