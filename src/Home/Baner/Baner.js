import React from 'react';
import bg from '../../imgs/Property 1=Default.png';
import slidershow from '../../imgs/slidershow.png';


const Baner = () => {
    return (
        <div>
            <div className="lg:hero sm:max-w-fit lg:min-w-full md:min-w-full min-h-screen bg-no-repeat" style={{ backgroundImage: `url("${bg}")` }}>
                <div className=" ity-60bg-opac"></div>
                <div className="   ">
                    <div className="lg:ml-96 ml-11 lg:pt-0 pt-10 md:w-2/6 sm:max-w-maxs w-1/3 lg:max-w-lg ">
                        <p className='text-c'>Good4Me</p>
                        <h1 className="mb-5 text-5xl font-bold">Apple Cider Vinegar</h1>
                        <p className="mb-5 ">Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. </p>
                        <button className="btn bgColor">Shop Now</button>
                    </div>
                </div>
              
            </div>
            <div className='lg:py-16 lg:-mt-24' style={{ backgroundImage: `url("${slidershow}")` }}></div>
        </div>
    );
};

export default Baner;