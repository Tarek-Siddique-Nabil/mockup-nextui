import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './Component/Chart/Category/Category';
import Monthly from './Component/Chart/Monthly/Monthly';
import Total from './Component/Chart/Total/Total';
import Nav from "./Component/Navbar/Nav";



function App() {
  return (
      <Router>
      <Routes>
      <Route path='/' element={<Nav/>} />
      <Route path='/total' element={<Total/>} />
      <Route path='/monthly' element={<Monthly/>} />
      <Route path='/category' element={<Category/>} />
      </Routes>
      </Router>
  );
}

export default App;
