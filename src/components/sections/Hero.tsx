import { HeroNavbar } from '../ui/HeroNavbar';

export const Hero = () => {

  return (
    <section id="hero" className="relative min-h-screen flex flex-col bg-gray-900 rounded-3xl mx-2 md:mx-4 mt-2 md:mt-4 mb-2 md:mb-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
      
      {/* Header */}
      <HeroNavbar />
      
      {/* Mobile Rating Section */}
      <div className="relative z-0 flex md:hidden flex-col items-center mt-6">
        <div className="flex items-center mb-2">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-yellow-400 text-xl">★</span>
          ))}
          <span className="text-yellow-400 text-xl opacity-70">★</span>
          <span className="text-white ml-2 text-sm">4.7</span>
        </div>
        <div className="flex items-center">
          <span className="text-gray-300 text-sm font-jost">Trusted by 100+ Happy Customers</span>
          <div className="ml-3">
            <img src="/images/ppl.png" alt="Users" className="w-12 h-6" />
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-0 flex-1 flex flex-col items-center justify-center px-4 text-center md:px-8">
        {/* Headline */}
        <div className="mb-5 max-w-4xl">
          <h1 className="font-jost" style={{fontWeight: 800, fontSize: window.innerWidth < 768 ? '28px' : '60px', lineHeight: window.innerWidth < 768 ? '32px' : '56px', letterSpacing: '-1%', textAlign: 'center', verticalAlign: 'middle'}}>
            <span className="text-white" style={{fontWeight: 400, textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px'}}>Build </span>
            <span 
              style={{color: '#F40202', fontWeight: 400, textShadow: '2px 2px 4px rgba(0,0,0,0.5), 1px 1px 2px rgba(244,2,2,0.3)', letterSpacing: '1px', transition: 'transform 0.3s ease', cursor: 'pointer', display: 'inline-block'}}
              onMouseEnter={(e) => (e.target as HTMLSpanElement).style.transform = 'scale(1.1)'}
              onMouseLeave={(e) => (e.target as HTMLSpanElement).style.transform = 'scale(1)'}
              onTouchEnd={(e) => (e.target as HTMLSpanElement).style.transform = 'scale(1)'}
            >Innovative</span>
            <span className="text-white" style={{fontWeight: 400, textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px'}}> Solutions at </span>
            <span 
              style={{color: 'white', fontWeight: 900, textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px', transition: 'all 0.3s ease', cursor: 'pointer', display: 'inline-block'}}
              onMouseEnter={(e) => {
                const target = e.target as HTMLSpanElement;
                target.style.color = '#F40202';
                target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLSpanElement;
                target.style.color = 'white';
                target.style.transform = 'scale(1)';
              }}
              onTouchEnd={(e) => {
                const target = e.target as HTMLSpanElement;
                target.style.color = 'white';
                target.style.transform = 'scale(1)';
              }}
            >Affordable Cost</span>
          </h1>
        </div>
        
        {/* Subtext */}
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-8 pt-5 leading-relaxed px-4 md:px-0 font-jost">
          Trusted Globally for Reliable, High-Performance Web, Mobile, ERP, CRM, and AI 
          Development- Delivered on Time, Within budget, & Built to Last.
        </p>
        
        {/* CTA Button - Commented out for now */}
        {/* <div className="mb-8">
          <button
            onClick={handleExploreExpertise}
            className="bg-white font-jost px-6 py-3 rounded-lg transition-all duration-300 font-medium active:text-white"
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
              target.style.backgroundColor = 'white';
              target.style.color = '#870000';
              target.style.transform = 'scale(1)';
            }}
          >
            Explore Our Expertise →
          </button>
        </div> */}
        
        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mt-5 w-full max-w-2xl px-4">
          <div className="text-center cursor-pointer">
            <div className="text-white text-3xl sm:text-4xl font-bold transition-colors duration-300 font-jost" onMouseEnter={(e) => (e.target as HTMLDivElement).style.color = '#F40202'} onMouseLeave={(e) => (e.target as HTMLDivElement).style.color = 'white'} onTouchEnd={(e) => (e.target as HTMLDivElement).style.color = 'white'}>98%</div>
            <div className="text-gray-300 text-base sm:text-lg font-bold transition-colors duration-300 font-jost" onMouseEnter={(e) => (e.target as HTMLDivElement).style.color = '#F40202'} onMouseLeave={(e) => (e.target as HTMLDivElement).style.color = '#d1d5db'} onTouchEnd={(e) => (e.target as HTMLDivElement).style.color = '#d1d5db'}>On-Time Delivery</div>
          </div>
          <div className="text-center cursor-pointer">
            <div className="text-white text-3xl sm:text-4xl font-bold transition-colors duration-300 font-jost" onMouseEnter={(e) => (e.target as HTMLDivElement).style.color = '#F40202'} onMouseLeave={(e) => (e.target as HTMLDivElement).style.color = 'white'} onTouchEnd={(e) => (e.target as HTMLDivElement).style.color = 'white'}>75</div>
            <div className="text-gray-300 text-base sm:text-lg font-bold transition-colors duration-300 font-jost" onMouseEnter={(e) => (e.target as HTMLDivElement).style.color = '#F40202'} onMouseLeave={(e) => (e.target as HTMLDivElement).style.color = '#d1d5db'} onTouchEnd={(e) => (e.target as HTMLDivElement).style.color = '#d1d5db'}>Apps Launched</div>
          </div>
          <div className="text-center cursor-pointer">
            <div className="text-white text-3xl sm:text-4xl font-bold transition-colors duration-300 font-jost" onMouseEnter={(e) => (e.target as HTMLDivElement).style.color = '#F40202'} onMouseLeave={(e) => (e.target as HTMLDivElement).style.color = 'white'} onTouchEnd={(e) => (e.target as HTMLDivElement).style.color = 'white'}>120+</div>
            <div className="text-gray-300 text-base sm:text-lg font-bold transition-colors duration-300 font-jost" onMouseEnter={(e) => (e.target as HTMLDivElement).style.color = '#F40202'} onMouseLeave={(e) => (e.target as HTMLDivElement).style.color = '#d1d5db'} onTouchEnd={(e) => (e.target as HTMLDivElement).style.color = '#d1d5db'}>Projects Completed</div>
          </div>
        </div>
      </div>
    </section>
  );
};