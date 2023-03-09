import React from 'react';
import shopBaner from '../../imgs/ShopBaner.png';
import bg from'../../imgs/bgRever1.png';
const ShopBaner = () => {
    return (
        <div className='bg-slate-50'>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-4 my-2 p-10 '>
                <div className='w-8/12 m-auto'>
                    <span className='text-c'>Good4Me</span>
                    <h2 className='text-4xl text-black py-3 font-bold'>MULTI-VITAMIN (3 MONTH SUPPLY)</h2>
                    <p className='mb-5'>Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. </p>
                    <button  className="btn bgColor mb-10 rounded-sm">Shop Now</button>
                </div>
                <div className='w-9/12	m-auto'>
                    <img src={shopBaner} alt="MULTI-VITAMIN" />
                </div>
            </div>
            <div className=''><img src={bg} alt="" /></div>
        </div>
    );
};

export default ShopBaner;