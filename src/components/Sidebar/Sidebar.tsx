import {
  faInstagram,
  faLinkedinIn,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMAGES, MOBILE_SIDEBAR_DATA } from "@util/constants";
import Image from "next/image";
import { FC } from "react";
import SidebarItem from "./SidebarItem";

interface SidebarProps {
  readonly showSidebar: boolean;
  readonly toggleSidebar: (value: boolean) => void;
}

const Sidebar: FC<SidebarProps> = ({ showSidebar, toggleSidebar }) => {
  // Define our base class
  const className = `bg-white w-[250px] fixed top-0 left-0 bottom-0
  transform transition-transform duration-500 ease-in-out flex flex-col z-[1001]`;

  // Append class based on state of sidebar visiblity
  const appendClass = showSidebar ? "translate-x-0" : "-translate-x-full";

  return (
    <aside className={`${className} ${appendClass}`}>
      <div className="p-2 mb-10 mt-3 flex justify-between px-4 items-center">
        <Image
          src={IMAGES.brasa_logo}
          alt="BRASA @ UCF Logo"
          width={40}
          height={40}
          className="justify-self-start"
        />

        <button
          onClick={() => toggleSidebar(false)}
          className="cursor-pointer border-1 border-black/[0.15] p-2 py-[0.1rem] rounded"
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
      <div className="flex flex-col flex-1">
        {MOBILE_SIDEBAR_DATA.map((item) => (
          <SidebarItem
            key={item.name}
            icon={item.icon}
            name={item.name}
            route={item.route}
            toggleSidebar={toggleSidebar}
          />
        ))}
      </div>
      <div className="order-last m-2 mb-3 border-1 rounded border-black/[0.15] shadow">
        <div className="flex flex-col justify-start items-start p-3 gap-y-1">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <span className="font-light text-[0.7rem]">Here are the best ways to find us! </span>
          <div className="grid grid-cols-5 gap-x-2 justify-center items-center mt-2">
            <div className="bg-main-brasa-blue w-fit h-fit rounded-full p-[0.6rem] flex justify-center items-center">
              <a
                href="https://www.instagram.com/brasa.ucf/"
                className="flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  style={{ color: "#ffffff" }}
                  className="border-main-brasa-blue"
                />
              </a>
            </div>

            <div className="bg-main-brasa-blue w-fit h-fit rounded-full p-[0.6rem] flex justify-center items-center">
              <a
                href="https://chat.whatsapp.com/LhaUGwcrFVpL8KAACVYIlr"
                className="flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#ffffff" }}
                  className="border-main-brasa-blue"
                />
              </a>
            </div>

            <div className="bg-main-brasa-blue w-fit h-fit rounded-full p-[0.6rem] flex justify-center items-center">
              <a
                href="https://www.linkedin.com/company/brasa-at-ucf/"
                className="flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  style={{ color: "#ffffff" }}
                  className="border-main-brasa-blue"
                />
              </a>
            </div>

            <div className="bg-main-brasa-blue w-fit h-fit rounded-full p-[0.6rem] flex justify-center items-center">
              <a
                href="https://www.tiktok.com/@brasa.ucf"
                className="flex justify-center items-center"
              >
                <FontAwesomeIcon
                  icon={faTiktok}
                  style={{ color: "#ffffff" }}
                  className="border-main-brasa-blue"
                />
              </a>
            </div>

            <div className="bg-main-brasa-blue w-fit h-fit rounded-full p-[0.6rem] flex justify-center items-center">
              <a href="mailto:ucf@brasalocal.org" className="flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#ffffff" }}
                  className="border-main-brasa-blue"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
