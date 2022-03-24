import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Saludar from './components/Saludar';

function App() {

let Saludo = "Hola Mundo"
//<div>{Saludo}</div>

//setState(myArray)

  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">

        <div>{Saludo}</div>
        
        <Saludar nombre={"Lillian"} apedillo={"Lopez"}/>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
