import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { MapPin, Phone, Globe, Clock, Car, Plane } from "lucide-react";
import Banner from '../components/Banner';



const ImageSlider = () => {
  const containerRef = useRef(null)
  const slideRefs = useRef([])

  const images=[
    "uururu",
    "uururu",
    "uururu",
    "uururu",
    "uururu",
    "uururu",
    "uururu",
    "uururu",
    "uururu",
  ]

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: 'power2.inOut' } })

    images.forEach((_, index) => {
      tl.to(containerRef.current, {
        x: -index * 340, 
        duration: 2,
      }, `+=2`) 
    })
  }, [])

  return (
    <div className=" overflow-hidden mx-auto relative">
      <div
        ref={containerRef}
        className="flex gap-4"
        style={{ width: `${images.length * 340}px` }}
      >
        {images.map((_, i) => (
          <div
            key={i}
            ref={(el) => (slideRefs.current[i] = el)}
            className="w-[700px] h-[300px] flex-shrink-0 overflow-hidden relative bg-green-50 rounded-xl"
            style={{
              transition: 'all 0.5s ease-in-out',
            }}
          >
            
          </div>
        ))}
      </div>
    </div>
  )
}





const Venue = () => {
  return (
    <main className=''>
       <div className="bg-primary py-16 md:py-24 mb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Event <span className="text-gold-light">Location</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transcorp Hilton Hotel, Abuja, Nigeria
          </p>
        </div>
      </div>
         <div className='bg-green-200 h-[70dvh] w-[90dvw] mx-auto rounded-3xl'>

        </div>

         <div className="my-16 px-8 lg:px-24 ">
            <h2 className="text-3xl font-bold mb-4">Venue: Transcorp Hotels</h2>
      <p className="mb-6">
        Transcorp Hotels Plc is one of Nigeria’s leading hospitality companies, known for delivering
        excellent guest experiences and world-class service. It is a subsidiary of Transnational Corporation
        of Nigeria (Transcorp) and operates premium hotels that cater to both business and leisure travelers.
      </p>
      <p className="mb-6">
        The Transcorp Hilton Hotel in Abuja stands as one of Nigeria's premier luxury hotels and a landmark in the capital city. As the host venue for the African Chiefs of Defense Staff Summit 2025, it offers world-class facilities that meet international standards for high-level diplomatic and military gatherings.

Located in the heart of Nigeria's federal capital territory, the hotel is situated in close proximity to key government buildings, embassies, and international organizations, making it an ideal venue for this prestigious continental event.

The summit will utilize the hotel's extensive conference facilities, including the Congress Hall for plenary sessions, multiple executive meeting rooms for breakout discussions, and expansive exhibition spaces for technology displays and national delegations.
      </p>

     

      <p className="mt-6">
        Transcorp Hotels is committed to redefining hospitality in Africa through innovation, sustainability,
        and guest satisfaction.
      </p>
        </div>

        <div className="my-8">
            <ImageSlider/>
        </div>

        <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-navy-dark mb-10 text-center">
            Getting to the Venue
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* From Airport */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-navy-light p-3 rounded-full mr-4">
                  <Plane size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark">From Nnamdi Azikiwe International Airport</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">1</span>
                  <span>Distance: Approximately 40 km (25 miles)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">2</span>
                  <span>Travel Time: About 30-45 minutes depending on traffic</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">3</span>
                  <span>Official summit transportation will be provided for delegates</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">4</span>
                  <span>Taxis and ride-sharing services are also available</span>
                </li>
              </ul>
            </div>
            
            {/* By Car */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-navy-light p-3 rounded-full mr-4">
                  <Car size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark">By Car</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">1</span>
                  <span>Located in the central district of Abuja</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">2</span>
                  <span>Accessible via Aguiyi Ironsi Street</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">3</span>
                  <span>Complimentary parking available for summit delegates</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">4</span>
                  <span>Security protocols will be in place for all vehicles</span>
                </li>
              </ul>
            </div>
            
            {/* Local Transportation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-navy-light p-3 rounded-full mr-4">
                  <MapPin size={24} className="text-gold" />
                </div>
                <h3 className="text-xl font-semibold text-navy-dark">Local Information</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">1</span>
                  <span>5-10 minutes from major government buildings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">2</span>
                  <span>Close to diplomatic zones and embassies</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">3</span>
                  <span>Shuttle services available throughout the summit</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-navy text-white text-xs font-medium h-5 w-5 rounded-full flex items-center justify-center mt-1 mr-3">4</span>
                  <span>Security escort available for officials upon request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Banner/>

       

    </main>
  )
}

export default Venue