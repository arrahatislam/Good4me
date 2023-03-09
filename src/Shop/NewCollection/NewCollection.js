import React from 'react';
import New1 from '../../imgs/Rectangle 27.png';
import New2 from '../../imgs/our4.png';
import New3 from '../../imgs/letast1.png';

const NewCollection = () => {
    return (
        <div className='w-c m-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 gap-2 justify-items-center mb-6'>
                <div className='col-span-2'>
                    <h2 className=' text-4xl  font-bold lg:w-4/6 md:w-4/6 mb-10'>New Collection For GOOD4ME
                        Care Products</h2>
                    <div className="card rounded-md relative  ">
                        <img src={New1} alt="Shoes" />
                        <div className="card-body">
                            <div className="card-actions absolute PLB  justify-center ">
                                <button className="btn rounded-md bgColor">Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 '>
                    <img className='mb-5 rounded-md ' src={New2} alt="New Collection" />
                    <img className='rounded-md' src={New3} alt="New Collection" />
                </div>
            </div>
        </div>
    );
};

export default NewCollection;