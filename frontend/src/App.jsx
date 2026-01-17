import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/home'
import Collection from './pages/collection'
import Login from './pages/login'
import Orders from './pages/orders'
import Product from './pages/product'
import About from './pages/about'
import Cart from './pages/cart'
import Contact from './pages/contact'
import Placeorder from './pages/placeorder'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Search from './components/searchbar'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar/>
      <Search />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/orders' element={<Orders/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/placeorder' element={<Placeorder/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App