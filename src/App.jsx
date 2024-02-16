import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router,Routes,Route, useSearchParams } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'

const App = () => {
  const [data,setData] = useState([...items]);
  return (
    <>
    <Router>
    <Navbar setData={setData} />
    <Routes>
      <Route path='/' element={<Product items={data} />}></Route>
      <Route path='/product/:id' element={<ProductDetail />}></Route>
      <Route path='/search/:term' element={<SearchItem />}></Route>
      <Route path='/cart/:id' element={<Cart />}></Route>
    </Routes>
    
    </Router>
    </>
  )
}

export default App
