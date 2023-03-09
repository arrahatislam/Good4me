import React from 'react';
import Health1 from '../../imgs/health1.png';
import Health2 from '../../imgs/health2.png';
import Health3 from '../../imgs/health3.png';

const Health = () => {
    return (

        <div className=' m-20'>
            <div className="hero lg:bg-base-200 ">
                <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                    <div className='lg:w-3/5 sm:w-auto grid lg:grid-cols-2 md:grid-cols-2  gap-2  bg-white'>
                        <div className='lg:w-11/12 '><img src={Health1} alt="" />
                            <img src={Health2} className=" pt-2" alt="" />
                        </div>
                        <div className="sm:w-auto h-max"><img src={Health3} className="" alt="" />    
                        </div>
                    </div>
                    <div className='lg:w-2/5 md:w-auto lg:p-10'>
                        <h1 className="text-5xl font-bold">TAKE CONTROL OF YOUR HEALTH</h1>
                        <p className="py-6">The Good4Me range has been formulated based on scientific & traditional evidence. Our vitamins are here and ready to boost your mood, immunity and overall well-being!Made in New Zealand from local and imported ingredients.</p>
                        <button className="btn btn-outline btn-warning">BROWSE OUR RANGE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Health;