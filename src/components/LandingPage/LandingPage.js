import './LandingPage.css'
import Header from '../../shared_components/Header/Header';
import Footer from '../../shared_components/Footer/Footer';
import MainLayout from "../../shared_components/MainLayout/MainLayout";
import Banner from "../../shared_components/Banner/Banner";
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function LandingPage() {
    const location = useLocation()

    return (
        location?.pathname == "/" ?
        <Navigate to="/home" replace />
        :
        <div>
            <Header />
            <Banner/>
            {/* < MainLayout/> */}
            < Outlet />
            <Footer/>
        </div>
    )
}
export default LandingPage