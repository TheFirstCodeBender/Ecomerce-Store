import './App.scss';
import {Routes, Route } from 'react-router-dom'
import Home from './components/routes/Home/home.component';

import Navbar from './components/Navigation/navigation.component';
import Hats from './components/routes/category/Hats/hats.component';
import Jackets from './components/routes/category/Jackets/jackets.component';
import Mens from './components/routes/category/Mens/mens.component';
import Sneakers from './components/routes/category/Sneakers/sneakers.component';
import Womens from './components/routes/category/Womens/womens.component';
import SignIn from './components/routes/Sign-In/sign-in.component';

const App = () => {
  

  return (
    <>
    <div className='background-cover'/>
    <Routes>
      <Route path='/' element={<Navbar/>}>
        <Route index element={<Home />} />
        <Route path='/Hats' element={<Hats />} />
        <Route path='/Jackets' element={<Jackets />} />
        <Route path='/Mens' element={<Mens />} />
        <Route path='/Sneakers' element={<Sneakers />} />
        <Route path='/Womens' element={<Womens />} />
        <Route path='/shop' />
        <Route path='/SignIn' element={<SignIn/> } />
      </Route>
    </Routes>
    </>
    
  );
}

export default App;
