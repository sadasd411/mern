import React from 'react'

const PersonCardFunctional = props =>{
    return(
        <div >
               <h2 style={{textAlign:"left"}}>{props.firstName},{props.lastName}</h2>
               <p style={{textAlign:"left"}}>Age:{props.age}</p>
               <p style={{textAlign:"left"}}>Hair Color:{props.hairColor}</p>
            </div>
    );
}
export default PersonCardFunctional;