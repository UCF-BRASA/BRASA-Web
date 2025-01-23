import Image, { StaticImageData } from "next/image";
import { type FC } from "react";

interface Props {
  image: StaticImageData;
  imageAlt: string;
  date: string;
  driveLink: string;
  isMobile: boolean;
  eventDesc: string;
}

const GalleryBox: FC<Props> = ({ imageAlt, image, isMobile, date, driveLink, eventDesc }) => {
  const handleClick = () => {
    window.open(driveLink, "_blank");
  };

  const isHovered = true;

  return (
    <section>
      {isMobile ? (
        <div onClick={handleClick} className="w-[22rem] mb-4 pt-10">
          <div className="h-[5.5rem] w-full bg-main-brasa-blue rounded-t-[2rem] text-center">
            <p className="text-white text-3xl justify-center text-center pt-7 font-bold">
              {" "}
              {date}{" "}
            </p>
          </div>
          <Image
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="h-[22rem] w-full object-cover shadow-2xl"
          />
          <div className="h-[5.5rem] w-full bg-main-brasa-blue rounded-b-[2rem] text-center">
            <p className="text-white text-3xl justify-center text-center pt-7 font-bold">
              {eventDesc}
            </p>
          </div>
          <div className="h-[6rem] w-full pl-[0.5rem] pt-[0.5rem]"></div>
        </div>
      ) : (
        <div onClick={handleClick} style={{ cursor: "pointer" }} className=" w-[28rem] mb-8 pt-20">
          <div className="h-[5.5rem] w-full bg-main-brasa-blue rounded-t-[2rem] text-center">
            <p className="text-white text-3xl justify-center text-center pt-7 font-bold">
              {" "}
              {date}{" "}
            </p>
          </div>
          <Image
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="h-[28rem] w-full object-cover shadow-2xl"
          />
          <div className="h-[5.5rem] w-full bg-main-brasa-blue rounded-b-[2rem] text-center">
            <p className="text-white text-3xl justify-center text-center pt-7 font-bold">
              {eventDesc}
            </p>
          </div>
          <div className="h-[6rem] w-full pl-[0.5rem] pt-[0.5rem]"></div>
        </div>
      )}
    </section>
  );
};

export default GalleryBox;
