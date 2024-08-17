import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

interface Props {
  image: StaticImageData;
  imageAlt: string;
  date: string;
  location: string;
  eventsName: string;
  isMobile: boolean;
  isPaid?: boolean;
}

const UpcomingEvents: FC<Props> = ({
  imageAlt,
  image,
  eventsName,
  location,
  date,
  isMobile,
  isPaid,
}) => {
  // Function to open Google Maps with the specified location
  const openGoogleMaps = () => {
    const encodedLocation = encodeURIComponent(location);
    const mapsUrl = `https://www.google.com/maps?q=${encodedLocation}`;
    window.open(mapsUrl, "_blank");
  };

  return (
    <section>
      {isMobile ? (
        <div className="h-full w-screen bg-white">
          <h1 className="mt-10 bg-main-brasa-blue p-10 text-black font-bold justify-center text-center items-center text-[1.6rem]">
            {eventsName}
          </h1>
          <div className="text-center justify-center items-center w-full">
            <Image
              src={image}
              alt={imageAlt}
              sizes="100vw"
              className="h-[22rem] w-[50rem] object-cover shadow-2xl"
            />
          </div>
          <div className="mt-2 mb-40">
            <h2 className=" mt-10 text-center text-black font-bold text-[1.25rem]">{date}</h2>
            <div className="flex flex-col items-center mt-4">
              <div className="flex items-center space-x-4">
                <button
                  className="fa-lg flex items-center"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                  onClick={openGoogleMaps}
                >
                  <FontAwesomeIcon icon={faLocationPin} style={{ color: "#eb0a0a" }} />
                  <h2 className="text-black font-bold text-base text-[1.08rem] w-44">{location}</h2>
                </button>
                <a
                  href="https://www.instagram.com/brasa.ucf/"
                  target="_blank"
                  className="bg-blue-500 text-center text-white rounded-full p-4"
                >
                  More info
                </a>
              </div>
              {isPaid ? (
                <a
                  href="https://www.instagram.com/brasa.ucf/"
                  target="_blank"
                  className="mt-4 bg-blue-500 text-white rounded-full p-4"
                >
                  Buy Ticket
                </a>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-gray-200 shadow-2xl mb-20 flex flex-cols flex-rows mx-28 rounded-3xl">
          <Image
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="rounded-3xl h-[22rem] w-[50rem] object-cover"
          />
          <div className="ml-8">
            <h1 className="mt-10 flex-col text-black font-bold items-center text-[1.6rem]">
              {eventsName}
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
            <div className="font-medium flex-col justify-center items-center text-center">
              <a
                href="https://www.instagram.com/brasa.ucf/"
                target="_blank"
                className="flex bg-blue-500 text-white rounded-full absolute right-72 mt-[17rem] p-4"
              >
                More info
              </a>
              {isPaid ? (
                <div>
                  <a
                    href="https://www.instagram.com/brasa.ucf/"
                    target="_blank"
                    className="flex rounded-full bg-blue-500 text-white items-center absolute right-40 mt-[17rem] p-4"
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
