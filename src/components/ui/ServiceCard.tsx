interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  imagePlaceholder: string;
  imageDescription: string;
  layout: 'blue-left' | 'blue-right';
  imageUrl?: string;
  blurAmount?: number;
}

export const ServiceCard = ({ 
  number, 
  title, 
  description, 
  imagePlaceholder, 
  imageDescription, 
  layout,
  imageUrl,
  blurAmount = 0.8
}: ServiceCardProps) => {
  const isBlueLeft = layout === 'blue-left';
  
  const BlueSection = (
    <div className="p-3 sm:p-4 md:p-6 flex flex-col relative min-h-[200px] sm:min-h-[250px] md:min-h-[350px]" style={{ backgroundColor: '#EAEAEA' }}>
      <div className="flex-1 flex flex-col justify-center px-1 sm:px-2 py-1">
        <div className="mb-2 md:mb-3">
          <span className="drop-shadow-lg text-3xl sm:text-4xl md:text-5xl lg:text-6xl block" style={{ color: '#F40202', fontFamily: 'Mona Sans Expanded', fontWeight: 300, fontStyle: 'Light', letterSpacing: '-1%', verticalAlign: 'middle' }}>{number}</span>
        </div>
        <h3 className="text-black mb-2 md:mb-3 text-left drop-shadow-md text-lg sm:text-xl md:text-2xl" style={{ fontFamily: 'Mona Sans Expanded', fontWeight: 600, fontStyle: 'SemiBold', letterSpacing: '-1%', verticalAlign: 'middle' }}>
          {title}
        </h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg text-left overflow-hidden drop-shadow-sm leading-relaxed font-jost">
          {description}
        </p>
      </div>
    </div>
  );

  const ImageSection = (
    <div className="bg-white/30 backdrop-blur-sm flex items-center justify-center p-2 sm:p-3 md:p-6 min-h-[120px] sm:min-h-[150px] md:min-h-[350px] relative overflow-hidden transition-transform duration-500 hover:scale-110 cursor-pointer" style={{
      backgroundImage: imageUrl ? `url("${imageUrl}")` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: `blur(${blurAmount}px)`
    }}>
      <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
      {!imageUrl && (
        <div className="text-red-600/90 text-center z-10">
          <div className="text-xl sm:text-2xl md:text-5xl mb-1 sm:mb-2 drop-shadow-lg">{imagePlaceholder}</div>
          <p className="text-xs sm:text-sm md:text-base drop-shadow-md">{imageDescription}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl overflow-hidden mt-3 sm:mt-4 md:mt-6 border border-white/30 mx-2 sm:mx-0" style={{ backgroundColor: '#EAEAEA' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[250px] sm:min-h-[300px] md:h-[350px]">
        {isBlueLeft ? (
          <>
            {BlueSection}
            {ImageSection}
          </>
        ) : (
          <>
            <div className="order-2 md:order-1">{ImageSection}</div>
            <div className="order-1 md:order-2">{BlueSection}</div>
          </>
        )}
      </div>
    </div>
  );
};