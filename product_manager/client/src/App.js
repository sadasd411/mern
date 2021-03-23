import ListAll from './components/ListAll';
import New from './components/New';
import Detail from './components/Details'
import './App.css';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
      <Router>
       <New path ="/"/>
      <ListAll  path ="/allProducts"/>
      <Detail path ="/details/:id"/>
      <New path ="/createProduct/:id"/>
      </Router>
    </div>
  );
}

export default App;
