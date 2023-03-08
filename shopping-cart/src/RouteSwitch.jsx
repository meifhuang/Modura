import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./components/Homepage";
import Catalog from "./components/Catalog";
import App from "./App";


export default function RouteSwitch() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/catalog" element={<Catalog/>} />
            </Routes>
        </BrowserRouter>
    )
}
