import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import LandingPage from "../components/LandingPage/LandingPage";
import NotFound from "../components/NotFound/NotFound";
import MainLayout from "../shared_components/MainLayout/MainLayout";

function RouterConfig() {
    return (
        <BrowserRouter>
        <Routes>
                <Route path="/" element={<LandingPage />} >
                    <Route path="home" element={<MainLayout />} />
                    <Route path="blog" element={<BlogDetails />} />
                    <Route path="expenses" element={<Expenses />} />
                    <Route path="invoices" element={<Invoices />} />
                 </Route>   
        <Route path="*" element={<NotFound />} />
      </Routes>
        </BrowserRouter>
    )
}

function Expenses() {
    return (<h2>
        Expenses
    </h2>)
}

function Invoices() {
    return (<h2>
        Invoices
    </h2>)
}
export default RouterConfig