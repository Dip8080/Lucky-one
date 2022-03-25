import React from 'react';
import('./Header.css')
const Header = () => {
    return (
        <div className='header py-6 bg-green-300'>
        <div className='text-2xl text-orange-400'>
            <h1> <span className='text-red-600'> Time </span> to Evolve</h1>

            <h3 className='my-3'> take <span className='text-red-600'>  Four </span> only </h3>
        </div>
        </div>
    );
};

export default Header;