
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Venue from './pages/Venue';
import Gallery from "./pages/Gallery"
import Register from "./pages/Register"
import Admin from "./pages/AdminPortal"


function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route path ="/" element={<Layout/>} >
                    <Route index element={<Home />} />
                    <Route path="/event" element={<Events />} />
                    <Route path="/venue" element={<Venue />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin" element={<Admin />} />
                  
                </Route>


            </Routes>
        </Router>
    </>
  )
}

export default App
