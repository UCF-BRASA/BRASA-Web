import { faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faEnvelope, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { User } from "@interfaces";
import Link from "next/link";
import { FC } from "react";

import { COLORS } from "@util";
import Image from "next/image";
import brasa_logo from "/public/static/brasa-logo.png";

type Props = {
  isMobile: boolean;
  userLogged: User | undefined;
};

const Footer: FC<Props> = ({ isMobile }) => {
  return (
    <>
      {isMobile ? (
        // CHECK FIXED VS STICKY ON THIS DIV!!!
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
                          src={brasa_logo}
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
      ) : (
        <footer id="desktop-brasa-footer" className="bg-white">
          <div className="flex flex-wrap items-start justify-evenly">
            {/* Brasa Logo section */}
            <div className="grow-[0.25]">
              <Image
                src={brasa_logo}
                alt="UCF BRASA Logo on Footer"
                sizes="100vh"
                className="w-[40%]"
              />
            </div>

            {/* Quick links section */}
            <div className="text-left">
              <h1 className="text-main-brasa-blue text-lg font-bold pt-4">Quick Links</h1>
              <div className="flex flex-col text-left">
                <Link href="/" className="text-base font-bold mt-5">
                  Home
                </Link>
                <Link href="/" className="text-base font-bold mt-5">
                  Profile
                </Link>
                <Link href="/meet-the-board" className="text-base font-bold mt-5">
                  Meet the Board
                </Link>
                <Link href="/become-member" className="text-base font-bold mt-5">
                  Become a Member
                </Link>
              </div>
            </div>

            {/* Organization and terms */}
            <div className="text-left">
              <h1 className="text-main-brasa-blue text-lg font-bold pt-4">Organization</h1>
              <div className="">
                <div className="flex flex-col text-left">
                  <a
                    href="https://github.com/UCF-BRASA/BRASA-Web"
                    className="text-base font-bold mt-5"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="https://github.com/UCF-BRASA/BRASA-Web/blob/main/LICENSE"
                    className="text-base font-bold mt-5"
                  >
                    Website License
                  </a>
                </div>
              </div>
            </div>

            {/* Follow us heading and social media */}
            <div className="text-left">
              <h1 className="text-main-brasa-blue text-lg font-bold pt-4">Follow us</h1>
              <div className="-ml-1">
                <div className="flex flex-col text-left pt-4">
                  {/* Instagram section */}
                  <div className="flex flex-row items-center">
                    <div className="bg-main-brasa-blue bg-cover rounded-full border-8 border-main-brasa-blue">
                      <a href="https://www.instagram.com/brasa.ucf/" target="_blank">
                        <div className="flex justify-center bg-auto">
                          <FontAwesomeIcon
                            icon={faInstagram}
                            style={{ color: "#ffffff" }}
                            className="w-5 h-5 border-8 border-main-brasa-blue"
                          />
                        </div>
                      </a>
                    </div>
                    <a href="https://www.instagram.com/brasa.ucf/" target="_blank">
                      <p className="pl-2 font-bold">Instagram</p>
                    </a>
                  </div>
                </div>
                {/* Whatsapp section */}
                <div className="flex flex-col text-left pt-4">
                  <div className="flex flex-row items-center">
                    <div className="bg-main-brasa-blue bg-cover rounded-full border-8 border-main-brasa-blue">
                      <a href="https://chat.whatsapp.com/LhaUGwcrFVpL8KAACVYIlr" target="_blank">
                        <div className="flex justify-center bg-auto">
                          <FontAwesomeIcon
                            icon={faWhatsapp}
                            style={{ color: "#ffffff" }}
                            className="w-5 h-5 border-8 border-main-brasa-blue"
                          />
                        </div>
                      </a>
                    </div>
                    <a href="https://chat.whatsapp.com/LhaUGwcrFVpL8KAACVYIlr" target="_blank">
                      <p className="pl-2 font-bold">Whatsapp</p>
                    </a>
                  </div>
                </div>
                {/* Linkedin section */}
                <div className="flex flex-col text-left pt-4">
                  <div className="flex flex-row items-center">
                    <div className="bg-main-brasa-blue bg-cover rounded-full border-8 border-main-brasa-blue">
                      <a href="https://www.linkedin.com/company/brasa-at-ucf/" target="_blank">
                        <div className="flex justify-center bg-auto">
                          <FontAwesomeIcon
                            icon={faLinkedinIn}
                            style={{ color: "#ffffff" }}
                            className="w-5 h-5 border-8 border-main-brasa-blue"
                          />
                        </div>
                      </a>
                    </div>
                    <a href="https://www.linkedin.com/company/brasa-at-ucf/" target="_blank">
                      <p className="pl-2 font-bold">Linkedin</p>
                    </a>
                  </div>
                </div>
                {/* Email section */}
                <div className="flex flex-col text-left pt-4">
                  <div className="flex flex-row items-center">
                    <div className="bg-main-brasa-blue bg-cover rounded-full border-8 border-main-brasa-blue">
                      <a href="https://www.instagram.com/brasa.ucf/" target="_blank">
                        <div className="flex justify-center bg-auto">
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{ color: "#ffffff" }}
                            className="w-5 h-5 border-8 border-main-brasa-blue"
                          />
                        </div>
                      </a>
                    </div>
                    <a href="mailto:ucf@brasalocal.org" target="_blank">
                      <p className="pl-2 font-bold">Email</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal line section */}
          <div className="ml-28 mr-28 Font-Bold items-center justify-Center">
            <hr className="mt-10 border-black/60"></hr>
          </div>

          {/* CopyRight section */}
          <div className="font-Light">
            <p className="pt-4 ml-28 mb-4 text-left text-black/60">
              © Copyright 2023 All Rights Reserved by BRASA
            </p>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
