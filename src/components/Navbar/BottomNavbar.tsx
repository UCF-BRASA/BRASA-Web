import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { faBriefcase, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS, IMAGES } from "@util";

const BottomNavbar: FC = () => {
  return (
    <nav className="bg-main-brasa-green h-[5.5rem] fixed bottom-0 inset-x-0 z-50 w-screen bg-gradient-to-r from-main-brasa-yellow via-main-brasa-green to-main-brasa-blue">
      <div className="w-full h-20 bg-white mt-2">
        <div className="flex flex-row justify-evenly items-center h-full">
          <Link href="/meet-the-board">
            <div className="flex flex-col justify-center items-center text-center w-16">
              <FontAwesomeIcon
                icon={faBriefcase}
                color={COLORS["main-brasa-blue"]}
                className="fa-2x"
              />
              <p className="font-semi-bold tracking-[0.05rem] text-main-brasa-blue text-xs">
                E-Board
              </p>
            </div>
          </Link>

          <div className="relative flex flex-row justify-items-center items-center mx-8 mr-12">
            <div className="absolute bottom-[-20px] inset-x-[-3rem] w-[110px] bg-gradient-to-r from-main-brasa-yellow to-main-brasa-blue rounded-full p-2">
              <div className="bg-white rounded-full">
                <Link href="/">
                  <div className="flex justify-center items-center hover:cursor-pointer">
                    <Image
                      src={IMAGES.brasa_logo}
                      alt="BRASA Logo on Navbar placed on Footer"
                      sizes="100vw"
                      className="w-[95%%] p-2" // THIS %% IS NOT A TYPO
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/become-member">
            <div className="flex flex-col justify-center items-center text-center w-16">
              <FontAwesomeIcon
                icon={faUserPlus}
                color={COLORS["main-brasa-blue"]}
                className="fa-xl mb-1"
              />
              <p className="font-semi-bold tracking-[0.05rem] text-main-brasa-blue text-xs">
                Join Us
              </p>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNavbar;
