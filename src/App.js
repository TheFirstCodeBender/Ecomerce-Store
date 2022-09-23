import './App.scss';
import {Routes, Route } from 'react-router-dom'
import Home from './components/routes/Home/home.component';
import { Outlet } from 'react-router-dom';

import Hats from './components/routes/category/Hats/hats.component';
import Jackets from './components/routes/category/Jackets/jackets.component';
import Mens from './components/routes/category/Mens/mens.component';
import Sneakers from './components/routes/category/Sneakers/sneakers.component';
import Womens from './components/routes/category/Womens/womens.component';

const App = () => {
  const Navbar = () => {
    return (<>
      <h1>I am Navbar</h1>
      <Outlet />
    </>)
  }

  return (
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route path='/' element={<Home />} />
        <Route path='/Hats' element={<Hats />} />
        <Route path='/Jackets' element={<Jackets />} />
        <Route path='/Mens' element={<Mens />} />
        <Route path='/Sneakers' element={<Sneakers />} />
        <Route path='/Womens' element={<Womens />} />
      </Route>
    </Routes>
    
  );
}

export default App;
