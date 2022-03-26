import React from 'react';
import{GiPistolGun} from "@react-icons/all-files/gi/GiPistolGun"
import('./Products.css')
const Procucts = (props) => {
    const {id , name, img , price} = props.productObj
    const rcvFunction = props.fun;
    return (
        <div className='productCard p-6 shadow bg-rose-700'>
        <img src={img}></img>

       <div >
       <h1 className='mt-6'>name : {name}</h1>
       <h1>price: $ {price}</h1>
       </div>
       <button
       onClick={()=>rcvFunction(props.productObj)}
       className='shadow cardBtn rounded bg-rose-700 hover:bg-rose-800 p-3  mt-3  flex'>Hit to cart
       <span className='px-3 pt-1 text-2xl'><GiPistolGun></GiPistolGun></span> 
       </button> 
       </div>
    );
};

export default Procucts;