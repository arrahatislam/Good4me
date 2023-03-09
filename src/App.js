
import { Route, Routes } from 'react-router';
import './App.css';
import Contact from './Contact/Contact';
import Faqs from './FAQ\'S/Faqs';
import Home from './Home/Home';
import Shop from './Shop/Shop';
import Stockists from './Stockists/Stockists';
import Wholesale from './Wholesale/Wholesale';

function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="shop" element={ <Shop/> } />
        <Route path="faqs" element={ <Faqs/> } />
        <Route path="stockists" element={ <Stockists/> } />
        <Route path="wholesale" element={ <Wholesale/> } />
        <Route path="contact" element={ <Contact/> } /> 
      </Routes>
    </div>
  );
}

export default App;
