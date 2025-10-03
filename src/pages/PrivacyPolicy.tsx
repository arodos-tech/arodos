import { HeroNavbar } from '../components/ui/HeroNavbar';
import { Chatbot } from '../components/ui/Chatbot';
import { Footer } from '../components/sections/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const PrivacyPolicy = () => {
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
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">Privacy Policy</h1>
            <div className="flex items-center gap-2 mb-8">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <p className="text-gray-600">Effective Date: October, 2025</p>
            </div>
          </div>
          
          <div ref={contentRef} className={`prose prose-lg max-w-none transform transition-all duration-700 delay-300 ${contentVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-gradient-to-r from-red-50 to-gray-50 p-6 rounded-xl border-l-4 border-red-500 mb-8 hover:shadow-md transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed font-medium">
                At Arodos Technologies, your privacy matters to us. We're committed to keeping your information safe while making your experience with us smooth and seamless.
              </p>
            </div>

            <div className="space-y-8">
              <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3 group-hover:text-red-600 transition-colors">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  What We Collect:
                </h2>
                <div className="space-y-4 pl-5">
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-red-200 transition-colors">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-red-600">Info You Give Us:</strong> Name, email, phone, company details — when you contact us or sign up for updates.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-red-200 transition-colors">
                    <p className="text-gray-700 leading-relaxed">
                      <strong className="text-red-600">Info We Collect Automatically:</strong> IP address, browser type, device info, and pages you visit- to improve our site and services.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3 group-hover:text-red-600 transition-colors">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  How We Use It:
                </h2>
                <ul className="space-y-3 pl-5">
                  <li className="flex items-start gap-3 text-gray-700 leading-relaxed hover:text-gray-900 transition-colors">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    To respond to your questions and provide our services.
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 leading-relaxed hover:text-gray-900 transition-colors">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    To share updates, news, or special offers (only if you've opted in).
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 leading-relaxed hover:text-gray-900 transition-colors">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    To make our website, apps, and solutions better for you.
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 leading-relaxed hover:text-gray-900 transition-colors">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    To protect our systems and ensure safe use.
                  </li>
                </ul>
              </div>

              {['Sharing Your Info', 'Cookies & Tracking', 'Your Rights', 'Keeping Things Updated', 'Get in Touch'].map((title, index) => {
                const content = {
                  'Sharing Your Info': 'We never sell your info. Occasionally, we may work with trusted partners to help us operate our website or deliver services- always under strict confidentiality.',
                  'Cookies & Tracking': 'We use cookies to enhance your experience and understand how you interact with our site. You can adjust your browser settings, but some features may not work properly.',
                  'Your Rights': 'You can request access, correction, or deletion of your personal info anytime. Just drop us a message at contact@arodos.com.',
                  'Keeping Things Updated': 'We may update this Privacy Policy occasionally. Any changes will be posted here with the new date.',
                  'Get in Touch': 'Questions? Concerns? We\'re here to help- reach out at contact@arodos.com.'
                }[title];
                
                return (
                  <div key={title} className="group hover:bg-gray-50 p-4 rounded-xl transition-all duration-300" style={{ animationDelay: `${index * 100}ms` }}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-3 group-hover:text-red-600 transition-colors">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      {title}:
                    </h2>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-red-200 transition-colors pl-5">
                      <p className="text-gray-700 leading-relaxed">
                        {content?.includes('contact@arodos.com') ? (
                          content.split('contact@arodos.com').map((part, i) => (
                            <span key={i}>
                              {part}
                              {i === 0 && (
                                <a href="mailto:contact@arodos.com" className="text-red-600 hover:text-red-700 font-medium transition-colors">
                                  contact@arodos.com
                                </a>
                              )}
                            </span>
                          ))
                        ) : content}
                      </p>
                    </div>
                  </div>
                );
              })}
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