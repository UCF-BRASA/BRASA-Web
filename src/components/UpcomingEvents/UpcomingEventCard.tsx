import { faCalendar, faClock } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UpcomingEventsData } from "@interfaces";
import Image from "next/image";
import { FC } from "react";

interface Props extends UpcomingEventsData {
  isMobile: boolean;
}

const UpcomingEventCard: FC<Props> = ({
  image,
  eventName,
  eventDescription,
  location,
  moreInfoLink,
  buyTicketLink,
  date,
  time,
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
          <div className="flex flex-col w-[22rem] bg-white border-1 border-black/[0.2] rounded-lg shadow-md">
            <Image
              src={image}
              alt={eventName}
              sizes="100vw"
              className="object-cover rounded overflow-hidden w-full"
            />

            <div className="absolute px-2 py-1 bg-main-brasa-yellow mt-[0.6rem] ml-[0.6rem] rounded-full">
              <div className="w-full h-full flex justify-center items-center">
                <span className="font-semi-bold text-sm text-black break-normal">{eventType}</span>
              </div>
            </div>
            <div className="px-4">
              <div className="w-full my-4">
                <h3 className="font-bold text-[1.6rem] grow text-black text-left">{eventName}</h3>
              </div>

              <div id="date" className="flex flex-row gap-2 items-center justify-start">
                <FontAwesomeIcon icon={faCalendar} />
                <span className="text-black/[0.6] font-regular text-md">{date}</span>
              </div>
              <div id="time" className="flex flex-row gap-2 items-center justify-start">
                <FontAwesomeIcon icon={faClock} />
                <span className="text-black/[0.6] font-regular text-base">{time}</span>
              </div>
              <div id="location" className="flex flex-row">
                {/* Button to open Google Maps */}
                <button
                  className="flex fa-lg items-center justify-start gap-2"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                  onClick={openGoogleMaps}
                >
                  <FontAwesomeIcon icon={faLocationDot} /> {/* style={{ color: "#eb0a0a" }} */}
                  <span className="flex text-black/[0.6] text-left font-light text-base text-[1.08rem]">
                    {location}
                  </span>
                </button>
              </div>

              <div className="mt-6 mb-4 w-full flex flex-row items-center justify-between">
                <div className="w-full font-medium flex justify-center gap-x-10 text-center">
                  {isPaid ? (
                    <>
                      <a
                        href={moreInfoLink}
                        target="_blank"
                        className="flex items-center justify-center rounded-lg border-[0.5px] border-black/[0.2] bg-white text-black grow 
                    hover:bg-gray-200 transition duration-200"
                      >
                        More info
                      </a>
                      <a
                        href={buyTicketLink}
                        target="_blank"
                        className="flex items-center justify-center py-3 rounded-lg grow bg-blue-500 text-white font-medium hover:bg-blue-400 transition duration-200"
                      >
                        Buy Ticket
                      </a>
                    </>
                  ) : (
                    <a
                      href={moreInfoLink}
                      target="_blank"
                      className="rounded-lg p-4 grow bg-blue-500 text-white font-medium hover:bg-blue-400 transition duration-200"
                    >
                      More info
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-2xl mb-20 grid grid-cols-2 mx-40 rounded-3xl border-1 border-black/[0.2]">
          <div className="absolute px-4 py-1 bg-main-brasa-yellow mt-4 ml-4 rounded-full">
            <div className="w-full h-full flex justify-center items-center">
              <span className="font-semi-bold text-sm text-black break-normal">{eventType}</span>
            </div>
          </div>
          <Image
            src={image}
            alt={eventName}
            sizes="100vw"
            className="rounded-l-3xl h-[22rem] w-[50rem] object-cover"
          />
          <div className="flex flex-col px-10 gap-y-2 justify-center">
            <h3 className="text-black font-bold items-center text-[1.6rem]">{eventName}</h3>
            <span className="mb-4 text-black/[0.6] font-regular items-center text-[1rem]">
              {eventDescription}
            </span>
            <div id="date" className="flex flex-row gap-2 items-center justify-start">
              <FontAwesomeIcon icon={faCalendar} />
              <span className="text-black/[0.6] font-regular text-md">{date}</span>
            </div>
            <div id="time" className="flex flex-row gap-2 items-center justify-start">
              <FontAwesomeIcon icon={faClock} />
              <span className="text-black/[0.6] font-regular text-base">{time}</span>
            </div>
            <div id="location" className="flex flex-row">
              {/* Button to open Google Maps */}
              <button
                className="flex fa-lg items-center justify-start"
                style={{ background: "none", border: "none", cursor: "pointer" }}
                onClick={openGoogleMaps}
              >
                <FontAwesomeIcon icon={faLocationDot} /> {/* style={{ color: "#eb0a0a" }} */}
                <span className="flex text-black/[0.6] text-left font-light text-base text-[1.08rem] ml-1">
                  {location}
                </span>
              </button>
            </div>
            <div className="w-full font-medium flex gap-10 text-center mt-10">
              {isPaid ? (
                <>
                  <a
                    href={moreInfoLink}
                    target="_blank"
                    className="rounded-lg border-[0.5px] border-black/[0.2] bg-white text-black p-4 grow 
                    hover:bg-gray-200 transition duration-200"
                  >
                    More info
                  </a>
                  <a
                    href={buyTicketLink}
                    target="_blank"
                    className="rounded-lg items-center p-4 grow bg-blue-500 text-white font-medium hover:bg-blue-400 transition duration-200"
                  >
                    Buy Ticket
                  </a>
                </>
              ) : (
                <a
                  href={moreInfoLink}
                  target="_blank"
                  className="rounded-lg p-4 grow bg-blue-500 text-white font-medium hover:bg-blue-400 transition duration-200"
                >
                  More info
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UpcomingEventCard;
