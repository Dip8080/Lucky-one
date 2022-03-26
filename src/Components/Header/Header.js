import React from 'react';
import('./Header.css')
const Header = () => {
    return (
        <div className='header py-6 bg-rose-700'>
        <div className='text-2xl bg-rose-700 shadow poster'>
            <h1>Order a hit on your <span className='text-red-600'> EX</span> </h1>
            <h1>Hire a <span className='text-red-600'> HITMAN</span> </h1>

            <h3 className='my-3'> choose <span className='text-red-600'>  Four </span> only </h3>
        </div>
        </div>
    );
};

export default Header;