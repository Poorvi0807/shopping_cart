import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-bar'>
    <div className='brand'>E-cart</div>
    <div className='search-bar'>
        <input type='text' placeholder='Search Products'/>
    </div>
     <div className='cart'>Cart</div>

    </div>
  )
}

export default Navbar
