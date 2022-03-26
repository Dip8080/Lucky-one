import {MdDelete} from '@react-icons/all-files/md/MdDelete';
import React from 'react';

import('./Cart.css')


const Cart = (props) => {
   
    const cartArr = props.cart;
    
    return (
        <div className='my-3'>
            {
                cartArr.map(x=><MiniCart product={x} key={x.id}></MiniCart>)
            }
        </div>
    );
};

const MiniCart = (props) =>{
    const {name , id , price , img} = props.product;
    const recFunction = props.fun;
    return(
       
        <div className='flex miniCart my-2 cart shadow-lg'>
            <img src={img}></img>
            <h1 className='p-3'> {name}</h1>
            <h1 className='p-3 mt-3 '>{price}</h1>
            <button ><MdDelete></MdDelete> </button>
        </div>
        
       
    )
       
}

export default Cart;