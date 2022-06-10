// import './App.css';
import Books from './components/Books';

import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Houses from './components/Houses';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/books' element={<Books></Books>}></Route>
    <Route path='/movies' element={<Movies></Movies>}></Route>
    <Route path='/houses' element={<Houses></Houses>}></Route>

    </Routes>
    </div>
  );
}

export default App;
