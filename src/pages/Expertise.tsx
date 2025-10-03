import { useNavigate } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import { Navigation } from '../components/ui/Navigation';

export const Expertise = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <section className="relative min-h-screen flex flex-col bg-gray-900 rounded-3xl mx-2 md:mx-4 mt-2 md:mt-4 mb-2 md:mb-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
      >
        <source src="/videos/ex.mp4" type="video/mp4" />
      </video>
      
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
      
      {/* Header */}
      <div className="relative z-10 flex justify-between items-start p-5">
        <div className="flex items-center gap-6">
          <Logo />
          <button
            onClick={handleGoBack}
            className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors duration-300"
            onTouchEnd={(e) => {
              const target = e.target as HTMLButtonElement;
              setTimeout(() => {
                target.style.color = 'white';
              }, 150);
            }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
        <div className="relative mt-5 mr-2">
          <Navigation />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-0 flex-1 flex flex-col items-center justify-center px-4 text-center md:px-8">
        <div className="mb-5 max-w-4xl">
          <h1 className="font-jost" style={{fontWeight: 800, fontSize: window.innerWidth < 768 ? '28px' : '60px', lineHeight: window.innerWidth < 768 ? '32px' : '56px', letterSpacing: '-1%', textAlign: 'center', verticalAlign: 'middle'}}>
            <span className="text-white" style={{fontWeight: 900, textShadow: '2px 2px 4px rgba(0,0,0,0.5)', letterSpacing: '1px'}}>Our </span>
            <span style={{color: '#F40202', fontWeight: 900, textShadow: '2px 2px 4px rgba(0,0,0,0.5), 1px 1px 2px rgba(244,2,2,0.3)', letterSpacing: '1px'}}>Expertise</span>
          </h1>
        </div>
        
        <p className="text-gray-300 text-base md:text-lg max-w-2xl mb-8 pt-5 leading-relaxed px-4 md:px-0 font-jost">
          Discover how we transform ideas into innovative digital solutions
        </p>
      </div>
    </section>
  );
};