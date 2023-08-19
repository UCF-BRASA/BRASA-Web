import {
  faBookBookmark,
  faCalendar,
  faEnvelope,
  faGenderless,
  faGraduationCap,
  faLocationDot,
  faPhone,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMAGES } from "@util";
import { NextPage } from "next";
import Image from "next/image";

interface ProfileProps {
  isMobile: boolean;
}

const Profile: NextPage<ProfileProps> = ({ isMobile }) => {
  return (
    <main>
      {isMobile ? (
        <div>
          <div>
            <Image src={IMAGES.fachetti_pic} alt="..." sizes="100vw" className="rounded-md"></Image>
          </div>

          {/* Name */}
          <div className="flex flex-row items-center">
            <h1 className="text-4xl font-semi-bold pr-4">Amelia Dotor</h1>
            {/* Member Star */}
            <p className="flex items-center text-xs text-main-brasa-green font-semi-bold border-2 rounded-full border-main-brasa-green p-1 py-0.01">
              <FontAwesomeIcon icon={faStar} style={{ color: "#7cb342" }} className="mr-1" />
              Member
            </p>
          </div>
          {/* Email and Phone */}
          <div>
            <div className="flex flex-row items-center pt-4">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "#008cff" }} className="pr-2" />
              <p className="font-bold text-md text-black">ameliadotor@gmail.com</p>
            </div>
            <div className="flex flex-row items-center pt-2">
              <FontAwesomeIcon icon={faPhone} style={{ color: "#008cff" }} className="pr-2" />
              <p className="font-bold text-md text-black">+1 234 567 8910</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full bg-white">
          <div className="absolute right-0 justify-end bg-white z-0">
            <img src="static/become-member/intro/yellow-blob.svg" className="h-[26rem]" />
          </div>

          {/* Profile Section */}
          <div className="relative flex justify-center top-[14rem] mb-[20rem] mx-auto h-screen overflow-x-hidden z-5">
            <div className="flex flex-row bg-gray-50 rounded-lg p-10 shadow-md w-full max-w-6xl ">
              {/* Left Section */}
              <div className="pr-10 h-[24rem] w-[24rem]">
                {/* Image */}
                <Image
                  src={IMAGES.fachetti_pic}
                  alt="..."
                  sizes="100vw"
                  className="rounded-md"
                ></Image>

                {/* Email and Phone */}
                <div className="flex flex-row items-center pt-4">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ color: "#008cff" }}
                    className="pr-2"
                  />
                  <p className="font-bold text-md text-black">ameliadotor@gmail.com</p>
                </div>
                <div className="flex flex-row items-center pt-2">
                  <FontAwesomeIcon icon={faPhone} style={{ color: "#008cff" }} className="pr-2" />
                  <p className="font-bold text-md text-black">+1 234 567 8910</p>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full">
                {/* Name */}
                <div className="flex flex-row items-center">
                  <h1 className="text-4xl font-semi-bold pr-4">Amelia Dotor</h1>
                  {/* Member Star */}
                  <p className="flex items-center text-xs text-main-brasa-green font-semi-bold border-2 rounded-full border-main-brasa-green p-1 py-0.01">
                    <FontAwesomeIcon icon={faStar} style={{ color: "#7cb342" }} className="mr-1" />
                    Member
                  </p>
                </div>
                {/* Basic Information Section */}
                <div className="">
                  <h1 className="pt-10 text-main-brasa-blue text-lg font-bold pb-2">
                    Basic information
                  </h1>
                  <ul className="flex flex-row justify-left border-t-2 pt-4 border-gray-200">
                    {/* Gender */}
                    <li className="justify-left pr-24 pb-2 font-semi-bold text-sm text-gray-400">
                      GENDER
                      <div className="flex flex-row items-center pt-4">
                        <FontAwesomeIcon
                          icon={faGenderless}
                          style={{ color: "white" }}
                          className="items-rotate-45 p-1 w-4 h-4 bg-main-brasa-green rounded mr-2"
                        />
                        <p className="font-bold text-black">Female</p>
                      </div>
                    </li>
                    {/* Date of Birth */}
                    <li className="justify-left pr-24 pb-2 font-semi-bold text-sm text-gray-400">
                      DATE OF BIRTH
                      <div className="flex flex-row items-center pt-4">
                        <FontAwesomeIcon
                          icon={faCalendar}
                          style={{ color: "white" }}
                          className="p-1 w-4 h-4 bg-main-brasa-green rounded mr-2"
                        />
                        <p className="font-bold text-black">18/09/1997</p>
                      </div>
                    </li>
                    {/* City */}
                    <li className="justify-left pr-24 pb-2 font-semi-bold text-sm text-gray-400">
                      CITY
                      <div className="flex flex-row items-center pt-4">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{ color: "white" }}
                          className="p-1 w-4 h-4 bg-main-brasa-green rounded mr-2"
                        />
                        <p className="font-bold text-black">Sao Paulo</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Academic Information Section */}
                <div className="">
                  <h1 className="pt-20 text-main-brasa-blue text-lg font-bold pb-2">
                    Academic information
                  </h1>
                  <ul className="flex flex-row justify-left border-t-2 pt-4  border-gray-200">
                    {/* Major */}
                    <li className="justify-left pr-24 pb-2 font-semi-bold text-sm text-gray-400">
                      Major in
                      <div className="flex flex-row items-center pt-4">
                        <FontAwesomeIcon
                          icon={faGraduationCap}
                          style={{ color: "#008cff" }}
                          className="mr-2"
                        />
                        <p className="font-bold text-black">Finance</p>
                      </div>
                    </li>
                    {/* School Year */}
                    <li className="justify-left pr-24 pb-2 font-semi-bold text-sm text-gray-400">
                      School Year
                      <div className="flex flex-row items-center pt-4">
                        <FontAwesomeIcon
                          icon={faBookBookmark}
                          style={{ color: "#008cff" }}
                          className="mr-2"
                        />
                        <p className="font-bold text-black">Freshman</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Upload Resume & Logout buttons */}
                <div className="mt-12 mb-4 h-12 w-full flex justify-end">
                  <div className="w-[36%] h-full flex justify-center items-center text-base rounded-full bg-main-brasa-blue text-white font-medium mr-6">
                    Upload Resume
                  </div>
                  <div className="w-[26%] h-full flex justify-center items-center text-base rounded-full bg-white border border-main-brasa-blue text-main-brasa-blue font-medium">
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Profile;
