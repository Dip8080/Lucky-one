import React from 'react';
import('./Cart.css')

const Cart = (props) => {
   
    const cartArr = props.cart;
    console.log(cartArr)
    return (
        <div className='my-3'>
            {
                cartArr.map(x=><MiniCart product={x}></MiniCart>)
            }
        </div>
    );
};

const MiniCart = (props) =>{
    const {name , id , price , img} = props.product;
    return(
        <div className='flex miniCart my-2'>
            <img src={img}></img>
            <h1 className='p-3'> {name}</h1>
            <h1 className='p-3 mt-3'>{price}</h1>
        </div>
    )
}

export default Cart;