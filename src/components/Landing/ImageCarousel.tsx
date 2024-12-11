import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Slide, Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Props {
  children?: React.ReactNode;
  isMobile: boolean;
}

const ImageCarousel: FC<Props> = ({ children, isMobile }) => {
  const arrows = isMobile
    ? {
        prevArrow: <div />,
        nextArrow: <div />,
      }
    : {
        prevArrow: (
          <div className="ml-[-5.5rem]">
            <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#000000" }} />
          </div>
        ),
        nextArrow: (
          <div className="pr-20">
            <FontAwesomeIcon icon={faArrowRight} style={{ color: "#000000" }} />
          </div>
        ),
      };

  const slideProps = {
    ...arrows,
    duration: 3000, // image change duration
    transitionDuration: 600, // transition per images time
    infinity: true, // loop the transition to infinity
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const zoomInProperties = {
    ...arrows,
    scale: 1,
    duration: 3000, // image change duration
    transitionDuration: 300, // transition per images time
    infinity: true, // loop the transition to infinity
  };

  return (
    <>
      {isMobile ? (
        <section className="w-full h-full">
          <Zoom {...zoomInProperties}>{children}</Zoom>
        </section>
      ) : (
        <section className="w-full h-full pl-32">
          <Slide {...slideProps}>{children}</Slide>
        </section>
      )}
    </>
  );
};

export default ImageCarousel;
