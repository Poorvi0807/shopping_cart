import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetail = ({setCart,cart}) => {
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
    },[id,product.category]);
    const addToCart = (id, price, title, description, imgSrc) => {
      const obj = {
        id, price, title, description, imgSrc
      }
      setCart([...cart, obj]);
      toast.success('Your Item is added on Cart', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      });
    }
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <div className='container con'>
        <div className='img'>
           <img src={product.imgSrc} alt='' />
        </div>
      <div className='text-center'>
      <h1 className="card-title">{product.title}</h1>
    <p className="card-text">{product.description}</p>
    <button className='btn btn-primary'>{product.price} ₹</button>
    <button onClick={() => addToCart(product.id, product.price, product.title, product.description, product.imgSrc)} className='btn btn-primary mx-3'>Add To Cart</button>
    </div>
    </div>
    <Product cart={cart} setCart={setCart} items={relatedProduct}/>
    </>
  )
}

export default ProductDetail
