import { EventCardImageObject } from "@interfaces";
import Image from "next/image";
import { type FC } from "react";

interface Props extends EventCardImageObject {
  isMobile?: boolean; // Optional for backward compatibility
}

const EventCard: FC<Props> = ({ image, imageAlt, eventTitle, eventDescription }) => {
  return (
    <section className="
      /* Base: Compact mobile card layout */
      h-[30rem] flex flex-col w-[22rem] bg-white rounded-[2rem] select-none
      /* Desktop: Expanded card layout */
      lg:relative lg:h-[32rem] lg:w-[25rem]
    ">
      {/* Image Section - Responsive sizing */}
      <div className="flex justify-center">
        <div className="
          /* Mobile: Smaller image container */
          w-[20rem] mt-5 overflow-hidden
          /* Desktop: Larger image with fixed height */
          lg:w-[23rem] lg:h-[230px] lg:mt-4
        ">
          <Image
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="
              /* Base: Rounded image */
              rounded-[2rem] overflow-hidden
              /* Desktop: Full cover with object-fit */
              lg:object-cover lg:w-full lg:h-full
            "
          />
        </div>
      </div>

      {/* Title Section */}
      <div className="w-full mt-4">
        <h2 className="font-bold text-[1.6rem] grow text-black text-center">{eventTitle}</h2>
      </div>
      
      {/* Description Section - Different padding for mobile/desktop */}
      <p className="
        /* Mobile: Side padding with bottom margin */
        font-medium text-base text-black/60 mt-6 pl-6 px-4 break-normal mb-10
        /* Desktop: Different padding class and spacing */
        lg:text-event-card lg:px-6 lg:mb-0 lg:mt-6
      ">
        {eventDescription}
      </p>
      
      {/* Desktop-only bottom spacing */}
      <div className="hidden lg:block mt-12 pb-5 w-full"></div>
    </section>
  );
};

export default EventCard;
