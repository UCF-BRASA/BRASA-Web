import { EventCardImageObject } from "@interfaces";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface Props extends EventCardImageObject {
  isMobile: boolean;
}

const GridSection: FC<Props> = ({
  image,
  imageAlt,
  tag,
  eventTitle,
  eventDescription,
  isMobile,
}) => {
  return (
    <section>
      {isMobile ? (
        <div className="flex flex-col w-[22rem] h-[32rem] bg-white rounded-[2rem] select-none">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-[20rem] mt-5 overflow-hidden">
              {/* Image needs to be a bit less than 2:3 */}
              <Image
                src={image}
                alt={imageAlt}
                sizes="100vw"
                className="rounded-[2rem] overflow-hidden"
              />
            </div>
          </div>

          <div className="absolute w-32 h-[2.5rem] bg-main-brasa-yellow mt-7 ml-8 rounded-[2rem]">
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semi-bold text-base text-black break-normal">{tag}</p>
            </div>
          </div>

          <div className="w-full mt-4">
            <h2 className="font-bold text-[1.6rem] grow text-black text-center">{eventTitle}</h2>
          </div>
          <p className="font-medium text-base text-black/60 mt-6 pl-6 px-4 break-normal">
            {eventDescription}
          </p>
          <div className="mt-16 mb-4 h-32 w-full flex justify-center items-center">
            <div className="w-[90%] h-full text-base rounded-full bg-blue-500 text-white font-medium">
              <Link
                className="flex justify-center items-center w-full h-full"
                href="/"
                scroll={false}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col w-[25rem] h-[32rem] bg-white rounded-[2rem] select-none">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-[23rem] h-[230px] mt-4 overflow-hidden">
              {/* Image needs to be a bit less than 2:3 */}
              <Image
                src={image}
                alt={imageAlt}
                sizes="100vw"
                className="rounded-[2rem] overflow-hidden"
              />
            </div>
          </div>

          <div className="absolute w-32 h-[2.5rem] bg-main-brasa-yellow mt-6 ml-8 rounded-[2rem]">
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semi-bold text-base text-black break-normal">{tag}</p>
            </div>
          </div>

          <div className="w-full mt-4">
            <h2 className="font-bold text-[1.6rem] grow text-black text-center">{eventTitle}</h2>
          </div>
          <p className="font-medium text-base text-black/60 mt-6 px-4 break-normal">
            {eventDescription}
          </p>
          <div className="mt-12 mb-4 h-32 w-full flex justify-center items-center">
            <div className="w-[90%] h-full text-base rounded-full bg-blue-500 text-white font-medium">
              <Link className="flex justify-center items-center w-full h-full" href="/events">
                View Details
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GridSection;
