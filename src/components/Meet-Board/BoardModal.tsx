import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { type FC } from "react";

interface Props {
  //   image: StaticImageData;
  //   imageAlt: string;
  //   officerName: string;
  //   officerTitle: string;
  //   officerLinkedIn: strimg;
  isMobile: boolean;
}

const BoardModal: FC<Props> = ({
  //   image,
  //   imageAlt,
  //   officerName,
  //   officerTitle,
  //   officerContactInfo,
  isMobile,
}) => {
  return !isMobile ? (
    <div></div>
  ) : (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="border shadow-lg rounded-md bg-white">
        {/* Modal Header */}
        <div id="modal-header">
          <div className="w-full flex flex-row items-center p-8 px-6 border-b-1 border-b-black">
            {/* TODO: make sure border works */}
            <p className="justify-self-start font-semi-bold text-3xl">{"President"}</p>
            {/* Navigates back to the base URL - closing the modal */}
            <Link
              href="/meet-the-board"
              className="justify-self-end px-4 py-2 bg-gray-400 text-white text-base font-medium 
              rounded-md shadow-md hover:bg-main-brasa-blue transition duration-200 ease-in-out"
            >
              <FontAwesomeIcon icon={faClose} />
            </Link>
          </div>
        </div>
        <hr />

        {/* Modal Body */}
        <div id="modal-body" className="border-b-1 border-b-black">
          <div className="flex flex-row">
            {/* Image */}
            <div className="w-[18rem] h-[20rem] bg-lime-200" />
            {/* Description */}
            <div className="p-8">
              <h3 className="font-semi-bold text-xl tracking-[0.02em]">Description</h3>
              <p className="font-regular text-base max-w-lg mt-4">
                Looking to meet new Brazilian students at UCF? We got your back! Come eat some
                coxinhas with us at our hangouts! Looking to meet new Brazilian students at UCF? We
                got your back! Come eat some coxinhas with us at our hangouts!
              </p>
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
            href={"officerContactInfo.linkedInLink"}
            className="flex justify-center items-center"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} style={{ color: "#008cff" }} className="w-5 h-5" />
            <p className="pl-1 font-regular text-regular text-gray-500">
              Connect with "{"officerName"}"!
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BoardModal;
