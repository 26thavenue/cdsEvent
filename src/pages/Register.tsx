


import { useState } from "react";

const Register = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would submit the form to a backend service
    setFormSubmitted(true);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <div className="bg-[#0B3D2E] py-16 md:py-24">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Summit <span className="text-gold-light">Registration</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Register to attend the African Chiefs of Defense Staff Summit 2025
          </p>
        </div>
      </div>
      
      {/* Registration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {formSubmitted ? (
              <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg text-center">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h2 className="text-2xl font-bold text-green-800 mb-4">Registration Submitted Successfully!</h2>
                <p className="text-green-700 mb-6">
                  Thank you for registering for the African Chiefs of Defense Staff Summit 2025. We have received your registration and will be in touch shortly with confirmation details.
                </p>
                <p className="text-green-700">
                  A confirmation email has been sent to the address you provided.
                </p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-navy-dark mb-8 text-center">
                  Registration Form
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                    <h3 className="text-lg font-semibold text-navy-dark mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-navy-dark mb-4">Professional Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Country *
                        </label>
                        <select
                          id="country"
                          name="country"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        >
                          <option value="">Select your country</option>
                          <option value="Algeria">Algeria</option>
                          <option value="Angola">Angola</option>
                          <option value="Benin">Benin</option>
                          <option value="Botswana">Botswana</option>
                          <option value="Burkina Faso">Burkina Faso</option>
                          {/* Add all 55 African countries in a real implementation */}
                          <option value="Nigeria">Nigeria</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Egypt">Egypt</option>
                          <option value="Kenya">Kenya</option>
                          <option value="Ghana">Ghana</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                          Organization/Institution *
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                          Position/Rank *
                        </label>
                        <input
                          type="text"
                          id="position"
                          name="position"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="delegationType" className="block text-sm font-medium text-gray-700 mb-1">
                          Delegation Type *
                        </label>
                        <select
                          id="delegationType"
                          name="delegationType"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        >
                          <option value="">Select delegation type</option>
                          <option value="Official Representative">Official Representative</option>
                          <option value="Observer">Observer</option>
                          <option value="Media">Media</option>
                          <option value="Support Staff">Support Staff</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-navy-dark mb-4">Additional Information</h3>
                    <div className="space-y-6">
                      <div>
                        <label htmlFor="dietary" className="block text-sm font-medium text-gray-700 mb-1">
                          Dietary Requirements
                        </label>
                        <input
                          type="text"
                          id="dietary"
                          name="dietary"
                          placeholder="If any"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <label htmlFor="accessibility" className="block text-sm font-medium text-gray-700 mb-1">
                          Accessibility Requirements
                        </label>
                        <input
                          type="text"
                          id="accessibility"
                          name="accessibility"
                          placeholder="If any"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
                        />
                      </div>
                      <div>
                        <div className="flex items-start">
                          <input
                            id="confirmation"
                            name="confirmation"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-navy border-gray-300 rounded mt-1 mr-2"
                          />
                          <label htmlFor="confirmation" className="text-sm text-gray-700">
                            I confirm that all information provided is accurate and I understand that my registration is subject to approval based on eligibility criteria for the African Chiefs of Defense Staff Summit 2025.
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-navy hover:bg-navy-light text-white font-medium px-8 py-3 rounded-lg transition-colors inline-block"
                    >
                      Submit Registration
                    </button>
                  </div>
                </form>
              </>
            )}
            
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h3 className="text-xl font-semibold text-navy-dark mb-4">
                Registration Information
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>All registrations are subject to verification and approval.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Official invitations with security clearance details will be sent following approval.</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>For any registration inquiries, please contact: registration@acdssummit2025.org</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Register;