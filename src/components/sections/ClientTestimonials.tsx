import { TestimonialSlider } from '../ui/TestimonialSlider';

export const ClientTestimonials = () => {
  return (
    <section id="clients-say" className="py-8 sm:py-12 md:py-20" style={{ backgroundColor: '#F5F5F5' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-16">
          <h2 className="mb-3 sm:mb-4 md:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ fontFamily: 'Mona Sans Expanded', fontWeight: 500, fontStyle: 'italic', letterSpacing: '-1%', textAlign: 'center' }}>
            <span className="text-black" style={{ fontWeight: 900, fontStyle: 'normal' }}>What Our </span>
            <span className="text-red-500">Clients</span>
            <span className="text-black" style={{ fontWeight: 900, fontStyle: 'normal' }}> Say</span>
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-5xl mx-auto leading-relaxed px-4 font-jost">
            Transforming visionary ideas into powerful, user-centric digital solutions that drive innovation,<br className="hidden md:block" />
            enhance operational efficiency, and accelerate sustainable business growth in an ever-evolving digital landscape.
          </p>
        </div>
        
        {/* Testimonial Slider */}
        <TestimonialSlider />
      </div>
    </section>
  );
};