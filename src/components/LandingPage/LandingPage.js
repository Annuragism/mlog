import './LandingPage.css'
import Header from '../../shared_components/Header/Header';
import Footer from '../../shared_components/Footer/Footer';
import MainLayout from "../../shared_components/MainLayout/MainLayout";
import Banner from "../../shared_components/Banner/Banner";
// import { Outlet } from 'react-router-dom';

function LandingPage() {

    return (
        <div>
            <Header />
            <Banner/>
            < MainLayout/>
            {/* < Outlet /> */}
            <Footer/>
        </div>
    )
}
export default LandingPage