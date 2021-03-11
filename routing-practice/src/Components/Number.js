import React from 'react';


const Number =(props) =>{
if(isNaN(props.pageNo)){
return(
<div>

<h3>Not a number</h3>
</div>)
}

else
{
return(
    <div>
    <h3>The number is { props.pageNo}</h3>
</div>)
}
}
export default Number;
