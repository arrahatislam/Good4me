import React from 'react';
import bg from '../../imgs/Property 1=Default.png';

const Baner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("${bg}")` }}>
                <div className=" ity-60bg-opac"></div>
                <div className="   ">
                    <div className="ml-96 max-w-lg ">
                        <p className='text-c'>Good4Me</p>
                        <h1 className="mb-5 text-5xl font-bold">Apple Cider Vinegar</h1>
                        <p className="mb-5">Good4Me Apple Cider Vinegar gummies are the newest addition to your morning health and well-being regime. </p>
                        <button className="btn bgColor">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Baner;