import React from 'react';
import our1 from '../../imgs/1.png';
import our2 from '../../imgs/3.png';
import our3 from '../../imgs/4.png';
import our4 from '../../imgs/shop2.png';


const OurProduct = () => {
    return (
        <div className='lg:mx-20 md:mx-20 '>
            <div className='mt-16 text-center pb-10'>
                <h1 className='text-4xl '>GOOD4ME DEAL</h1>
                <div className="flex flex-col w-1/4 lg:w-40 md:w-52 m-auto">
                    <div className="divider h-0.5 bgColor"></div>
                </div>
                <p className='w-2/4	 m-auto'>Pick your beauty products today. 50% OFF on the most popular GOOD4ME. Order all classy products today!</p>
            </div>
            <div className='grid  lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-2'>
                <div className='mx-3'>
                    <div className='bgcad p-5'><img src={our1} alt="img" /></div>
                    <div className='mt-3'>
                        <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
                    </div>
                </div>
                <div className=' mx-3 '>
                    <div className='bgcad p-5'><img src={our2} alt="img" /></div>
                    <div className='mt-3'>
                        <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
                    </div>
                </div>
                <div className=' mx-3'>
                    <div className='bgcad p-5'><img src={our3} alt="img" /></div>
                    <div className='mt-3'>
                        <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
                    </div>
                </div>
                <div className=' mx-3 '>
                    <div className='bgcad p-5'><img src={our4} alt="img" /></div>
                    <div className='mt-3'>
                        <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
                    </div>
                </div>
            </div>
        </div >

        // <div className='lg:mx-20 md:mx-20'>
        //     <div className='mt-16 text-center pb-10'>
        //         <h1 className='text-4xl py-8'>OUR PRODUCTS ARE</h1>

        //     </div>
        //     <div className='grid gap-x-8 gap-y-4 lg:grid-cols-4 md:grid-cols-2 mb-12'>
        //         <div className="card rounded-none ">
        //             <div className='c-bg'>
        //                 <figure className=''><img className='' src={our1} alt="Fast" /></figure>
        //             </div>
        //             <div className="card-body p-3">
        //                 <p className='text-lg'>MULTI-VITAMIN (3 MONTH SUPPLY)</p>
        //                 <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
        //             </div>
        //         </div>
        //         <div className="card rounded-none ">
        //             <div className='c-bg'>
        //                 <figure className='pb-1'><img className='w-1/2 py-3' src={our2} alt="Fast" /></figure>
        //             </div>
        //             <div className="card-body p-3">
        //                 <p className='text-lg'>VITAMIN C: IMMUNITY SUPPORT</p>
        //                 <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
        //             </div>
        //         </div>
        //         <div className="card rounded-none ">
        //             <div className='c-bg'>
        //                 <figure className='py-6'><img className='w-10/12' src={our3} alt="Fast" /></figure>
        //             </div>
        //             <div className="card-body p-3">
        //                 <p className='text-lg'>MULTI-VITAMIN (3 MONTH SUPPLY)</p>
        //                 <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
        //             </div>
        //         </div>
        //         <div className="card rounded-none ">
        //             <div className='c-bg'>
        //                 <figure><img className='' src={our4} alt="Fast" /></figure>
        //             </div>
        //             <div className="card-body p-3">
        //                 <p className='text-lg'>APPLE CIDER VINEGAR (3 MONTH SUPPLY)</p>
        //                 <button ><small className='text-c text-lg'>$39.95 NZD</small>    <small className='line-through text-lg ml-5'>$199.75 NZD</small></button>
        //             </div>
        //         </div>
        //     </div>
        //     <div className=' text-center'>
        //         <button className="btn btn-outline btn-warning text-black	">VIEW ALL PRODUCTS</button>
        //     </div>
        // </div >
    );
};

export default OurProduct;