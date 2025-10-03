import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const VisionMissionCards = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="pb-4 sm:pb-6 bg-gray-100">
      <div className="mx-2 sm:mx-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 items-stretch bg-white rounded-3xl transform transition-all duration-700 gap-2 sm:gap-4 lg:gap-6 p-2 sm:p-4 lg:p-6 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* Left Column - Our Vision */}
          <div className="relative flex flex-col justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            >
              <source src="/videos/our vision.mp4" type="video/mp4" />
            </video>
            
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            
            {/* Top overlay */}
            <div className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 p-3 sm:p-4 z-10">
              <div className="flex items-center mb-2 sm:mb-3">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-2 sm:mr-3"></span>
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold">Our Vision</h3>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed font-jost">
                To lead with innovation and deliver digital solutions built on quality and long-term value that don't just meet today's challenges but evolve to power tomorrow's opportunities.
              </p>
            </div>
          </div>
          
          {/* Right Column - Our Mission */}
          <div className="relative flex flex-col justify-center min-h-[200px] sm:min-h-[250px] md:min-h-[400px] lg:min-h-[500px] rounded-lg overflow-hidden">
            {/* Background Video */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute top-0 left-0 w-full h-full object-cover"
              style={{ zIndex: 1 }}
            >
              <source src="/videos/Our mission.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20" style={{ zIndex: 2 }}></div>
            
            {/* Bottom overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 sm:p-4" style={{ zIndex: 3 }}>
              <div className="flex items-center mb-2 sm:mb-3">
                <span className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full mr-2 sm:mr-3"></span>
                <h3 className="text-white text-base sm:text-lg md:text-xl font-bold">Our Mission</h3>
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed font-jost">
                We deliver tailored digital solutions crafted with precision and handled by experienced professionals to ensure measurable impact. As our clients grow, we grow- building lasting partnerships rooted in trust and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};