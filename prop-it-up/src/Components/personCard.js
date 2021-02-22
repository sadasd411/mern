import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state={
            age:this.props.age
          
        };
    }
    birthdayUpdate = () =>{
        this.setState({'age': this.state.age +1});
    }
    render(){
        const {name}= this.props;
        return(
            <div >
               <h2 style={{textAlign:"left"}}>{name}</h2>
               <p style={{textAlign:"left"}}>Age:{this.state.age}</p>
               <p style={{textAlign:"left"}}>Hair Color:{this.props.hairColor}</p>
               <button onClick = {this.birthdayUpdate} style={{float:"left"}}>Birthday button for {name}</button>
               <br></br>
            </div>
        );
    }
}
export default PersonCard;