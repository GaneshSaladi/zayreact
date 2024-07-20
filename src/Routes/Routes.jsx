import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom';

import { ContextProvider } from './DataContext';
import Home from '../Pages/Home';
import Contact from '../Pages/Contact';
import About from '../Pages/About';
import Shop from '../Pages/Shop';
import ShopSingle from '../Pages/ShopSingle';
import Signin from '../Pages/Signin';
import SignUp from '../Pages/SignUp';

const RoutesPage = () => {

    return (
        <ContextProvider>
        <BrowserRouter>
            <>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/product" element={<ShopSingle/>}/>
                    <Route path="/signin" element={<Signin/>}/>
                    <Route path="/signup" element={<SignUp/>}/>
                </Routes>
            </>
        </BrowserRouter>
        </ContextProvider> 
    )
}

export default RoutesPage