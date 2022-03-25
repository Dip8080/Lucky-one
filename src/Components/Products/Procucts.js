import React from 'react';
import{FaBeer} from "@react-icons/all-files/fa/FaBeer"
import('./Products.css')
const Procucts = (props) => {
    const {id , name, img , price} = props.productObj
    const rcvFunction = props.fun;
    return (
        <div className='productCard p-6'>
        <img src={img}></img>

       <div className=''>
       <h1 className='mt-6'>name : {name}</h1>
       <h1>price: $ {price}</h1>
       </div>
       <button
       onClick={()=>rcvFunction(props.productObj)}
       className='cardBtn rounded bg-purple-400 hover:bg-purple-800 p-3  mt-3  flex'>Add to cart
       <span className='px-3 pt-1'><FaBeer></FaBeer></span> 
       </button> 
       </div>
    );
};

export default Procucts;