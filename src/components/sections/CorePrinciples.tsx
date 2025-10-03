import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const CorePrinciples = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activePrinciple, setActivePrinciple] = useState(1);

  const principles = [
    {
      number: 1,
      title: "Client-Centric Approach",
      description: "We put your goals at the heart of every solution, delivering experiences that exceed expectations.",
      icon: "/images/hands.png"
    },
    {
      number: 2,
      title: "Professional Excellence",
      description: "Every solution is crafted by skilled professionals, combining creativity, precision, and technical expertise.",
      icon: "/images/services/icons/1.png"
    },
    {
      number: 3,
      title: "Innovation & Impact",
      description: "We transform challenges into opportunities, delivering smarter, faster, and innovative solutions.",
      icon: "/images/services/icons/2.png"
    },
    {
      number: 4,
      title: "Quality & Assurance",
      description: "Each project is built to be secure, scalable, and future-ready, maintaining the highest quality standards.",
      icon: "/images/services/icons/3.png"
    },
    {
      number: 5,
      title: "Affordable & Transparent",
      description: "We deliver high-performance digital solutions without compromising on cost or clarity, making technology accessible for all.",
      icon: "/images/services/icons/4.png"
    }
  ];

  return (
    <section id="core-principles" ref={ref} className="py-8 sm:py-12 md:py-16 bg-white mx-2 sm:mx-4 rounded-3xl shadow-sm mb-2 md:mb-4">
      <div className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ 
            fontFamily: 'Mona Sans Expanded', 
            fontWeight: 500, 
            fontStyle: 'italic', 
            letterSpacing: '-1%', 
            textAlign: 'center' 
          }}>
            <span style={{ color: 'black', fontWeight: '900' }}>5</span>
            <span style={{ color: '#F40202' }}> Core Principles</span>
            <span style={{ color: 'black', fontWeight: '900' }}> that Keep Arodos Ahead</span>
          </h1>
        </div>
        
        {/* Interactive Slide Layout */}
        <div className="hidden md:flex h-[300px] md:h-[400px] xl:h-[500px] max-w-6xl mx-auto px-4">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className={`transition-all duration-500 ease-in-out ${
                principle.number === activePrinciple
                  ? 'w-1/2 bg-red-600 text-white rounded-lg shadow-lg p-6 xl:p-8 flex flex-col justify-center'
                  : 'w-1/8 bg-gray-100 hover:bg-gray-200 cursor-pointer flex items-center justify-center mx-1'
              }`}
              style={{
                width: principle.number === activePrinciple ? '40%' : '15%'
              }}
              onClick={() => setActivePrinciple(principle.number)}
            >
              {principle.number === activePrinciple && (
                <div className="flex items-center mb-4 xl:mb-6">
                  <img src={principle.icon} alt="hands" className="w-20 h-20 xl:w-28 xl:h-28 object-cover rounded-full mr-4 transition-all duration-500" />
                </div>
              )}
              {principle.number === activePrinciple ? (
                <>
                  <h2 className="text-xl xl:text-2xl font-bold mb-3 xl:mb-4 font-jost">
                    {principle.number}. {principle.title}
                  </h2>
                  <p className="text-base xl:text-lg leading-relaxed font-jost" style={{ lineHeight: '1.5' }}>
                    {principle.description}
                  </p>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center px-2 h-full text-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mt-4 mb-4">
                    <img src={principle.icon} alt="principle icon" className="w-6 h-6 object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <span className="text-gray-600 font-bold text-5xl xl:text-6xl mb-1 block text-center -mt-2 hover:scale-110 transition-all duration-300 cursor-pointer" style={{ fontFamily: 'Mona Sans Expanded', fontWeight: '900', textShadow: '3px 3px 6px rgba(75,85,99,0.2)', filter: 'drop-shadow(0 0 8px rgba(75,85,99,0.1))' }}>
                      {principle.number}
                    </span>
                    <span className="text-red-600 font-semibold text-xs xl:text-sm leading-tight tracking-wide font-jost text-center" style={{wordBreak: 'break-word', hyphens: 'auto', lineHeight: '1.2'}}>
                      {principle.title}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Mobile Layout */}
        <div className="md:hidden space-y-3 sm:space-y-4 px-4 max-w-4xl mx-auto">
          {principles.map((principle) => (
            <div
              key={principle.number}
              className={`p-4 sm:p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                principle.number === activePrinciple
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-gray-100 text-black hover:bg-gray-200'
              }`}
              onClick={() => setActivePrinciple(principle.number)}
            >
              <div className="flex items-center mb-3 sm:mb-4">
                {principle.number === activePrinciple && (
                  <img src={principle.icon} alt="principle icon" className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-full mr-3 sm:mr-4 transition-all duration-500" />
                )}
                <h3 className="text-base sm:text-lg md:text-xl font-bold flex-1 font-jost">
                  {principle.number}. {principle.title}
                </h3>
                <div className={`ml-2 transition-transform duration-300 ${
                  principle.number === activePrinciple ? 'rotate-180' : ''
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {principle.number === activePrinciple && (
                <p className="text-sm sm:text-base leading-relaxed pl-15 sm:pl-18 font-jost">
                  {principle.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};