import React from 'react';
import reviews from '../../imgs/revus.png';
import bReviews from '../../imgs/b-reivews.png'
import Bslidershow from '../../imgs/slidershow.png'
const Reviews = () => {
    return (
        <div className='my-16 lg:m-20 bReviews ' >
            <div className='pt-0 ' ><img src={bReviews} className="p-0" /></div>
            <div className="hero  py-32">
                <div className="hero-content p-0 flex-col lg:flex-row-reverse">
                    <div className='lg:w-5/12	 grid lg:grid-cols-2 gap-2 m-0 bg-white'>
                        <div className='	'><img src={reviews} className="lg:max-w-none	" />
                        </div>
                    </div>
                    <div className='lg:w-5/12 md:w-5/12	p-10'>
                        <h3 className="text-sm mb-3 font-bold">REAL REVIEWS</h3>
                        <h2 className="text-xl mb-3  text-c">REAL RESULTS</h2>
                        <div class="rating w-1/4	">
                            <input type="radio" name="rating-2" class="mask mask-star-2  bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="py-6 ">“We have perfected our formulas over time, based on your feedback. Check out hundreds of reviews on our website.We can't wait until you are a part of our Good4Me Family.”</p>
                        <button className=" "><i class="fa-light fa-square-chevron-right"></i></button>
                    </div>
                </div>
            </div>
            <div className='pb-0 margin ' ><img src={Bslidershow} className="w-auto" /></div>
        </div>
    );
};

export default Reviews;