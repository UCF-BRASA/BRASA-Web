import { FC, ReactNode } from "react";
import { SlideshowRef, Zoom, ZoomProps } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Props {
  overrideZoomProps?: Pick<
    ZoomProps,
    | "scale"
    | "children"
    | "duration"
    | "transitionDuration"
    | "defaultIndex"
    | "indicators"
    | "prevArrow"
    | "nextArrow"
    | "arrows"
    | "autoplay"
    | "infinite"
    | "pauseOnHover"
    | "canSwipe"
    | "easing"
    | "cssClass"
    | "onStartChange"
    | "onChange"
  > &
    React.RefAttributes<SlideshowRef>;
  children: ReactNode;
}

const ImageCarousel: FC<Props> = ({ children, overrideZoomProps }) => {
  const zoomInProperties = {
    ...overrideZoomProps,
    scale: 1, // how large image can transform
    duration: 1000, // image change duration
    transitionDuration: 300, // transition per images time
    infinity: true, // loop the transition to infinity
    canSwipe: true,

    // icons (will add them later)
    // prevArrow: (
    //   <div className="ml-2 top-[15rem]">
    //     {/* <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} /> */}
    //   </div>
    // ),
    // nextArrow: (
    //   <div className="mr-2 top-[15rem]">
    //     {/* <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} /> */}
    //   </div>
    // ),
  };

  return (
    <section className="w-full h-full">
      <Zoom {...zoomInProperties}>{children}</Zoom>
    </section>
  );
};

export default ImageCarousel;
