import { useState } from 'react';
import { Card } from '../ui/Card';
import { generateWebsiteTemplate } from '../ui/websiteGenerator';
import { sendContactFormEmail } from '../../services/emailService';

export const ContactCard = () => {
  const placeholderStyle = `
    .contact-form input::placeholder,
    .contact-form textarea::placeholder {
      color: #808080 !important;
    }
    @media (hover: none) and (pointer: coarse) {
      .contact-info-item:hover {
        background-color: transparent !important;
        transform: none !important;
      }
      /* Reset button hover states on mobile - but not for buttons with touch handlers */
      button:hover:not([ontouchstart]) {
        background-color: initial !important;
        color: initial !important;
        transform: none !important;
      }
    }
  `;
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    workEmail: '',
    projectDetails: ''
  });
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showValidationPopup, setShowValidationPopup] = useState(false);
  const [validationMessage, setValidationMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.workEmail.trim()) {
      setValidationMessage('Please fill in all required fields (Full Name, Phone, and Work Email).');
      setShowValidationPopup(true);
      setTimeout(() => setShowValidationPopup(false), 2000);
      return;
    }
    
    try {
      // Send email with form data including generated image
      await sendContactFormEmail({
        ...formData,
        generatedImage: generatedImage || undefined
      });
      
      // Clear form fields after successful submission
      setFormData({
        fullName: '',
        phone: '',
        workEmail: '',
        projectDetails: ''
      });
      setGeneratedImage(null);
      
      // Show success popup
      setShowSuccessPopup(true);
      
      // Refresh page after 3 seconds
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error('Failed to send enquiry:', error);
      setValidationMessage('Sorry, there was an error sending your enquiry. Please try again.');
      setShowValidationPopup(true);
      setTimeout(() => setShowValidationPopup(false), 2000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGenerateTemplate = async () => {
    if (!formData.projectDetails.trim()) return;
    
    setIsGenerating(true);
    try {
      const imageUrl = await generateWebsiteTemplate(formData.projectDetails);
      setGeneratedImage(imageUrl);
    } catch (error) {
      console.error('Error generating template:', error);
    }
    setIsGenerating(false);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: placeholderStyle }} />
      <section id="contact-us" className="min-h-screen flex flex-col bg-gradient-to-br from-red-600 via-red-700 to-red-800 rounded-2xl sm:rounded-3xl mx-2 md:mx-4 mt-2 md:mt-4 mb-2 md:mb-4 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
      <div className="max-w-6xl mx-auto px-3 sm:px-4 flex-1 flex items-center">
        <div className="w-full bg-transparent">
          <div className="flex flex-col lg:flex-row min-h-[500px] sm:min-h-[600px] md:min-h-[700px] p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Left Section - Contact Info */}
            <div className="lg:w-1/2 flex flex-col mb-8 lg:mb-0 py-2 sm:py-4 lg:mr-20 relative z-10">
              <div className="text-left max-w-md w-full">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">Get in Touch</h2>
                <p className="text-sm sm:text-base md:text-lg text-white mb-6 sm:mb-8 leading-relaxed">
                  Ready to transform your digital ideas into reality? 
                  Arodos is here to help you succeed!
                  Get in touch today, and let's start building 
                  something exceptional.
                </p>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-white flex items-center md:hover:bg-white/10 p-2 rounded-lg transition-all duration-300 md:hover:scale-105 contact-info-item">
                    <img src="/images/phone.png" alt="Phone" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4" />
                    <span className="text-sm sm:text-base font-semibold mr-2">Phone</span>
                    <span className="text-xs sm:text-sm md:text-base">+919620861198</span>
                  </div>
                  <div className="text-white flex items-center md:hover:bg-white/10 p-2 rounded-lg transition-all duration-300 md:hover:scale-105 contact-info-item">
                    <img src="/images/mess.png" alt="Email" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4" />
                    <span className="text-sm sm:text-base font-semibold mr-2">Email</span>
                    <a href="mailto:contact@arodos.com" className="text-xs sm:text-sm md:text-base md:hover:underline md:hover:text-yellow-300 transition-colors duration-300">contact@arodos.com</a>
                  </div>
                  <div className="text-white flex items-center md:hover:bg-white/10 p-2 rounded-lg transition-all duration-300 md:hover:scale-105 contact-info-item">
                    <img src="/images/arrow (2).png" alt="Website" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4" />
                    <span className="text-sm sm:text-base font-semibold mr-2">Website</span>
                    <a href="http://www.arodos.com" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm md:text-base md:hover:underline md:hover:text-yellow-300 transition-colors duration-300">www.arodos.com</a>
                  </div>
                  <div className="text-white flex items-center md:hover:bg-white/10 p-2 rounded-lg transition-all duration-300 md:hover:scale-105 contact-info-item">
                    <img src="/images/loca.png" alt="Location" className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 mr-2 sm:mr-3 md:mr-4" />
                    <span className="text-sm sm:text-base font-semibold mr-2">Location</span>
                    <span className="text-xs sm:text-sm md:text-base">Guwahati, Bangalore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - White Form Card */}
            <div className="lg:w-1/2 flex items-center justify-center lg:ml-8 relative z-10">
              <Card className="p-4 sm:p-6 md:p-8 w-full max-w-md transform hover:scale-105 transition-all duration-300 hover:shadow-xl" hover={false}>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent animate-pulse">Got a project in mind?</h3>
                <p className="text-xs sm:text-sm md:text-base mb-4 sm:mb-6" style={{ color: '#333333' }}>
                  Let us know what you need – our team will get in touch shortly.
                </p>

                <form onSubmit={handleSubmit} className="contact-form space-y-3 sm:space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm mb-1 sm:mb-2" style={{ color: '#333333' }}>Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Please Enter your Full Name"
                      className="w-full h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 border rounded text-xs sm:text-sm focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm mb-1 sm:mb-2" style={{ color: '#333333' }}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        target.value = target.value.replace(/[^0-9]/g, '');
                      }}
                      placeholder="Enter your Phone Number"
                      className="w-full h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 border rounded text-xs sm:text-sm focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm mb-1 sm:mb-2" style={{ color: '#333333' }}>Work Email</label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleChange}
                      placeholder="Enter your Business email Address"
                      className="w-full h-8 sm:h-9 md:h-10 px-2 sm:px-3 md:px-4 border rounded text-xs sm:text-sm focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-1 sm:mb-2">
                      <label className="block text-xs sm:text-sm" style={{ color: '#333333' }}>Project Details</label>
                      <button
                        type="button"
                        onClick={handleGenerateTemplate}
                        disabled={isGenerating || !formData.projectDetails.trim()}
                        className="flex items-center space-x-1 px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-md hover:from-cyan-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                        title="Generate website prototype"
                      >
                        {isGenerating ? (
                          <>
                            <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
                            <span className="hidden sm:inline">Generate</span>
                          </>
                        ) : (
                          <>
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="hidden sm:inline">Generate</span>
                          </>
                        )}
                      </button>
                    </div>
                    <textarea
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Briefly Describe your project goals or any specific requirements"
                      rows={6}
                      className="w-full px-2 sm:px-3 md:px-4 py-2 sm:py-3 border rounded text-xs sm:text-sm resize-none focus:outline-none"
                      style={{ backgroundColor: '#F5F5F5', color: '#000000', borderColor: '#CCCCCC' }}
                    />
                    {generatedImage && (
                      <div className="mt-2 sm:mt-3 p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                        <p className="text-xs text-blue-700 mb-2 font-medium">✨ Website Template Preview:</p>
                        <div className="relative group">
                          <img
                            src={generatedImage}
                            alt="Website Template"
                            className="w-full h-24 sm:h-32 object-cover rounded-lg"
                          />
                          <button
                            onClick={() => setGeneratedImage(null)}
                            className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 text-gray-500 hover:text-red-600 p-1 sm:p-1.5 rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-110"
                            title="Delete template"
                          >
                            <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                            </svg>
                          </button>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">demo</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-2 sm:pt-3 md:pt-4 flex justify-center">
                    <button
                      type="submit"
                      className="bg-white font-jost px-6 py-3 rounded-lg transition-all duration-300 font-medium border border-gray-600"
                      style={{ color: '#870000' }}
                      onMouseEnter={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#F40202';
                        target.style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = 'white';
                        target.style.color = '#870000';
                      }}
                      onMouseDown={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#F40202';
                        target.style.color = 'white';
                        target.style.transform = 'scale(0.95)';
                      }}
                      onMouseUp={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#F40202';
                        target.style.color = 'white';
                        target.style.transform = 'scale(1)';
                      }}
                      onTouchStart={(e) => {
                        const target = e.target as HTMLButtonElement;
                        target.style.backgroundColor = '#F40202';
                        target.style.color = 'white';
                        target.style.transform = 'scale(0.95)';
                      }}
                      onTouchEnd={(e) => {
                        const target = e.target as HTMLButtonElement;
                        setTimeout(() => {
                          target.style.backgroundColor = 'white';
                          target.style.color = '#870000';
                          target.style.transform = 'scale(1)';
                        }, 150);
                      }}
                    >
                      Submit Request →
                    </button>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    {/* Validation Warning Popup */}
    {showValidationPopup && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={() => setShowValidationPopup(false)}></div>
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 w-full max-w-xs sm:max-w-md shadow-2xl">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">Warning!</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{validationMessage}</p>
            <button
              onClick={() => setShowValidationPopup(false)}
              className="bg-red-500 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm sm:text-base"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    )}

    {/* Success Popup Modal */}
    {showSuccessPopup && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
        
        {/* Modal */}
        <div className="relative bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 mx-4 max-w-xs sm:max-w-md w-full shadow-2xl transform animate-bounce">
          {/* Success Icon */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          
          {/* Message */}
          <div className="text-center">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Your enquiry has been sent successfully. Our team will get back to you shortly.
            </p>
            <div className="flex items-center justify-center text-xs sm:text-sm text-gray-500">
              <svg className="w-4 h-4 mr-1 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Refreshing page...
            </div>
          </div>
        </div>
      </div>
    )}

    </>
  );
};