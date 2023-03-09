import React from 'react';
import control from '../../imgs/Control.png';
import BgControl from '../../imgs/ControlBg.png';

const TakeControl = () => {
    return (
        <div className=''>

            <div className="hero min-h-screen lg:flex">
                <div className="hero-content flex-col lg:flex-row justify-center">
                    <img src={control} className="lg:max-w-sm md:max-w-sm rounded-lg shadow-2xl" />
                    <div className='lg:w-2/5 lg:ml-10'>
                        <h1 className="text-5xl font-bold">TAKE CONTROL OF YOUR HEALTH</h1>
                        <p className="py-6 ">The Good4Me range has been formulated based on scientific & traditional evidence. Our vitamins are here and ready to boost your mood, immunity and overall well-being! Made in New Zealand from local and imported ingredients.</p>
                        <button className="btn rounded-mg   btn-outline">BROWSE OUR RANGE</button>
                    </div>
                </div>
                <div className='lg:visible	invisible'><img src={BgControl} alt="" /></div>
            </div>
        </div>
    );
};

export default TakeControl;
