import React from 'react';
import img1 from '../../imgs/our4.png';
import img2 from '../../imgs/new1.png';
import img3 from '../../imgs/shop3.png';
import img4 from '../../imgs/good4me-iron-energy-support-3-month-supply-22236761260199_800x 1.png';



const Good4meDeal = () => {
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
                    <div className='bgcad '><img src={img1} alt="img" /></div>
                    <div className='mt-3'>
                        <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
                    </div>
                </div>
                <div className=' mx-3 '>
                    <div className='bgcad '><img src={img2} alt="img" /></div>
                    <div className='mt-3'>
                        <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
                    </div>
                </div>
                <div className=' mx-3'>
                    <div className='bgcad '><img src={img3} alt="img" /></div>
                    <div className='mt-3'>
                        <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
                    </div>
                </div>
                <div className=' mx-3 '>
                    <div className='bgcad '><img src={img4} alt="img" /></div>
                    <div className='mt-3'>
                        <p>MULTI-VITAMIN: EVERYDAY WELLNESS</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Good4meDeal;