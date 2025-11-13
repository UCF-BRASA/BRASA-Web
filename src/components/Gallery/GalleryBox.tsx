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

  return (
    <section>
      {isMobile ? (
        <div
          onClick={handleClick}
          className="w-[16rem] sm:w-[18rem] mb-4 hover:cursor-pointer transition-transform hover:scale-[1.02]"
        >
          {/* Top Bar */}
          <div className="h-[4rem] w-full bg-main-brasa-blue rounded-t-[1.5rem] text-center">
            <p className="text-white text-2xl pt-3 font-bold">{date}</p>
          </div>

          {/* Image */}
          <Image
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="h-[14rem] w-full object-cover shadow-xl"
          />

          {/* Bottom Bar */}
          <div className="h-[4rem] w-full bg-main-brasa-blue rounded-b-[1.5rem] text-center">
            <p className="text-white text-2xl pt-3 font-bold">{eventDesc}</p>
          </div>

        </div>
      ) : (
        <div
          onClick={handleClick}
          className="w-[20rem] mb-8 hover:cursor-pointer transition-transform hover:scale-[1.03]"
        >
          {/* Top Bar */}
          <div className="h-[5rem] w-full bg-main-brasa-blue rounded-t-[2rem] text-center">
            <p className="text-white text-3xl pt-7 font-bold">{date}</p>
          </div>

          {/* Image */}
          <Image
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="h-[20rem] w-full object-cover shadow-2xl"
          />

          {/* Bottom Bar */}
          <div className="h-[5.5rem] w-full bg-main-brasa-blue rounded-b-[2rem] text-center">
            <p className="text-white text-3xl pt-7 font-bold">{eventDesc}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GalleryBox;
