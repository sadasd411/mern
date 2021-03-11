import React from 'react';

const ColorHello =(props) =>{
    
return(
    <div style={{color:props.textColor, backgroundColor:props.backgroundColor}}>
        Word is {props.word}
    </div>
)
}
export default ColorHello;

