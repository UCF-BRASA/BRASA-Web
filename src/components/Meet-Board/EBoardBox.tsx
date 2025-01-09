import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import { type FC } from "react";

interface Props {
  boxWidth?: number;
  id: number;
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
  officerNickname?: string;
  officerLinkedIn?: string;
  isMobile: boolean;
  onLearnMoreClick?: (id: number) => void;
}

const EBoardBox: FC<Props> = ({
  boxWidth = 20,
  id,
  image,
  imageAlt,
  officerName,
  officerTitle,
  officerNickname,
  officerLinkedIn,
  onLearnMoreClick = null,
  isMobile,
}) => {
  return (
    <div>
      {isMobile ? (
        <div className="w-[20rem] mb-12">
          <div className="w-full h-full rounded bg-light-grey shadow-2xl">
            <Image
              src={image}
              alt={imageAlt}
              sizes="100vw"
              className="h-[20rem] w-full object-cover mx-auto my-auto rounded-t-[0.25rem]"
            />
            <div className="w-full text-left px-4 my-4">
              <h3 className="text-black font-medium text-2xl">{officerName}</h3>
              <p className="text-slate-900/[.6] font-light text-base">{officerTitle}</p>
            </div>
            <hr className="border-black/[.1]"></hr>
            {onLearnMoreClick ? (
              <>
                <div className="w-full flex justify-center items-center py-4">
                  <button
                    onClick={() => onLearnMoreClick(id)}
                    className="bg-main-brasa-blue text-center text-white py-3 w-full 
                    mx-5 rounded hover:bg-blue-400 transition duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </>
            ) : (
              <div className="h-14 bg-light-grey flex flex-row items-center justify-center">
                <a
                  href={officerLinkedIn}
                  className="flex justify-center items-center"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#008cff" }}
                    className="w-5 h-5"
                  />
                  <p className="pl-1 font-regular text-regular text-main-brasa-blue salve">
                    Connect with{" "}
                    {officerNickname ?? officerName.substring(0, officerName.indexOf(" "))}
                  </p>
                </a>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={`w-[${boxWidth}rem] mb-20`}>
          <div className="w-full h-full rounded bg-light-grey shadow-2xl">
            <Image
              src={image}
              alt={imageAlt}
              sizes="100vw"
              className="h-[30rem] w-full object-cover mx-auto my-auto rounded-t-[0.25rem]"
            />
            <div className="w-full text-left px-4 my-4">
              <h3 className="text-black font-medium text-2xl">{officerName}</h3>
              <p className="text-slate-900/[.6] font-light text-base">{officerTitle}</p>
            </div>
            <hr className="border-black/[.1]" />
            {onLearnMoreClick ? (
              <div className="w-full flex justify-center items-center py-4">
                <button
                  onClick={() => onLearnMoreClick(id)}
                  className="bg-main-brasa-blue text-center text-white py-3 w-full 
                    mx-5 rounded hover:bg-blue-400 transition duration-200"
                >
                  Learn More
                </button>
              </div>
            ) : (
              <div className="h-14 bg-light-grey flex flex-row items-center justify-center">
                <a
                  href={officerLinkedIn}
                  className="flex justify-center items-center"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#008cff" }}
                    className="w-5 h-5"
                  />
                  <p className="pl-1 font-regular text-regular text-main-brasa-blue">
                    Connect with{" "}
                    {officerNickname ?? officerName.substring(0, officerName.indexOf(" "))}
                  </p>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EBoardBox;
