// import { FC } from "react";
// import { SlideshowRef, Zoom, ZoomProps } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

// interface Props {
//   overrideZoomProps?: Pick<
//     ZoomProps,
//     | "scale"
//     | "children"
//     | "duration"
//     | "transitionDuration"
//     | "defaultIndex"
//     | "indicators"
//     | "prevArrow"
//     | "nextArrow"
//     | "arrows"
//     | "autoplay"
//     | "infinite"
//     | "pauseOnHover"
//     | "canSwipe"
//     | "easing"
//     | "cssClass"
//     | "onStartChange"
//     | "onChange"
//   > &
//     React.RefAttributes<SlideshowRef>;
//   // imageData: any[];
//   children?: React.ReactNode;
// }

// const ImageCarousel: FC<Props> = ({ children, overrideZoomProps }) => {
//   const zoomInProperties = {
//     ...overrideZoomProps,
//     scale: 1, // how large image can transform
//     duration: 3000, // image change duration
//     transitionDuration: 300, // transition per images time
//     infinity: true, // loop the transition to infinity
//     canSwipe: true,

//     // icons (will add them later)
//     prevArrow: (
//       <div />
//       // <div className="ml-2 top-[15rem]">
//       //   {/* <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} /> */}
//       // </div>
//     ),
//     nextArrow: (
//       <div />
//       // <div className="mr-2 top-[15rem]">
//       //   {/* <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} /> */}
//       // </div>
//     ),
//   };

//   return (
//     <section className="w-full h-full">
//       <Zoom {...zoomInProperties}>{children}</Zoom>
//     </section>
//   );

//   /* <Slide {...zoomInProperties}>{children}</Slide> */

//   // return (
//   //   <section className="w-full h-full">
//   //     {/* <Slider {...zoomInProperties}>{children}</Slider> */}
//   //   </section>
//   // );

//   // return (
//   //   <section className="w-full h-full">
//   //     <div className="w-auto h-auto">
//   //       <Zoom {...zoomInProperties}>
//   //         {imageData.map((each, index) => {
//   //           console.log(each);
//   //           return (
//   //             <div key={index} className="flex flex-col items-center justify-center">
//   //               <p className="text-white">{each.nani}</p>
//   //             </div>
//   //           );
//   //         })}
//   //       </Zoom>
//   //     </div>
//   //   </section>
//   // );
// };

// export default ImageCarousel;

import { FC } from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

interface Props {
  overrideZoomProps?: any;
  // imageData: any[];
  children?: React.ReactNode;
}

const ImageCarousel: FC<Props> = ({ children, overrideZoomProps }) => {
  const zoomInProperties = {
    duration: 3000, // image change duration
    transitionDuration: 300, // transition per images time
    infinity: true, // loop the transition to infinity
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,

    // icons (will add them later)
    // prevArrow: (
    //   <div />
    //   // <div className="ml-2 top-[15rem]">
    //   //   {/* <FontAwesomeIcon icon={faArrowLeft} style={{ color: "#ffffff" }} /> */}
    //   // </div>
    // ),
    // nextArrow: (
    //   <div />
    //   // <div className="mr-2 top-[15rem]">
    //   //   {/* <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} /> */}
    //   // </div>
    // ),
  };

  // return <section className="w-full h-full">{children}</section>;

  return (
    <section className="w-full h-full">
      {/* <Zoom {...zoomInProperties}>{children}</Zoom> */}
      <Slide {...zoomInProperties}>{children}</Slide>
    </section>
  );
};

export default ImageCarousel;
