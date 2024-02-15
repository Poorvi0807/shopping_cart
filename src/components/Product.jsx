import React from 'react'
import { items } from './Data'

const Product = () => {
  return (
    <>
    <div className='container my-5 text-center'>
    <div className='row'>
        {items.map((product)=>(
          
            <>
            <div className='col-lg-4 my-3'>
            <div className="card" style={{width: '18rem'}}>
  <img src={product.imgSrc} className="card-img-top" alt="..." />
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
