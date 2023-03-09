import React from 'react';

import Logo from '../imgs/Logo_-_Good4Me_140x 1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (

        <div>
            <div className='px-20 bg-base-200'>
                <div className=' py-20  grid lg:grid-cols-7 md:grid-cols-7 gap-8 justify-items-center '>
                    <div className='text-center col-span-2 justify-self-center'>
                        <img className='m-auto w-auto' src={Logo} alt="Logo" />
                        <p>Good health is important, so all of our products have been carefully designed to bring out the best in you.</p>
                    </div>
                    <div className=' text-center col-span-3'>
                        <h3 className=" text-2xl font-bold  ">Keep In Touch</h3>
                        <p className=''>Subscribe to receive new product updates, be the first to know about sales, and more.</p>
                    </div>
                    <div className='col-span-2 '>
                        <h3 className="text-2xl font-bold ">MORE INFO</h3>
                        <Link to="" className="link link-hover ">Shipping & Delivery</Link><br />
                        <Link to="" className="link link-hover">Refund Policy</Link><br />
                        <Link to="" className="link link-hover">Partner Program</Link><br />
                        <Link to="" className="link link-hover">Wholesale Portal</Link><br />
                        <Link to="" className="link link-hover">You Buy, We Donate</Link><br />
                        <Link to="" className="link link-hover">Privacy Policy</Link><br />
                        <Link to="" className="link link-hover">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
            <div className='grid lg:grid-cols-4 md:grid-cols-4 gap-8 justify-items-center my-5'>
                <div className="lg:col-span-1 md:col-span-1">
                    <Link to=""><i className="fa-brands fa-facebook-f text-3xl mr-4"></i></Link >
                    <Link to=""><i className="fa-brands fa-instagram text-3xl mr-4"></i></Link>
                    <Link to=""><i className="fa-brands fa-twitter text-3xl mr-4"></i></Link>
                    <Link to=""><i className="fa-brands fa-pinterest-p text-3xl mr-4"></i></Link>
                    <Link to=""><i className="fa-brands fa-youtube text-3xl"></i></Link>

                </div>
                <div className='lg:col-span-2 md:col-span-2 text-center'> <p className='text-xl'>Copyright © 2023, <Link to="" className='text-red-400'>GOOD4ME</Link>. Powered by Shopify</p></div>
                <div className='lg:col-span-1 md:col-span-1'>
                    <ul>
                        <Link to=""><i className="fa-brands fa-cc-apple-pay text-3xl mr-3"></i></Link>
                        <Link to=""><i className="fa-brands fa-google-pay  text-3xl mr-3"></i></Link>
                        <Link to=""><i className="fa-brands fa-paypal  text-3xl mr-3"></i></Link>
                        <Link to=""><i className="fa-brands fa-cc-visa  text-3xl "></i></Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;