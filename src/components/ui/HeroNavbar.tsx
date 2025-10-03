import { Logo } from './Logo';
import { Navigation } from './Navigation';

export const HeroNavbar = () => {
  return (
    <div className="relative z-10 flex justify-between items-start p-5">
      <div className="flex items-center gap-6">
        <Logo />
        {/* Rating Section */}
        <div className="hidden md:flex flex-col">
          <div className="flex items-center mb-1">
            {[...Array(4)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-sm">★</span>
            ))}
            <span className="text-yellow-400 text-sm opacity-70">★</span>
            <span className="text-white ml-2 text-xs">4.7</span>
          </div>
          <div className="flex items-center">
            <span className="text-gray-300 text-xs font-jost">Trusted by 100+ Happy Customers</span>
            <div className="ml-2">
              <img src="/images/ppl.png" alt="Users" className="w-8 h-4" />
            </div>
          </div>
        </div>
      </div>
      <div className="relative mt-5 mr-2">
        <Navigation />
      </div>
    </div>
  );
};