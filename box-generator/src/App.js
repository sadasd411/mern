
import React, { useState } from "react";
import './App.css';
import Box from './components/Box';
import Input from './components/Input'

function App() {
  const [box, setBox] = useState({
    colors: [],
  });
  return (
    <div className="App">
      <Input setBox={setBox} box={box} ></Input>
        <div>
        {box.colors.map((color) => (
          <Box color = {color}></Box>
        ))}
        </div>
      
    </div>
  );
}

export default App;
