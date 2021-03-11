
import './App.css';
import {Router} from '@reach/router';
import Home from './Components/Home';
import Number from './Components/Number';

import ColorHello from './Components/ColorHello';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Home path ={"/home"}></Home>
        <Home path ={"/:word"}></Home>
        <Number path ={ "/:pageNo"}></Number>
        
        <ColorHello path={"/:word/:textColor/:backgroundColor"}></ColorHello>
      </Router>
    </div>
  );
}

export default App;
