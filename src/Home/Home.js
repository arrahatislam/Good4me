import React from 'react';
import Baner from './Baner/Baner';
import NaveBare from '../Share/NaveBare';
import Good4meDeal from './Good4meDeal/Good4meDeal';
import Services from './Services/Services';
import Health from './Health/Health';
import OurProduct from './OurProduct/OurProduct';
import Reviews from './Reviews/Reviews';
import ShopAll from './ShopAll/ShopAll';
import LatestNew from './LatestNew/LatestNew';
import Good4me from './Good4me/Good4me';
import Footer from '../Share/Footer';

const Home = () => {
    return (
        <div>
          <NaveBare></NaveBare>
          <Baner></Baner>
          <Good4meDeal></Good4meDeal>
          <Services></Services>
          <Health></Health>
          <OurProduct></OurProduct>
          <Reviews></Reviews>
          <ShopAll></ShopAll>
          <LatestNew></LatestNew>
          <Good4me></Good4me>
          <Footer></Footer>
        </div>
    );
};


export default Home;