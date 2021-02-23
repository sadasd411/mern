import logo from './logo.svg';
import './App.css';
import PersonCard from './Components/personCard';

function App() {
  return (
    <div className="MyFirstAPP">
    <h1>Hello Dojo</h1>
    <h3>Things I need to do</h3>
    <li>
      <ul> * Learn react</ul>
      <ul>* Climb Mt.Everest</ul>
      <ul>* Run a marathon</ul>
      <ul>* Feed a Dog</ul>
    </li>
    <PersonCard/>
    </div>
  );
}

export default App;
