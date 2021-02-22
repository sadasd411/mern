import React, {Component} from 'react';

class PersonCard extends Component {
    render(){
        const {name}= this.props;
        return(
            <div >
               <h2 style={{textAlign:"left"}}>{name}</h2>
               <p style={{textAlign:"left"}}>Age:{this.props.age}</p>
               <p style={{textAlign:"left"}}>Hair Color:{this.props.hairColor}</p>
            </div>
        );
    }
}
export default PersonCard;