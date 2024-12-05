import ModalWrapper from "@components/ModalWrapper";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EBOARD_MEMBERS } from "@util/constants";
import Image from "next/image";
import { type FC } from "react";

interface Props {
  id: number;
  isMobile: boolean;
  onClose: () => void;
}

const BoardModal: FC<Props> = ({ id, isMobile, onClose }) => {
  const officer = EBOARD_MEMBERS.find((member) => member.id === id);
  if (!officer) return null;

  const { image, imageAlt, officerName, officerTitle, officerBio, officerLinkedIn } = officer;

  return (
    <div>
      {isMobile ? (
        <ModalWrapper>
          <div className="bg-white rounded-lg w-[90%] max-w-full max-h-[80%] overflow-auto flex flex-col mx-auto">
            <div className="p-4 flex justify-between items-center border-b border-gray-200">
              <h2 className="text-xl font-semi-bold">{officerTitle}</h2>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-main-brasa-blue text-white text-base font-medium 
                  rounded-md shadow-md hover:bg-gray-400 transition duration-200 ease-in-out"
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
            <div className="relative w-full h-[20rem]">
              <Image src={image} alt={imageAlt} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semi-bold mb-2">Description</h3>
              <p className="text-sm leading-relaxed font-light">{officerBio}</p>
            </div>
            <div className="bg-gray-100 p-4 flex justify-center border-t border-gray-200">
              <a
                href={officerLinkedIn}
                target="_blank"
                className="flex items-center text-[#0077b5] no-underline text-sm font-regular"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#008cff" }}
                  className="w-5 h-5 mr-1"
                />
                Connect with {officerName}
              </a>
            </div>
          </div>
        </ModalWrapper>
      ) : (
        <ModalWrapper>
          <div className="shadow-lg rounded-md bg-white w-[80rem]">
            <div id="modal-header">
              <div className="w-full flex flex-row items-center justify-between p-8 px-6">
                <p className="justify-self-start font-semi-bold text-3xl">{officerTitle}</p>
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-main-brasa-blue text-white text-base font-medium rounded-md shadow-md hover:bg-gray-400 transition duration-200 ease-in-out"
                >
                  <FontAwesomeIcon icon={faClose} />
                </button>
              </div>
            </div>
            <hr />

            {/* Modal Body */}
            <div id="modal-body">
              <div className="flex flex-row">
                <Image src={image} alt={imageAlt} className="h-[40rem] w-1/2 object-cover" />
                {/* Description */}
                <div className="p-8">
                  <h3 className="font-semi-bold text-xl tracking-[0.02em]">Description</h3>
                  <p className="font-regular text-base max-w-lg mt-4">{officerBio}</p>
                </div>
              </div>
            </div>
            <hr />

            {/* Modal Actions */}
            <div
              id="modal-actions"
              className="h-20 bg-light-grey flex flex-row items-center justify-end pr-5"
            >
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
                  Connect with {officerName}
                </p>
              </a>
            </div>
          </div>
        </ModalWrapper>
      )}
    </div>
  );
};

export default BoardModal;
