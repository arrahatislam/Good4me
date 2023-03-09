import React from 'react';
import NaveBare from '../Share/NaveBare';
import Footer from '../Share/Footer'
import ShopBaner from './ShopBaner/ShopBaner';
import NewCollection from './NewCollection/NewCollection';
import TakeControl from './TakeControl/TakeControl';
import OurBestSellingProducts from './OurBestSellingProducts/OurBestSellingProducts';
import WhatsInGood4me from './WhatsInGood4me/WhatsInGood4me';

const Shop = () => {
    return (
        <div>
            <NaveBare></NaveBare>
            <ShopBaner></ShopBaner>
            <NewCollection></NewCollection>
            <TakeControl></TakeControl>
            <OurBestSellingProducts></OurBestSellingProducts>
            <WhatsInGood4me></WhatsInGood4me>
            <Footer></Footer>
        </div>
    );
};

export default Shop;