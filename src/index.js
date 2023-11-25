import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Layout from './layout';
import Home from './home';
import Products from './products';
// import Product from './product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    {/* <Route path="product/:id" element={<Product />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
