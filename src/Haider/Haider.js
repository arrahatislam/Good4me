import React from 'react';
import { Link } from 'react-router-dom';
import Haiders from './Haider.css';
const Haider = () => {
    return (
        <div className=' bgColor'>
            <div className='text-lg mx-2 py-5 flex justify-around items-center text-white'>
                <div><span className='font-wight'>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</span></div>
                <div className='flex justify-around w-60 '>
                    <div>
                        <Link to=''>Sign In / </Link>     
                        <Link to=''>Register</Link>     
                    </div>
                    <div>
                        <small>USD</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Haider;