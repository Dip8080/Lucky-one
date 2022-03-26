import React from 'react';
import('./Header.css')
const Header = () => {
    return (
        <div className='header py-6 bg-rose-700'>
        <div className='text-2xl bg-rose-700 shadow poster'>
            <h1 className='subpixel-antialiased hover:antialiased'>Order a hit on your <span className='text-red-600'> EX</span> </h1>
            

            <h3 className='my-3 subpixel-antialiased'> Hire at-least four<span className='text-red-600'> Hitmen </span> </h3>
        </div>
        </div>
    );
};

export default Header;