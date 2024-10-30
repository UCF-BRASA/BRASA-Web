import { faInstagram, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";

const MobileFooter: FC = () => {
  return (
    <>
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
    </>
  );
};

export default MobileFooter;
