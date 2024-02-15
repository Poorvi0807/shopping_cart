import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'

const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Product />}></Route>
      <Route path='/product/:id' element={<ProductDetail />}></Route>
      <Route path='/search/:term' element={<SearchItem />}></Route>
      <Route path='/cart/:id' element={<Cart />}></Route>
    </Routes>
    
    </Router>
    </>
  )
}

export default App
