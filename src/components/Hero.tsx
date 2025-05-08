import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="relative bg-primary min-h-[85dvh]">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469474968028-56623f02e42e')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col min-h-[85dvh]">
       <Navbar/>
        <div className="flex-1 max-w-4xl mx-auto text-center flex flex-col items-center justify-center  h-full">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            African Chiefs of <span className="text-gold-light">Defense Staff</span> 
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Strengthening Continental Security Cooperation and Defense Coordination
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10">
            <div className="flex items-center justify-center text-yellow-500">
              <Calendar size={20} className="mr-2" />
              <span>July 9-11, 2025</span>
            </div>
            <div className="flex items-center justify-center text-yellow-500">
              <MapPin size={20} className="mr-2" />
              <span>Transcorp Hotel, Abuja</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/register" 
              className="bg-yellow-500  hover:bg-yellow-700 text-navy-dark font-medium px-8 py-3 rounded transition-colors"
            >
              Register Now
            </Link>
            <Link 
              to="/event" 
              className="border border-yellow-700 text-white hover:bg-yellow-700 font-medium px-8 py-3 rounded transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
