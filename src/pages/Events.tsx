import { CalendarDays,Target,Users,FileText,Clock } from "lucide-react"
import Banner from "../components/Banner"

const Events = () => {
  return (
    <main className='mb-16 '>

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

      <section className="px-8 lg:px-24">
          <div className='bg-green-100 h-[70dvh] w-[90dvw] mx-auto rounded-3xl'>

        </div>


        <div className='my-8 flex flex-col gap-4'>
            <h4 className='text-lg text-gray-500'> Wednesday 9th  - Friday 11th July, 2025.</h4>
            <h1 className='text-5xl font-bold  text-[#0B3D2E]'>
                AFRICAN CHIEFS OF DEFENSE CONFERENCE 2024
            </h1>
        </div>

        <div className="my-8 flex flex-col gap-4"> 
            {/* <h2 className="text-2xl font-bold">About this Event</h2> */}
            <div className="flex gap-4 items-center">
                <CalendarDays size={20} stroke="gray" className=" " />
                <p className="text-sm">Event Lasts for 3 days</p>
            </div>

            <p className="my-2 text-lg">
                 Get ready to connect and engage with Africa’s Defence Chiefs at the Africa Chiefs of Defence Summit to be held from 18-19th June 2025 in Abuja, Nigeria. This landmark event marks a historic first-of-a-kind gathering that brings together Chiefs of Defence from across the continent and defence industry experts and contractors towards reshaping the future of defence procurement and cooperation in the region. This exclusive gathering will serve as an important platform for defence leaders to engage in high-level discussions on shared security challenges, exchange strategic insights, and strengthen regional and global cooperation.
            </p>

            <p className="my-2 text-lg">
                With growing security complexities in Africa, the summit aims to highlight latest advancements and innovations shaping defense landscape by providing a platform for international and regional defence solution providers to showcase modern equipment and technologies with the capabilities to support African defence forces in achieving their respective national security and defence objectives.
            </p>
        </div>

     


        <button className="px-12 py-4 bg-[#0B3D2E] text-white rounded-md cursor-pointer hover:opacity-90 transition-opacity ">
            Register For Event
        </button>
      </section>

       <section className="py-16 bg-white my-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">
            Summit Schedule
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 ">
            {/* Day 1 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500  mr-2" />
                  <h3 className="text-xl font-semibold text-yellow-500 ">Day 1 - July 9, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    08:00 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Registration and Welcome</p>
                    <p className="text-gray-600 text-sm">Transcorp Hotel Main Hall</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    09:30 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Opening Ceremony</p>
                    <p className="text-gray-600 text-sm">Presidential Address and Keynote Speeches</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    12:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Lunch Break</p>
                    <p className="text-gray-600 text-sm">Networking Opportunity</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    02:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Plenary Session: Regional Security Challenges</p>
                    <p className="text-gray-600 text-sm">Panel Discussion with Regional Representatives</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    05:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Welcome Reception</p>
                    <p className="text-gray-600 text-sm">Hosted by the Chief of Defense Staff</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Day 2 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500  mr-2" />
                  <h3 className="text-xl font-semibold text-yellow-500 ">Day 2 - July 10, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    09:00 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Thematic Workshops (Parallel Sessions)</p>
                    <p className="text-gray-600 text-sm">Counter-Terrorism, Peacekeeping, Maritime Security</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    12:30 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Lunch Break</p>
                    <p className="text-gray-600 text-sm">Regional Coordination Meetings</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    02:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Technology Exhibition</p>
                    <p className="text-gray-600 text-sm">Defense Innovation Showcase</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    04:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Strategic Planning Session</p>
                    <p className="text-gray-600 text-sm">Continental Defense Coordination</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    07:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Gala Dinner</p>
                    <p className="text-gray-600 text-sm">Cultural Performances and Networking</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Day 3 */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="bg-primary p-4">
                <div className="flex items-center">
                  <CalendarDays size={20} className="text-yellow-500 mr-2" />
                  <h3 className="text-xl font-semibold text-yellow-500 ">Day 3 - July 11, 2025</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    09:00 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Final Plenary Session</p>
                    <p className="text-gray-600 text-sm">Summary of Workshops and Recommendations</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    11:30 AM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Adoption of Summit Declaration</p>
                    <p className="text-gray-600 text-sm">Official Communiqué</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    12:30 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Lunch Break</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    02:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Closing Ceremony</p>
                    <p className="text-gray-600 text-sm">Remarks and Next Steps</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-24 flex-shrink-0 text-primary font-semibold">
                    04:00 PM
                  </div>
                  <div>
                    <p className="font-medium text-primary">Press Conference</p>
                    <p className="text-gray-600 text-sm">Summit Outcomes and Achievements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Objectives Section */}
      <section className="py-16 bg-primary text-white ">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-10 text-center">
            Summit Objectives
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-yellow-600 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className=" h-10 w-10 rounded-full flex items-center justify-center mr-4">
                  <Target size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gold-light">Strategic Coordination</h3>
              </div>
              <p>
                Enhance coordination mechanisms among African defense forces to respond effectively to transnational security challenges and conflicts.
              </p>
            </div>
            
            <div className="bg-yellow-600 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gold h-10 w-10 rounded-full flex items-center justify-center mr-4">
                  <Users size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gold-light">Capacity Building</h3>
              </div>
              <p>
                Strengthen the operational capabilities of African defense institutions through knowledge sharing, joint training initiatives, and resource mobilization.
              </p>
            </div>
            
            <div className="bg-yellow-600 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gold h-10 w-10 rounded-full flex items-center justify-center mr-4">
                  <FileText size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gold-light">Policy Development</h3>
              </div>
              <p>
                Develop comprehensive continental defense policies that address emerging threats while respecting sovereignty and promoting regional integration.
              </p>
            </div>

            <div className="bg-yellow-600 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gold h-10 w-10 rounded-full flex items-center justify-center mr-4">
                  <Clock size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gold-light">Sustainable Security</h3>
              </div>
              <p>
                Foster partnerships for sustainable security solutions that address root causes of conflicts, promote peace, and support development across the continent.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-xl font-light max-w-3xl mx-auto">
              "The security of our continent requires coordinated effort, shared vision, and combined resources. Together, we stand stronger."
            </p>
            <p className="mt-4 text-gold-light">- Chief of Defense Staff, Opening Statement</p>
          </div>
        </div>
      </section>
      
      {/* CDS Statement */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-primary mb-10 text-center">
            Statement from the Chief of Defense Staff
          </h2>
          
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1568602471122-7832951cc4c5')] bg-cover bg-center"></div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-2">
                  General Samuel Olatunde
                </h3>
                <p className="text-gray-600 mb-4">Chief of Defense Staff, Federal Republic of Nigeria</p>
                <p className="text-navy">
                  Statement on the Inauguration of the Planning Committee for the African Chiefs of Defense Staff Summit 2025
                </p>
              </div>
            </div>
            
            <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                Distinguished colleagues, esteemed officers, and members of the Planning Committee,
              </p>
              <p className="mb-4">
                It is with great honor and a profound sense of responsibility that I address you today at the inauguration of the Planning Committee for the upcoming African Chiefs of Defense Staff Summit 2025. This summit represents a pivotal moment for our continent's collective security architecture.
              </p>
              <p className="mb-4">
                Africa faces unique security challenges that transcend national borders. From transnational terrorism to maritime insecurity, from ethnic conflicts to climate-induced crises, the threats to our people's safety and wellbeing demand a unified and coordinated response. No single nation, regardless of its military strength or economic resources, can effectively address these challenges in isolation.
              </p>
              <p className="mb-4">
                The African Chiefs of Defense Staff Summit is conceived as a platform where we, as military leaders responsible for our nations' defense, can forge stronger bonds of cooperation, share critical intelligence, develop joint capability frameworks, and harmonize our strategic approaches to continental security.
              </p>
              <p className="mb-4">
                To the distinguished members of the Planning Committee, I charge you with the important task of organizing a summit that will not merely be a gathering of military officials, but a transformative event that produces tangible outcomes for Africa's security landscape. I have full confidence in your abilities to deliver on this mandate.
              </p>
              <p>
                Together, we shall work towards a more secure Africa, where peace enables prosperity, and where our defense institutions serve as pillars of stability for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Banner/>


        
        
    </main>
  )
}

export default Events