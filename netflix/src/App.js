import './App.css';
import Row from './Row'
import request from './request'
function App() {
  return (
    <div className="App">
      
      <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals}/>
    </div>
  );
}

export default App;
