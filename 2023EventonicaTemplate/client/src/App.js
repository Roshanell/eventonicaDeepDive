import './App.css';
import Events from './components/events';  //holding events card

function App() {
  return (
    <div className="App">
      <h1>Techtonica 2023 events</h1>
   
    {/* Events is the child component (events.js) */}
    <Events />
   
    </div>
  );
}

export default App;
