import { HeroNavbar } from '../components/ui/HeroNavbar';
import { Chatbot } from '../components/ui/Chatbot';
import { Footer } from '../components/sections/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const TermsOfUse = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="relative bg-black overflow-hidden">
        {/* Animated red lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" style={{ boxShadow: '0 0 6px rgba(244, 2, 2, 0.5)' }}></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse" style={{ animationDelay: '1s', boxShadow: '0 0 6px rgba(244, 2, 2, 0.5)' }}></div>
        
        {/* Moving gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black animate-pulse" style={{ animationDuration: '3s' }}></div>
        
        <HeroNavbar />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-red-500/5 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
          
          <div ref={titleRef} className={`transform transition-all duration-700 ${titleVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">Terms of Use</h1>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-gray-600">Effective Date: October, 2025</p>
            </div>
          </div>
          
          <div ref={contentRef} className={`prose prose-lg max-w-none transform transition-all duration-700 delay-300 ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-red-50 to-gray-50 p-6 rounded-xl border-l-4 border-red-500 mb-8 hover:shadow-md transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed font-medium">
                Welcome to Arodos Technologies! By accessing or using our website, you agree to comply with these Terms of Use. Please read them carefully.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: '1. Acceptance of Terms',
                  content: 'By visiting or using this website, you agree to be bound by these Terms and all applicable laws and regulations. If you do not agree, please do not use our site.'
                },
                {
                  title: '2. Use of Website',
                  content: 'You may use the website for personal, non-commercial purposes. You agree not to:',
                  list: [
                    'Engage in any activity that may harm, disrupt, or interfere with the website.',
                    'Attempt to gain unauthorized access to our systems, data, or accounts.',
                    'Use the website for any unlawful purpose.'
                  ]
                },
                {
                  title: '3. Intellectual Property',
                  content: 'All content on this website, including text, images, graphics, logos, and code, is the property of Arodos Technologies or its licensors and is protected by intellectual property laws. You may not copy, reproduce, or distribute any material without our written permission.'
                },
                {
                  title: '4. Links to Third-Party Sites',
                  content: 'Our website may contain links to third-party websites. These links are provided for convenience only. We are not responsible for the content, privacy practices, or availability of any external sites.'
                },
                {
                  title: '5. Disclaimer of Warranties',
                  content: 'The website is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the website will be uninterrupted, error-free, or completely secure.'
                },
                {
                  title: '6. Limitation of Liability',
                  content: 'Arodos Technologies shall not be liable for any damages arising from the use or inability to use the website, including indirect, incidental, or consequential damages.'
                },
                {
                  title: '7. Modifications to Terms',
                  content: 'We may update these Terms of Use at any time. All changes will be posted on this page with a revised effective date. Your continued use of the website constitutes acceptance of the updated terms.'
                },
                {
                  title: '8. Governing Law',
                  content: 'These Terms are governed by the laws of India. Any disputes arising from your use of the website shall be subject to the exclusive jurisdiction of the courts in Assam, India.'
                },
                {
                  title: 'Contact Us',
                  content: 'For questions regarding these Terms of Use, please contact us at contact@arodos.com'
                }
              ].map((section, index) => (
                <div key={section.title} className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3 group-hover:text-red-600 transition-colors">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                    {section.title}:
                  </h2>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-red-200 transition-colors pl-5">
                    <p className="text-gray-700 leading-relaxed mb-3">
                      {section.content?.includes('contact@arodos.com') ? (
                        section.content.split('contact@arodos.com').map((part, i) => (
                          <span key={i}>
                            {part}
                            {i === 0 && (
                              <a href="mailto:contact@arodos.com" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                                contact@arodos.com
                              </a>
                            )}
                          </span>
                        ))
                      ) : section.content}
                    </p>
                    {section.list && (
                      <ul className="space-y-2 mt-3">
                        {section.list.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-700 leading-relaxed hover:text-gray-900 transition-colors">
                            <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => window.location.href = '/'}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium flex items-center gap-2"
              onTouchEnd={(e) => {
                const target = e.target as HTMLButtonElement;
                setTimeout(() => {
                  target.style.backgroundColor = '#dc2626';
                }, 150);
              }}
            >
              <span>←</span>
              Back to Home
            </button>
          </div>
        </div>
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
};