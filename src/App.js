import './App.css';
import omelette from './images/omelette.jpeg';

function App() {
  return (
    <div>
      <header className="card">
        <img className="img" src={omelette} alt="Omelette" />
      </header>
    </div>
  );
}

export default App;
