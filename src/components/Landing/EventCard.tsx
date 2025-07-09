import { EventCardImageObject } from "@interfaces";
import Image from "next/image";
import { type FC } from "react";

interface Props extends EventCardImageObject {
  isMobile: boolean;
}

const EventCard: FC<Props> = ({ image, imageAlt, tag, eventTitle, eventDescription, isMobile }) => {
  return (
    <section>
      {isMobile ? (
        <div className="h-[30rem] flex flex-col w-[22rem] bg-white rounded-[2rem] select-none">
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

          {/* <div className="absolute w-32 h-[2.5rem] bg-main-brasa-yellow mt-7 ml-8 rounded-[2rem]">
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semi-bold text-base text-black break-normal">{tag}</p>
            </div>
          </div> */}

          <div className="w-full mt-4">
            <h2 className="font-bold text-[1.6rem] grow text-black text-center">{eventTitle}</h2>
          </div>
          <p className="font-medium text-base text-black/60 mt-6 pl-6 px-4 break-normal mb-10">
            {eventDescription}
          </p>
          {/* <div className="mt-16 h-32 w-full flex justify-center items-center">
            <div className="w-[90%] h-[50%] text-base rounded-full bg-blue-500 text-white font-medium">
              <Link className="flex justify-center items-center w-full h-full" href="/events">
                View Details
              </Link>
            </div>
          </div> */}
        </div>
      ) : (
        <div className="relative h-[32rem] flex flex-col w-[25rem] bg-white rounded-[2rem] select-none">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="w-[23rem] h-[230px] mt-4 overflow-hidden ">
              {/* Image needs to be a bit less than 2:3 */}
              <Image
                src={image}
                alt={imageAlt}
                // priority
                sizes="100vw"
                className="rounded-[2rem] overflow-hidden object-cover w-full h-full"
              />
            </div>
          </div>

          {/* <div className="absolute w-32 h-[2.5rem] bg-main-brasa-yellow mt-6 ml-8 rounded-[2rem]">
            <div className="w-full h-full flex justify-center items-center">
              <p className="font-semi-bold text-base text-black break-normal">{tag}</p>
            </div>
          </div> */}

          <div className="w-full mt-4">
            <h2 className="font-bold text-[1.6rem] grow text-black text-center">{eventTitle}</h2>
          </div>
          <p className="text-event-card font-medium text-base text-black/60 mt-6 px-6">
            {eventDescription}
          </p>
          <div className="mt-12 pb-5 w-full flex justify-center items-center">
            {/* <div className="w-[90%] py-5 text-base rounded-full bg-blue-500 text-white font-medium hover:bg-blue-400 transition duration-200">
              <Link className="flex justify-center items-center w-full h-full" href="/events">
                View Details
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default EventCard;
