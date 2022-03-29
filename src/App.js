import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

function App() {

let Saludo = "Hola Mundo"

  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer greeting={"hola como andas"}/>
      </header>
    </div>
  );
}

export default App;
