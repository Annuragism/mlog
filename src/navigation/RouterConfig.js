import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import BlogDetails from "../components/BlogDetails/BlogDetails";
import LandingPage from "../components/LandingPage/LandingPage";
import NotFound from "../components/NotFound/NotFound";
import AdminLogin from "../components/AdminLogin/AdminLogin";
import Admin from "../components/Admin/Admin";
import Blog from "../components/Blog/Blog";
import AdminDashbaord from "../components/AdminDashbaord/AdminDashbaord";

//shared_components
import MainLayout from "../shared_components/MainLayout/MainLayout";

//Extras

import { useNavigate } from 'react-router-dom'

//Function Start
function RouterConfig() {
    const history = useNavigate()
    return (
        <Routes>
            <Route path="/" element={<LandingPage  history={history} />} >
                <Route path="home" element={<MainLayout  history={history} />} />
                <Route path="blog" element={<BlogDetails  history={history} />} />
            </Route>
            <Route path="admin" element={<Admin history={history} />} >
                    <Route path="dashboard" element={<AdminDashbaord history={history} />} />
                    <Route path="blog" element={<Blog history={history} />} />
                </Route>
            <Route path="adminlogin" element={<AdminLogin history={history} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RouterConfig