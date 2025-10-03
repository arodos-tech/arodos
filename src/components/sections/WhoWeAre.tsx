import { useScrollAnimation } from '../../hooks/useScrollAnimation';

export const WhoWeAre = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="who-we-are" ref={ref} className="pt-6 sm:pt-8 pb-4 sm:pb-6 bg-gray-100">
      <div className="mx-2 sm:mx-4">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 items-stretch bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-6 transform transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1 p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              <span className="text-red-500 italic">Who</span>
              <span className="text-black"> We Are</span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed font-jost">
              <p>
                Born in Assam, built with global ambition- Arodos Technologies was founded post-COVID to bring world-class digital solutions closer to home.
              </p>
              
              <p>
                Today, we partner with businesses, startups, and institutions across India, the US, Canada, and worldwide, delivering AI-driven ERP systems, custom web and mobile apps, and scalable digital services designed for growth and reliability.
              </p>
              
              <p>
                Every project- no matter its complexity or size- is crafted with precision, care, and attention to detail. This ensures that our clients receive top-notch, secure, and affordable solutions that truly transform the way they operate.
              </p>
              
              <p>
                With each partnership, we aim to make technology not just accessible, but innovative and dependable- with a commitment to delivering utmost customer satisfaction every step of the way.
              </p>
            </div>
          </div>
          
          {/* Right Column - Video */}
          <div className="order-1 lg:order-2 p-3 sm:p-4 md:p-6 bg-gray-50 rounded-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-40 sm:h-48 md:h-64 lg:h-full rounded-lg shadow-lg object-cover transition-all duration-300 md:hover:scale-105 md:hover:shadow-xl md:cursor-pointer"
            >
              <source src="/videos/work.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};