import React from 'react';
import { Link } from 'react-router-dom';
import UsaFlag from '../imgs/usaFlag.png';

const Haider = () => {
    return (
        <div className=' bgColor hidden lg:block'>
            <div className='text-lg mx-2 py-5 flex justify-around items-center text-white'>
                <div><span className='font-wight '>Afterpay, Laybuy & Genoapay | Free Delivery New Zealand + Australia*</span></div>
                <div className='flex justify-around w-1/4 '>
                    <div className='mt-3'>
                        <Link to=''>Sign In / </Link>
                        <Link to=''>Register</Link>
                    </div>
                    <p className='mt-3'>|</p>
                    <div>
                        <div className='flex'>
                            <div className='mt-4'>
                                <img className='w-8' src={UsaFlag} alt="" />
                            </div>
                            <ul className="flex-none menu menu-horizontal px-1">
                                <li tabIndex={0}>
                                    <Link to=''>
                                        USD
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                    </Link>
                                    <ul className="p-2 text-black">
                                        <li><Link to=''>Submenu 1</Link></li>
                                        <li><Link to=''>Submenu 2</Link></li>
                                    </ul>
                                </li>
                            </ul></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Haider;