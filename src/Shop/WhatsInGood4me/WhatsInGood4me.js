import React from 'react';
import About from '../../imgs/whatsInGood4me.png';

const WhatsInGood4me = () => {
    return (
        <div>
            <div className='w-1/3 m-auto text-center pr-5'>
                <h1 className='text-3xl font-bold mb-5'>WHAT'S IN GOOD4ME?</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
            </div>
            <div className='w-3/4 py-10 m-auto'>
                <img src={About} alt="About" />
            </div>
        </div>
    );
};

export default WhatsInGood4me;