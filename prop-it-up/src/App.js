import logo from './logo.svg';
import './App.css';
//import PersonCard from './Components/personCard';
import PersonCardFunctional from './Components/PersonCardFunctional'

function App() {
  return (
    <div className="App">
      <PersonCardFunctional firstName ="Doe" lastName="Jane" age={45} hairColor ="Black"/>
      <PersonCardFunctional firstName ="Smith" lastName="John" age={88} hairColor ="Brown"/>
      <PersonCardFunctional firstName ="Fillmore" lastName="Millard" age={50} hairColor ="Brown"/>
      <PersonCardFunctional firstName ="Smith" lastName="Maria" age={62} hairColor ="Brown"/>
    
    </div>
  );
}

export default App;
