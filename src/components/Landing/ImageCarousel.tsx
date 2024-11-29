import { EventCard } from "@components";
import { EventCardImageObject } from "@interfaces";
import { FC } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Props {
  imageData: EventCardImageObject[];
  isMobile: boolean;
}

const ImageCarousel: FC<Props> = ({ imageData, isMobile }) => {
  const zoomInProperties = {
    scale: 1, // how large image can transform
    duration: 5000, // image change duration
    transitionDuration: 300, // transition per images time
    infinity: true, // loop the transition to infinity
    canSwipe: true,

    // icons (will add them later)
    prevArrow: (
      <div className="ml-2 top-[15rem]">
        {/* <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} /> */}
      </div>
    ),
    nextArrow: (
      <div className="mr-2 top-[15rem]">
        {/* <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} /> */}
      </div>
    ),
  };

  return (
    <section className="w-full h-full">
      <Zoom {...zoomInProperties}>
        {imageData.map((each, index) => (
          <div key={index} className="flex justify-center items-start w-full h-full relative">
            <EventCard
              image={each.image}
              imageAlt={each.imageAlt}
              tag={each.tag}
              eventTitle={each.eventTitle}
              eventDescription={each.eventDescription}
              isMobile={isMobile}
            />
          </div>
        ))}
      </Zoom>
    </section>
  );
};

export default ImageCarousel;
