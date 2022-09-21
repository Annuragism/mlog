import './Blog.css'
import Header from '../../shared_components/Header/Header';
import Footer from '../../shared_components/Footer/Footer';
import MainLayout from "../../shared_components/MainLayout/MainLayout";
import Banner from "../../shared_components/Banner/Banner";
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function Blog() {
    const location = useLocation()

    return (
        <div>
            Blog
       </div>
    )
}
export default Blog