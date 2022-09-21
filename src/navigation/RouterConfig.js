import LandingPage from "../components/LandingPage/LandingPage";
import NotFound from "../components/NotFound/NotFound";
import AdminLogin from "../components/AdminLogin/AdminLogin";
import MainLayout from "../shared_components/MainLayout/MainLayout";
import {  Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
function RouterConfig() {
    const history  = useNavigate()
    return (
        <Routes>
                <Route path="/" element={<LandingPage history={history} />} />
                 <Route path="admin" element={<AdminLogin history={history} />} >
                    <Route path="dashboard" element={<MainLayout history={history} />} />
                </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}

export default RouterConfig