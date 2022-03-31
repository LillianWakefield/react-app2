import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ClickCounter from './components/ClickCounter';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <ItemListContainer itemName={"Mi producto"}/>
        <ClickCounter/>
      </header>
    </div>
  );
}

export default App;
