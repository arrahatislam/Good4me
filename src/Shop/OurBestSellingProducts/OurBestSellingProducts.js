import React from 'react';
import Products1 from '../../imgs/shop1.png';
import Products2 from '../../imgs/13.png';
import Products3 from '../../imgs/1.png';

const OurBestSellingProducts = () => {
    return (
        <div>
            <div className='my-10'>
                <div className='mb-10 p-5 lg:flex md:flex justify-around'>
                    <div className='lg:w-1/3 md:w-2/5 '>
                        <h1 className='text-3xl font-bold'>Our Best Selling Products</h1>
                        <p className='mb-3'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                    </div>
                    <div><button className='text-c'>VIEW ALL PRODUCTS<i className='ml-3 fa-solid fa-arrow-right-long'></i></button></div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 justify-items-center'>
                    <div className='my-8 '>
                      <div className='pb-11'>  <img  src={Products1} alt="Products" /></div>
                        <h3>MULTI-VITAMIN (3 MONTH SUPPLY)</h3>
                        <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
                    </div>
                    <div className='my-5'>
                        <img className='pb-10' src={Products2} alt="Products" />
                        <h3>MULTI-VITAMIN (3 MONTH SUPPLY)</h3>
                        <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
                    </div>
                    <div className='my-5  '>
                       <div  className='pb-8'> <img src={Products3} alt="Products" /></div>
                        <h3>MULTI-VITAMIN (3 MONTH SUPPLY)</h3>
                        <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurBestSellingProducts;