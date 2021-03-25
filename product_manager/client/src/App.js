import Detail from './components/Details'
import Edit from './components/Edit'
import './App.css';
import { Router } from '@reach/router';
import ProductForm from './views/ProductForm';

function App() {
  return (
    <div className="App">
      
      <Router>
      <ProductForm path ="/" />
      <Detail path ="/details/:id"/>
      <Edit path ="/updateProduct/:id"/>
      </Router>
    </div>
  );
}

export default App;
