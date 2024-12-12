import { faCalendar, faInfo, faLocationPin, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UpcomingEventsData } from "@interfaces";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface Props extends UpcomingEventsData {
  isMobile: boolean;
}

const UpcomingEvents: FC<Props> = ({
  image,
  eventName,
  location,
  date,
  isMobile,
  isPaid,
  eventType,
}) => {
  // Function to open Google Maps with the specified location
  const openGoogleMaps = (): void => {
    const encodedLocation = encodeURIComponent(location);
    const mapsUrl = `https://www.google.com/maps?q=${encodedLocation}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <section>
      {isMobile ? (
        <div className="h-full w-full flex justify-center items-center mb-10">
          <div className="flex flex-col w-[22rem] px-4 bg-gray-200 rounded-lg shadow-md">
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="w-[20rem] mt-5 overflow-hidden">
                {/* Image needs to be a bit less than 2:3 */}
                <Image
                  src={image}
                  alt={eventName}
                  sizes="100vw"
                  className="rounded overflow-hidden"
                />
              </div>
            </div>

            <div className="absolute w-28 h-[2.5rem] bg-main-brasa-yellow mt-7 ml-3 rounded-lg">
              <div className="w-full h-full flex justify-center items-center">
                <p className="font-semi-bold text-base text-black break-normal">{eventType}</p>
              </div>
            </div>

            <div className="w-full mt-4">
              <h2 className="font-bold text-[1.6rem] grow text-black text-left">{eventName}</h2>
            </div>

            <div className="w-full mt-1 flex flex-row items-center gap-x-1">
              <FontAwesomeIcon icon={faCalendar} style={{ color: "gray" }} />
              <h2 className="font-regular text-base text-black text-left">{date}</h2>
            </div>

            <div className="my-10 w-full flex flex-row items-center justify-between">
              <button
                onClick={() => openGoogleMaps}
                className="h-10 w-32 flex flex-row items-center justify-center 
                gap-x-2 rounded bg-main-brasa-blue text-white"
              >
                <FontAwesomeIcon icon={faLocationPin} style={{ color: "red" }} />
                <p>Google Maps</p>
              </button>

              {isPaid ? (
                <Link
                  href="/buy-ticket"
                  className="h-10 w-32 flex flex-row items-center justify-center 
                gap-x-2 rounded bg-main-brasa-blue text-white"
                >
                  <FontAwesomeIcon icon={faMoneyBill} />
                  <p>Buy Ticket</p>
                </Link>
              ) : (
                <a
                  href="instagram.com"
                  className="h-10 w-32 flex flex-row items-center justify-center 
                gap-x-2 rounded bg-main-brasa-blue text-white"
                >
                  <FontAwesomeIcon icon={faInfo} />
                  <p>Event Info</p>
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-200 shadow-2xl mb-20 grid grid-cols-3 mx-28 rounded-3xl">
          <Image
            src={image}
            alt={eventName}
            sizes="100vw"
            className="rounded-3xl h-[22rem] w-[50rem] object-cover gap-"
          />
          <div className="ml-8">
            <h1 className="mt-10 flex-col text-black font-bold items-center text-[1.6rem]">
              {eventName}
            </h1>
            <h2 className="mt-10 text-black font-bold text-[1.25rem]">{date}</h2>
            <div className="flex flex-row mt-8 w-48">
              {/* Button to open Google Maps */}
              <button
                className="flex fa-lg"
                style={{ background: "none", border: "none", cursor: "pointer" }}
                onClick={openGoogleMaps}
              >
                <FontAwesomeIcon icon={faLocationPin} style={{ color: "#eb0a0a" }} />
                <h2 className="flex text-black text-left font-light text-base text-[1.08rem] ml-1">
                  {location}
                </h2>
              </button>
            </div>
          </div>
          <div>
            <div className="font-medium flex flex-row justify-center items-center text-center">
              <a
                href="https://www.instagram.com/brasa.ucf/" // TODO: modify this value to actual link
                target="_blank"
                className="flex bg-blue-500 text-white rounded-full right-72 mt-[17rem] p-4"
              >
                More info
              </a>
              {isPaid ? (
                <div>
                  <a
                    href="https://www.instagram.com/brasa.ucf/" // TODO: modify this value to actual link
                    target="_blank"
                    className="flex rounded-full bg-blue-500 text-white items-center right-40 mt-[17rem] p-4"
                  >
                    Buy Ticket
                  </a>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpcomingEvents;
