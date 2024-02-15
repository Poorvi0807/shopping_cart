import React from 'react'
import { items } from './Data'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
    <div className='container my-5 text-center'>
    <div className='row'>
        {items.map((product)=>(
          
            <>
            <div key={product.id} className='col-lg-4 my-3'>
            <div className="card" style={{width: '18rem'}}>
            <Link to={`/product/${product.id}`} style={{display:'flex', justifyContent:'center',alignItems:'center'}}><img src={product.imgSrc} className="card-img-top" alt="..." /></Link>
  
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <button className='btn btn-primary'>{product.price} ₹</button>
    <button className='btn btn-primary mx-3'>Add To Cart</button>
    
    </div>
  </div>
</div>
            </>
        ))}
        </div>
    </div>
      

    </>
  )
}

export default Product