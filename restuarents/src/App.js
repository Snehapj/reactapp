import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Home from './Home';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import RestaurantDetails from './RestaurantDetails';

function App() {
  const name = 'ABCD'
  return (
    
    <Router>
      <Header />
      <main className="py-3">
        <Container>

          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/restaurants/:id' element={<RestaurantDetails/>}/>
          </Routes>
        </Container>
      </main>

    </Router>
  );
}

export default App;

//params - dynamic changing contents are called as params. 
