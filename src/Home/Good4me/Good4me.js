import React from 'react';
import Good1 from '../../imgs/good1.png';
import Good2 from '../../imgs/good2.png';
import Good3 from '../../imgs/good3.png';
import Good4 from '../../imgs/good4.png';
import Good5 from '../../imgs/good5.png';
import Good6 from '../../imgs/good6.png';
import bReviews from '../../imgs/b-reivews.png';

const Good4me = () => {
    return (
        <div className='my-24'>
            <div className='text-center my-12'><h1 className='text-2xl'>#GOOD4ME</h1></div>
            <div className="carousel carousel-center rounded-box">

                <div className="carousel-item mr-4">
                    <img src={Good1} alt="Burger" />
                </div>
                <div className="carousel-item mr-4">
                    <img src={Good2} alt="Burger" />
                </div>
                <div className="carousel-item mr-4">
                    <img src={Good3} alt="Burger" />
                </div>
                <div className="carousel-item mr-4">
                    <img src={Good4} alt="Burger" />
                </div>
                <div className="carousel-item mr-4">
                    <img src={Good5} alt="Burger" />
                </div>
                <div className="carousel-item ">
                    <img src={Good6} alt="Burger" />
                </div>
            </div>
            <div className='py-5 -mb-48' ><img src={bReviews} className="p-0" /></div>
        </div>
    );
};

export default Good4me;