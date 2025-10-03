import { VisionMissionCards } from './VisionMissionCards';
import { CEOSection } from './CEOSection';
import { CorePrinciples } from './CorePrinciples';
import { OurServices } from './OurServices';
import { ClientTestimonials } from './ClientTestimonials';

export const VisionMission = () => {
  return (
    <>
      <VisionMissionCards />
      <CEOSection />
      <CorePrinciples />
      <OurServices />
      <ClientTestimonials />
    </>
  );

};