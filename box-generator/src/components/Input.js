import React ,{useState} from 'react';

const Input =({setBox,box}) =>{
    const [newColor, setNewColor] = useState("");
    const onChange =(e)=>{
        setNewColor(e.target.value);
        
    };
    const grabColor = () => {
        setBox({
          ...box,
          colors: [...box.colors, newColor],
        });
        // clears out the input value attribute
        setNewColor("");
      };
    return(
        <div className="inputForm">
            <input
            type="text"
            class ="form-control"
            name="newColor"
            value ={newColor}
            onChange={onChange}
            ></input>
            <div>
                <button onClick={grabColor}>Add</button>
            </div>
        </div>
    )
}
export default Input;