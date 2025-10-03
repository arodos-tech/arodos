import { useState } from 'react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page and store section to scroll to
      sessionStorage.setItem('scrollToSection', sectionId);
      window.location.href = '/';
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-6">
        <button onClick={() => handleNavClick('hero')} className="text-white hover:text-red-500 transition-colors">Home</button>
        <button onClick={() => handleNavClick('services')} className="text-white hover:text-red-500 transition-colors">Services</button>
        <button onClick={() => handleNavClick('core-principles')} className="text-white hover:text-red-500 transition-colors">Why Us?</button>
        <button onClick={() => handleNavClick('who-we-are')} className="text-white hover:text-red-500 transition-colors">About Us</button>
        <button onClick={() => handleNavClick('contact-us')} className="text-white hover:text-red-500 transition-colors">Contact Us</button>
      </nav>

      {/* Stylish Mobile Hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden relative w-8 h-8 flex items-center justify-center rounded-lg bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
        style={{ zIndex: 100000 }}
      >
        <div className="w-4 h-4 flex flex-col justify-center items-center">
          <span className={`block h-0.5 w-4 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-0.5' : 'mb-0.5'}`}></span>
          <span className={`block h-0.5 w-4 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'mb-0.5'}`}></span>
          <span className={`block h-0.5 w-4 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
        </div>
      </button>

      {/* Stylish Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 md:hidden" style={{ zIndex: 999999 }}>
          <div className="absolute inset-0 bg-black bg-opacity-20 backdrop-blur-sm" onClick={() => setIsOpen(false)}></div>
          <div className="absolute top-16 right-4 w-36 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-2xl" style={{ zIndex: 1000000, boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)' }}>
            <div className="p-3">
              <nav className="flex flex-col space-y-2">
                <button 
                  onClick={() => handleNavClick('hero')} 
                  className="text-white text-sm font-medium hover:text-red-500 transition-all duration-300 text-left py-2 px-2 rounded hover:bg-white hover:bg-opacity-10 relative"
                  style={{ zIndex: 1000001 }}
                >
                  Home
                </button>
                <button 
                  onClick={() => handleNavClick('services')} 
                  className="text-white text-sm font-medium hover:text-red-500 transition-all duration-300 text-left py-2 px-2 rounded hover:bg-white hover:bg-opacity-10 relative"
                  style={{ zIndex: 1000001 }}
                >
                  Services
                </button>
                <button 
                  onClick={() => handleNavClick('core-principles')} 
                  className="text-white text-sm font-medium hover:text-red-500 transition-all duration-300 text-left py-2 px-2 rounded hover:bg-white hover:bg-opacity-10 relative"
                  style={{ zIndex: 1000001 }}
                >
                  Why Us?
                </button>
                <button 
                  onClick={() => handleNavClick('who-we-are')} 
                  className="text-white text-sm font-medium hover:text-red-500 transition-all duration-300 text-left py-2 px-2 rounded hover:bg-white hover:bg-opacity-10 relative"
                  style={{ zIndex: 1000001 }}
                >
                  About Us
                </button>
                <button 
                  onClick={() => handleNavClick('contact-us')} 
                  className="text-white text-sm font-medium hover:text-red-500 transition-all duration-300 text-left py-2 px-2 rounded hover:bg-white hover:bg-opacity-10 relative"
                  style={{ zIndex: 1000001 }}
                >
                  Contact Us
                </button>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};