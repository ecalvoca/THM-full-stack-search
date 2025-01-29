import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import HotelPage from "./pages/HotelPage.tsx";
import CountryPage from "./pages/CountryPage.tsx";
import CityPage from "./pages/CityPage.tsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/hotel/:id" element={<HotelPage />} />
                <Route path="/country/:id" element={<CountryPage />} />
                <Route path="/city/:id" element={<CityPage />} />
            </Routes>
        </Router>
    );
}
