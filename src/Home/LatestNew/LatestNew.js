import React from 'react';
import Latest1 from '../../imgs/letast1.png';
import Latest2 from '../../imgs/letast2.png';
import Latest3 from '../../imgs/letast3.png';

const LatestNew = () => {
    return (
        <div className='lg:m-10 md:m-10 grid lg:grid-cols-3 md:grid-cols-2 gap-3'>
            <div className="card  bg-base-100 ">
                <figure className="px-10 pt-10">
                    <img src={Latest1} alt="Latest1" className="" />
                </figure>
                <div className="card-body items-center text-center">
                    <span className='text-c'>August 26, 2020</span>
                    <h2 className="card-title">WE DONATE ONE WEEKS SUPPLY</h2>
                    <p>We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                    <button className="btn rounded-none	 bgColor">Read more</button>
                </div>
            </div>
            <div className="card  bg-base-100 ">
                <figure className="px-10 pt-10">
                    <img src={Latest2} alt="Latest2" className="" />
                </figure>
                <div className="card-body items-center text-center">
                    <span className='text-c'>August 26, 2020</span>
                    <h2 className="card-title">WE DONATE ONE WEEKS SUPPLY</h2>
                    <p>We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                    <button className="btn rounded-none	 bgColor">Read more</button>
                </div>
            </div>
            <div className="card  bg-base-100 ">
                <figure className="px-10 pt-10">
                    <img src={Latest3} alt="Latest3" className="" />
                </figure>
                <div className="card-body items-center text-center">
                    <span className='text-c'>August 26, 2020</span>
                    <h2 className="card-title">WE DONATE ONE WEEKS SUPPLY</h2>
                    <p>We care about New Zealand children, and we want to support our community by providing our children in need with necessary vitamins to improve....</p>
                    <button className="btn rounded-none	 bgColor">Read more</button>
                </div>
            </div>
        </div>
    );
};

export default LatestNew;