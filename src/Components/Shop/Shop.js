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

    setCart(newArr)    
}



    return (
        <div>
            <div className='shop mt-4 p-3 '>

                <div className='products'>
                    {
                        watch.map(x => <Procucts fun={funHandle} productObj={x} key={x.id}></Procucts>)
                    }
                </div>

                <div className='cart p-4 '>
                    <h1> cart summery {cart.length}</h1>
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;