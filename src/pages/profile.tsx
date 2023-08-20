import {
  IconDefinition,
  faBookBookmark,
  faCalendarDays,
  faEnvelope,
  faGenderless,
  faGraduationCap,
  faLocationDot,
  faMars,
  faMarsStrokeUp,
  faStar,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoggedUser from "@lib/user";
import { COLORS, IMAGES } from "@util";
import { NextPage } from "next";
import Image from "next/image";

interface ProfileProps {
  isMobile: boolean;
}

const Profile: NextPage<ProfileProps> = ({ isMobile }) => {
  const getGenderIcon = (): IconDefinition => {
    const userGender = LoggedUser.gender;

    switch (userGender) {
      case "Man":
        return faMars;

      case "Woman":
        return faVenus;

      case "Non-binary":
        return faMarsStrokeUp;

      case "Prefer not to say":
        return faGenderless;

      default:
        return faGenderless;
    }
  };

  return (
    <main>
      {isMobile ? (
        <div>
          <div className="absolute top-[3rem] bg-white z-0">
            <img src="static/landing/intro/landing-area.svg" className="" />
          </div>
          <div className="relative flex justify-center mt-[8rem]">
            {/* Picture */}
            <Image
              src={IMAGES.profile_pic}
              alt="User Profile Picture"
              sizes="100vw"
              className="flex flex-row justify-center items-center rounded-full w-[10rem]"
            ></Image>
          </div>
          <div className="p-3">
            {/* Name */}
            <div className="flex flex-row items-center mt-[2rem]">
              <h1 className="text-4xl font-semi-bold pr-4">
                {LoggedUser.firstName + " " + LoggedUser.lastName}
              </h1>
              {/* Member Star */}
              <p className="flex items-center text-xs text-black mt-2  font-semi-bold border-2 rounded-full bg-main-brasa-yellow p-1 py-0.01">
                <FontAwesomeIcon icon={faStar} color={COLORS.black} className="mr-1" />
                Member
              </p>
            </div>
            {/* Email and Phone */}
            <div className="mb-4">
              <div className="flex flex-row items-center pt-4">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: "#008cff" }} className="pr-2" />
                <p className="font-bold text-md text-black">{LoggedUser.email}</p>
              </div>
            </div>

            <h2 className="pt-8 text-main-brasa-blue text-xl font-bold pb-2">Basic information</h2>

            <ul className="flex flex-col justify-left border-t-2 py-4 border-gray-200">
              {/* Gender */}
              <li className="flex flex-row justify-left mr-2 pb-4 font-semi-bold text-lg text-gray-400">
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={getGenderIcon()}
                    style={{ color: "white" }}
                    className="p-1 w-6 h-6 bg-main-brasa-green rounded fa-xl"
                  />
                  <h3 className="font-semi-bold text-black pl-2">{LoggedUser.gender}</h3>
                </div>
              </li>
              {/* Date of Birth */}
              <li className="flex flex-row justify-left pr-24 pb-4 my-2 font-semi-bold text-lg text-gray-400">
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    style={{ color: "white" }}
                    className="p-1 w-6 h-6 bg-main-brasa-green rounded fa-xl"
                  />
                  <h3 className="font-semi-bold text-black pl-2 ">{LoggedUser.dateOfBirth}</h3>
                </div>
              </li>
              {/* City */}
              <li className="flex flex-row justify-left pr-24 pb-2 font-semi-bold text-lg text-gray-400">
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    style={{ color: "white" }}
                    className="p-1 w-6 h-6 bg-main-brasa-green rounded fa-xl"
                  />
                  <h3 className="font-semi-bold text-black pl-2">{LoggedUser.originCity}</h3>
                </div>
              </li>
            </ul>

            <h2 className="pt-8 text-main-brasa-blue text-xl font-bold pb-2">
              Academic information
            </h2>

            <ul className="flex flex-col justify-left border-t-2 py-2 border-gray-200">
              {/* Major */}
              <li className="justify-left pr-24 pb-2 font-semi-bold text-lg text-gray-400">
                <div className="flex flex-row items-center pt-4">
                  <FontAwesomeIcon
                    icon={faGraduationCap}
                    color={COLORS["main-brasa-blue"]}
                    className="px-1 mr-2 fa-xl"
                  />
                  <h3 className="font-semi-bold text-black">{LoggedUser.major}</h3>
                </div>
              </li>
              {/* School Year */}
              <li className="justify-left pr-24 pb-2 font-semi-bold text-lg text-gray-400">
                <div className="flex flex-row items-center pt-4">
                  <FontAwesomeIcon
                    icon={faBookBookmark}
                    color={COLORS["main-brasa-blue"]}
                    className="px-1 mr-3 fa-xl"
                  />
                  <h3 className="font-semi-bold text-black">{LoggedUser.schoolYear}</h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="h-full bg-white">
          <div className="absolute right-0 justify-end bg-white z-0">
            <img src="static/become-member/intro/yellow-blob.svg" className="h-[26rem]" />
          </div>

          {/* Profile Section */}
          <div className="relative flex justify-center top-[12rem] mb-[20rem] mx-auto h-screen overflow-x-hidden z-5">
            <div className="flex flex-row bg-gray-50 rounded-lg p-10  shadow-md w-full max-w-6xl ">
              {/* Left Section */}
              <div className="pr-10 h-[24rem] w-[24rem]">
                {/* Image */}
                <Image
                  src={IMAGES.profile_pic}
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
                  <p className="font-bold text-md text-black">{LoggedUser.email}</p>
                </div>
              </div>

              {/* Right Section */}
              <div className="w-full">
                {/* Name */}
                <div className="flex flex-row items-center">
                  <h1 className="text-4xl font-semi-bold pr-4">
                    {LoggedUser.firstName + " " + LoggedUser.lastName}
                  </h1>
                  {/* Member Star */}
                  <p className="flex items-center text-xs text-black mt-2  font-semi-bold border-2 rounded-full bg-main-brasa-yellow p-1 py-0.01">
                    <FontAwesomeIcon icon={faStar} color={COLORS.black} className="mr-1" />
                    Member
                  </p>
                </div>
                {/* Basic Information Section */}
                <div className="">
                  <h1 className="pt-10 text-main-brasa-blue text-xl font-bold pb-2">
                    Basic information
                  </h1>
                  <ul className="flex flex-row justify-left border-t-2 pt-4 border-gray-200">
                    {/* Gender */}
                    <li className="justify-left pr-24 pb-2 font-semi-bold text-sm text-gray-400">
                      GENDER
                      <div className="flex flex-row items-center pt-4">
                        <FontAwesomeIcon
                          icon={getGenderIcon()}
                          style={{ color: "white" }}
                          className="p-1 w-6 h-6 bg-main-brasa-green rounded fa-xl mr-2"
                        />
                        <p className="font-bold text-black">{LoggedUser.gender}</p>
                      </div>
                    </li>
                    {/* Date of Birth */}
                    <li className="justify-left pr-24 pb-2 font-semi-bold text-sm text-gray-400">
                      DATE OF BIRTH
                      <div className="flex flex-row items-center pt-4">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          style={{ color: "white" }}
                          className="p-1 w-6 h-6 bg-main-brasa-green rounded fa-xl mr-2"
                        />
                        <p className="font-bold text-black">{LoggedUser.dateOfBirth}</p>
                      </div>
                    </li>
                    {/* City */}
                    <li className="justify-left pr-24 pb-2 font-semi-bold text-sm text-gray-400">
                      CITY
                      <div className="flex flex-row items-center pt-4">
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          style={{ color: "white" }}
                          className="p-1 w-6 h-6 bg-main-brasa-green rounded fa-xl mr-2"
                        />
                        <p className="font-bold text-black">{LoggedUser.originCity}</p>
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
                          className="mr-2 fa-2xl"
                        />
                        <p className="font-bold text-black">{LoggedUser.major}</p>
                      </div>
                    </li>
                    {/* School Year */}
                    <li className="justify-left pr-24 pb-2 font-semi-bold text-sm text-gray-400">
                      School Year
                      <div className="flex flex-row items-center pt-4">
                        <FontAwesomeIcon
                          icon={faBookBookmark}
                          style={{ color: "#008cff" }}
                          className="mr-2 fa-2xl"
                        />
                        <p className="font-bold text-black">{LoggedUser.schoolYear}</p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* Upload Resume & Logout buttons */}
                <div className="mt-[10rem] mb-4 h-12 w-full flex justify-end">
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
