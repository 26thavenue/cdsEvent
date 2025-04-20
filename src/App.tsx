
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Venue from './pages/Venue';
import Gallery from "./pages/Gallery"
import Register from "./pages/Register"
import Admin from "./pages/AdminPortal"
import Login from './pages/Login';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './context';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
    <AuthProvider>
      <Router>
            <Routes>
                <Route path ="/" element={<Layout/>} >
                    <Route index element={<Home />} />
                    <Route path="/event" element={<Events />} />
                    <Route path="/venue" element={<Venue />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin"  element={
                      <ProtectedRoute>
                        <Admin />
                      </ProtectedRoute>
                    } />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                  
                </Route>


            </Routes>
        </Router>
    </AuthProvider>
      
    </>
  )
}

export default App
