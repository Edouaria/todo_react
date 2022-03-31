import logo from './img/krita_logo.png'
import './App.css';
import {
  Banner,
  Caroussel,
  Psy_model,
  Todo
} from './components'


function App() {
  const style = {
    hr: {
      marginTop: 50,
      width: 200
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <img src={logo} className="App-logo" alt="logo" />
        <h2>What is that ?</h2>
        <hr style={style.hr} />
        <Caroussel />
        <hr style={style.hr} />
        <Todo />
        <hr style={style.hr} />
        <Psy_model />
        <Banner />
      </header>
    </div>
  );
}

export default App
