import { faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import brasa_logo from "/public/static/brasa-logo.png";

type Props = {
  isMobile: boolean;
};

const Footer: FC<Props> = ({ isMobile }) => {
  return (
    <>
      {isMobile ? (
        // CHECK FIXED VS STICKY ON THIS DIV!!!
        <footer className="mb-48 bg-white justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-black text-lg font-bold pt-4">Follow BRASA @ UCF</h3>
            <div className="grid grid-cols-4 gap-x-4 justify-center items-center mt-4">
              <div className="bg-main-brasa-blue bg-cover rounded-full border-8 border-main-brasa-blue">
                <a href="https://www.instagram.com/brasa.ucf/">
                  <div className="flex justify-center bg-auto">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "#ffffff" }}
                      className="w-5 h-5 border-8 border-main-brasa-blue"
                    />
                  </div>
                </a>
              </div>

              <div className="bg-main-brasa-blue bg-cover rounded-full border-8 border-main-brasa-blue">
                <a href="https://www.linkedin.com/company/brasa-at-ucf/">
                  <div className="flex justify-center bg-auto">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      style={{ color: "#ffffff" }}
                      className="w-5 h-5 border-8 border-main-brasa-blue"
                    />
                  </div>
                </a>
              </div>

              <div className="bg-main-brasa-blue bg-cover rounded-full border-8 border-main-brasa-blue">
                <a href="https://chat.whatsapp.com/LhaUGwcrFVpL8KAACVYIlr">
                  <div className="flex justify-center bg-auto">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      style={{ color: "#ffffff" }}
                      className="w-5 h-5 border-8 border-main-brasa-blue"
                    />
                  </div>
                </a>
              </div>

              <div className="bg-main-brasa-blue bg-cover rounded-full border-8 border-main-brasa-blue">
                <a href="mailto:ucf@brasalocal.org">
                  <div className="flex justify-center bg-auto">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: "#ffffff" }}
                      className="w-5 h-5 border-8 border-main-brasa-blue"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
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
                <Link href="/profile" className="text-base font-bold mt-5">
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
                    target="_blank"
                    className="text-base font-bold mt-5"
                  >
                    Terms & Conditions
                  </a>
                  <a
                    href="https://github.com/UCF-BRASA/BRASA-Web/blob/main/LICENSE"
                    target="_blank"
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
          <div className="ml-28 mr-28 font-bold items-center justify-Center">
            <hr className="mt-10 border-black/60"></hr>
          </div>

          {/* CopyRight section */}
          <p className="font-regular pt-4 ml-28 mb-4 text-left text-black/60">
            © Copyright 2023 All Rights Reserved by UCF BRASA
          </p>
        </footer>
      )}
    </>
  );
};

export default Footer;
