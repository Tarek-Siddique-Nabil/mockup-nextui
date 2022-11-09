import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Component/Account/Login';
import Register from './Component/Account/Register';
import Body from './Component/Body/Body';
import Category from './Component/Chart/Category/Category';
import Monthly from './Component/Chart/Monthly/Monthly';
import Total from './Component/Chart/Total/Total';



function App() {
  return (
    <div>
      
        <Router> 
        <Body></Body>
      <Routes>
      <Route  path='/' element={<Total/>} />
      <Route path='/monthly' element={<Monthly/>} />
      <Route path='/category' element={<Category/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      </Routes>
  </Router> 
      </div>
  );
}

export default App;
