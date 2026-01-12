import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Props {
  children?: React.ReactNode;
  isMobile?: boolean; // Optional for backward compatibility
}

const ImageCarousel: FC<Props> = ({ children, isMobile }) => {
  // Use CSS media queries to determine arrows - fallback to isMobile for compatibility
  const showArrows = typeof window !== 'undefined' ? window.innerWidth >= 1024 : !isMobile;
  
  const arrows = showArrows
    ? {
        prevArrow: (
          <div className="ml-[-4.5rem]">
            <div className="bg-white h-8 w-8 rounded flex justify-center items-center">
              <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#008cff" }} />
            </div>
          </div>
        ),
        nextArrow: (
          <div className="pr-10">
            <div className="bg-white h-8 w-8 rounded flex justify-center items-center">
              <FontAwesomeIcon icon={faArrowRight} style={{ color: "#008cff" }} />
            </div>
          </div>
        ),
      }
    : {
        prevArrow: <div />,
        nextArrow: <div />,
      };

  const desktopSlideProps = {
    ...arrows,
    duration: 3000, // image change duration
    transitionDuration: 600, // transition per images time
    infinity: true, // loop the transition to infinity
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const mobileZoomProps = {
    ...arrows,
    scale: 1,
    duration: 3000, // image change duration
    transitionDuration: 300, // transition per images time
    infinity: true, // loop the transition to infinity
    canSwipe: true,
  };

  return (
    <>
      {/* Mobile/Tablet: Zoom carousel */}
      <section className="w-full h-full lg:hidden">
        <Zoom {...mobileZoomProps}>{children}</Zoom>
      </section>
      
      {/* Desktop: Slide carousel with padding */}
      <section className="hidden lg:block w-full h-full pl-[6.5rem]">
        <Slide {...desktopSlideProps}>{children}</Slide>
      </section>
    </>
  );
};

export default ImageCarousel;
