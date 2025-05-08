import { Outlet } from "react-router-dom";

import Footer from "./components/Footer";
import { Toaster } from 'react-hot-toast';

const Layout = () => {
    return (
        <div className="flex flex-col  font-primary">
            {/* <Navbar /> */}
            <main className="flex-1 min-h-screen">
                <Outlet /> 
                 <Toaster position="top-right" reverseOrder={false} />
            </main>

            <Footer />
            
        </div>
    );
};

export default Layout;
