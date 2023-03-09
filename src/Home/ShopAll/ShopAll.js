import React from 'react';
import Shop1 from '../../imgs/shop1.png';
import Shop2 from '../../imgs/shop2.png';
import Shop3 from '../../imgs/shop3.png';
import Shop4 from '../../imgs/shop4.png';

const ShopAll = () => {
    return (
        <div className='lg:mx-20 md:mx-20 '>
            <div className='mt-16 text-center pb-10'>
                <h1 className='text-4xl py-8'>SHOP ALL</h1>

            </div>
            <div className='grid gap-x-8 gap-y-4 lg:grid-cols-4 md:grid-cols-2 mb-12'>
                <div className="card rounded-none ">
                    <div className='c-bg bgcad'>
                        <figure className='py-8'><img className='w-10/12 py-1' src={Shop1} alt="Fast" /></figure>
                    </div>
                    <div className="card-body p-3">
                        <p className='text-lg'>**PRE-ORDER** HAIR, SKIN & NAILS (5 MONTH SUPPLY) </p>
                        <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
                    </div>
                </div>
                <div className="card rounded-none ">
                    <div className='c-bg bgcad'>
                        <figure className='py-2'><img className='w-10/12 my-1' src={Shop2} alt="Fast" /></figure>
                    </div>
                    <div className="card-body p-3">
                        <p className='text-lg'>DETOX + BLOAT SUPPORT VALUE PACK</p>
                        <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
                    </div>
                </div>

                <div className="card rounded-none ">
                    <div className='c-bg'>
                        <figure><img className='' src={Shop3} alt="Fast" /></figure>
                    </div>
                    <div className="card-body p-3">
                        <p className='text-lg'>PROBIOTICS: GUT HEALTH + BLOAT SUPPORT</p>
                        <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
                    </div>
                </div>
                <div className="card rounded-none ">
                    <div className='c-bg'>
                        <figure className=''><img className='' src={Shop4} alt="Fast" /></figure>
                    </div>
                    <div className="card-body p-3">
                        <p className='text-lg'>APPLE CIDER VINEGAR</p>
                        <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
                    </div>
                </div>
            </div>
            <div className=' text-center'>
                <button className="btn btn-outline btn-warning text-black	">VIEW ALL PRODUCTS</button>
            </div>
        </div >
    );
};

export default ShopAll;