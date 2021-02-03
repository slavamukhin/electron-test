import logo from './logo.svg';
import { Link } from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link className="App-link" to="/about">Link to the About Page</Link>
      </header>
    </div>
  );
}

export default App;
