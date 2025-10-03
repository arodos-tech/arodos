

const testimonials = [
  {
    quote: "Arodos delivered our MVP on time with exceptional quality. Their agile team truly understood our startup vision and executed flawlessly.",
    client: "Deepankar Bhattacharjya\nCo-Founder & COO, ZEMIDI",
    logo: "Z",
    rating: "★★★★☆",
    image: "/images/clients/deepankar.png"
  },
  {
    quote: "Arodos built a robust backend for our vehicle tracking system — scalable, secure, and API-first. They're our go-to engineering partner now",
    client: "David Pierce\nDirector NA Sales | POWWR",
    logo: "P",
    rating: "★★★★☆",
    image: "/images/clients/david.png"
  }
];

export const TestimonialSlider = () => {
  return (
    <div className="max-w-6xl mx-auto relative px-2 sm:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 min-h-[280px] sm:min-h-[320px] md:min-h-[350px] relative">
            {/* Quote icons */}
            <img src="/images/clients/open.png" alt="Quote open" className="absolute top-3 right-3 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            <img src="/images/clients/close.png" alt="Quote close" className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 opacity-50" />
            <div className="flex flex-col items-start text-left h-full">
              {/* Client Image */}
              <div className="flex-shrink-0 mb-3 sm:mb-4">
                <div className={`${testimonial.client.includes('Deepankar') ? 'w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28' : 'w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'} bg-white overflow-hidden rounded-full shadow-md`}>
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.client} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-gray-800 text-lg sm:text-xl md:text-2xl font-bold flex items-center justify-center h-full">
                      {testimonial.logo}
                    </span>
                  )}
                </div>
              </div>
              
              {/* Rating */}
              {testimonial.rating && (
                <div className="flex items-center text-sm sm:text-base md:text-lg mb-2 sm:mb-3 ml-2 sm:ml-4">
                  {testimonial.client.includes('Deepankar') ? (
                    <>
                      {[1,2,3,4].map(star => (
                        <span key={star} className="text-yellow-400">★</span>
                      ))}
                      <span 
                        className="relative inline-block"
                        style={{
                          background: 'linear-gradient(90deg, #fbbf24 50%, #d1d5db 50%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        ★
                      </span>
                    </>
                  ) : (
                    <span className="text-yellow-400">{testimonial.rating}</span>
                  )}
                </div>
              )}
              
              {/* Quote */}
              <blockquote className="text-sm sm:text-base md:text-lg text-gray-800 mb-3 sm:mb-4 leading-relaxed flex-1 flex items-center italic">
                <span>{testimonial.quote}</span>
              </blockquote>
              
              {/* Client Name */}
              <cite className="text-gray-900 whitespace-pre-line">
                <span className="font-medium text-sm sm:text-base md:text-lg font-serif">{testimonial.client.split('\n')[0]}</span>
                <br />
                <span className="font-light text-xs sm:text-sm md:text-base">{testimonial.client.split('\n')[1]}</span>
              </cite>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};