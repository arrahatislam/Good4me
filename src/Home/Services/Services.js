import React from 'react';
import ap from '../../imgs/AP.png';
import Guarantee from '../../imgs/$.png';
import Payments from '../../imgs/$2.png';



const Services = () => {
    return (


        <div className='my-16 '>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 justify-center'>
                <div className=''>
                    <div className='grid justify-items-center my-5'><img src={ap} alt="" /></div>
                    <div className='text-center'>
                        <h2 className='font-bold text-xl'>WORLDWIDE SHIPPING</h2>
                        <p className='text-slate-400 mt-2 w-4/5	m-auto'> Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean</p>
                    </div>
                </div>
                <div className=''>
                    <div className='grid justify-items-center my-5'><img src={Guarantee} alt="" /></div>
                    <div className='text-center '>
                        <h2 className='font-bold text-xl'>WORLDWIDE SHIPPING</h2>
                        <p className='text-slate-400 mt-2 w-4/5	m-auto'> Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean</p>
                    </div>
                </div>
                <div className=''>
                    <div className='grid justify-items-center my-5'><img src={Payments} alt="" /></div>
                    <div className='text-center'>
                        <h2 className='font-bold text-xl'>WORLDWIDE SHIPPING</h2>
                        <p className='text-slate-400 mt-2 w-4/5	m-auto'> Lorem ipsum dolor sit amet, consectetuer
                            adipiscing elit. Aenean</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Services;