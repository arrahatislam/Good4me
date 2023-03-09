import React from 'react';
import { Link } from 'react-router-dom';
import Haider from '../Haider/Haider';
import logo from '../imgs/Logo_-_Good4Me_140x 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { regular} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const NaveBare = () => {


    return (
        <div>
            <Haider></Haider>
            <div className="navbar bg-base-100 	flex justify-around">
                <div className="">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>HOME</Link></li>
                            <li><Link to='/shop'>SHOP</Link></li>
                            <li><Link to='/faqs'>FAQ'S</Link></li>
                            <li><Link to='/stockists'>STOCKISTS</Link></li>
                            <li><Link to='/wholesale'>WHOLESALE</Link></li>
                            <li><Link to='/contact'>CONTACT</Link></li>
                        </ul>
                    </div>
                    <div  >
                        <img  src={logo} alt="logo" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mx-2'><Link to='/'>HOME</Link></li>
                        <li className='mx-2'><Link to='/shop'>SHOP</Link></li>
                        <li className='mx-2'><Link to='/faqs'>FAQ'S</Link></li>
                        <li className='mx-2'><Link to='/stockists'>STOCKISTS</Link></li>
                        <li className='mx-2'><Link to='/wholesale'>WHOLESALE</Link></li>
                        <li><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                </div>
                <div className="">
                    <Link to='' className=""><FontAwesomeIcon icon={regular('coffee')} /></Link>
                </div>
            </div>
        </div>
    );
};

export default NaveBare;