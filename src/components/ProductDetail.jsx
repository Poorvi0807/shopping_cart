import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';

const ProductDetail = () => {
    const {id} = useParams();
    const [product,setProduct] =useState({});
    const [relatedProduct,setRelatedProduct] =useState([]);

    useEffect(()=>{
           const filterProduct = items.filter((product)=> product.id== id);
           console.log(filterProduct);
           setProduct(filterProduct[0]);

           const relatedProducts=items.filter((p)=> p.category===product.category);
        //    console.log("Related Products",relatedProduct);
        setRelatedProduct(relatedProducts);
    },[id]);
  return (
    <>
      <div className='container con'>
        <div className='img'>
           <img src={product.imgSrc} alt='' />
        </div>
      <div className='text-center'>
      <h1 className="card-title">{product.title}</h1>
    <p className="card-text">{product.description}</p>
    <button className='btn btn-primary'>{product.price} ₹</button>
    <button className='btn btn-primary mx-3'>Add To Cart</button>
    </div>
    </div>
    </>
  )
}

export default ProductDetail
