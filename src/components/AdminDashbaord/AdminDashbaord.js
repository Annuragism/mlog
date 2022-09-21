import './AdminDashbaord.css'
import Header from '../../shared_components/Header/Header';
import Footer from '../../shared_components/Footer/Footer';
import MainLayout from "../../shared_components/MainLayout/MainLayout";
import Banner from "../../shared_components/Banner/Banner";
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';

function AdminDashbaord() {
    const location = useLocation()

    return (
        <div>
            AdminDashbaord
       </div>
    )
}
export default AdminDashbaord