import logo from './img/krita_logo.png'
import './App.css';
import { Caroussel } from './components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>What is that ?</h2>
        <Caroussel />
      </header>
    </div>
  );
}

export default App;
