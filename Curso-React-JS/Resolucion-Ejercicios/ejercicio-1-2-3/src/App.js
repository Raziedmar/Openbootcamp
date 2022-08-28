import logo from './logo.svg';
import './App.css';
import ComponenteA from './components/pure/componenteA';


function App() {
  const objeto = {
    nombre: "Mario",
    apellido: "Urquiza",
    email: "edmario84",
    conectado: true,
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponenteA contacto={objeto}></ComponenteA>
      </header>
    </div>
  );
}

export default App;
