import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list_component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente de clase Greeting.jsx */}
        <Greeting name="Mario"></Greeting>  
        {/* Componente funcional GreetingF.jsx */} 
        <GreetingF name= "Mario"></GreetingF>
        <hr/>
        <hr/>
        <hr/>
        <TaskListComponent></TaskListComponent>  
      </header>
    </div>
  );
}

export default App;
