import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Product />}></Route>
      <Route path='/' element={<ProductDetail />}></Route>
    </Routes>
    
    </Router>
    </>
  )
}

export default App
