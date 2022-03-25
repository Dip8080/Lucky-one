import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Procucts from '../Products/Procucts';
import ('./Shop.css')
const Shop = () => {
    const [watch, setWatch] = useState([])
    useEffect(() => {
        fetch('fakejson.json')
            .then(res => res.json())
            .then(data => setWatch(data))
    }, [])


const [cart, setCart] = useState([]);

const funHandle = (rcvData)=>{
    let newArr = [];
    const exits = cart.find(x=>x.id === rcvData.id)
    if(!exits){

      newArr = [...cart ,rcvData] 
    }
    else{
        alert('can not add same item twice')
        if(alert){
            newArr =[...cart]
        }
    }

    setCart(newArr)    
}

let rand = [cart[Math.random() * cart.length>>0]]
console.log(rand)

    return (
        <div>
            <div className='shop mt-4 p-3 '>

                <div className='products'>
                    {
                        watch.map(x => <Procucts fun={funHandle} productObj={x} key={x.id}></Procucts>)
                    }
                </div>

                <div className='p-4 Cart'>
                    <h1> cart summery {cart.length}</h1>
                    <Cart cart={cart} fun = {funHandle} ></Cart>
                    
                    <div>
                        <button onClick={()=>setCart(rand)} className='grid rounder bg-green-200 shdow p-3'>random selection</button>
                         <button onClick={()=>setCart([])} className='my-2 rounder bg-green-200 shdow p-3'>remove Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;