import { faArrowRightToBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS, IMAGES } from "@util/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, type FC } from "react";
import styles from "./Navbar.module.css";

interface Props {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const ResponsiveNavbar: FC<Props> = ({ showSidebar, setShowSidebar }) => {
  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove(styles["scroll-up"]);
        return;
      }

      if (currentScroll > lastScroll && !body.classList.contains(styles["scroll-down"])) {
        body.classList.remove(styles["scroll-up"]);
        body.classList.add(styles["scroll-down"]);
      } else if (currentScroll < lastScroll && body.classList.contains(styles["scroll-down"])) {
        body.classList.remove(styles["scroll-down"]);
        body.classList.add(styles["scroll-up"]);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      {/* Mobile/Tablet Navigation */}
      <nav className={`${styles["new-nav"]} lg:hidden`}>
        <div className="bg-gradient-to-r from-main-brasa-yellow via-main-brasa-green to-main-brasa-blue h-2"></div>
        <div className="bg-white h-[4.5rem] flex justify-between items-center px-8 shadow-md">
          <div className="px-[0.6rem]">
            <FontAwesomeIcon
              onClick={toggleSidebar}
              icon={faBars}
              color={COLORS.black}
              className="fa-2x cursor-pointer"
            />
          </div>
          <div>
            <h1 className="font-medium text-black text-lg justify-self-center text-center">
              BRASA @ UCF
            </h1>
          </div>
          <div className="">
            <div
              className="text-base rounded-lg h-[3rem] w-[3rem] bg-main-brasa-blue text-center text-white hover:cursor-pointer 
                font-medium"
            >
              <a
                href="https://knightconnect.campuslabs.com/engage/organization/brasa"
                className="flex justify-center items-center h-full"
              >
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  color={COLORS.white}
                  className="fa-xl"
                />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block absolute pl-24 w-full z-50">
        <div className="px-2 sm:px-4 pt-2 bg-transparent">
          <div className="container flex flex-row items-center justify-center top-25">
            <div className="order-first w-[30%] h-full block flex-none mr-[2rem]">
              <div className="w-[30%]">
                <Link href="/">
                  <Image src={IMAGES.brasa_logo} sizes="100vw" alt="BRASA Logo" />
                </Link>
              </div>
            </div>

            <div className="order-last flex-1 pb-14">
              <ul className="flex flex-row items-center p-4 pr-12 space-x-12 text-sm font-medium">
                <li className="py-1 px-2 rounded font-bold text-lg hover:cursor-pointer hover:bg-slate-800/[.2] transition duration-200">
                  <Link href="/events">Events</Link>
                </li>
                <li className="py-1 px-2 rounded font-bold text-lg hover:cursor-pointer hover:bg-slate-800/[.2] transition duration-200">
                  <Link href="/meet-the-board">E-Board</Link>
                </li>
                <li className="py-1 px-2 rounded font-bold text-lg hover:cursor-pointer hover:bg-slate-800/[.2] transition duration-200">
                  <Link href="/become-member">Become a Member</Link>
                </li>
                <li className="py-1 px-2 rounded font-bold text-lg hover:cursor-pointer hover:bg-slate-800/[.2] transition duration-200">
                  <Link href="/gallery">Gallery</Link>
                </li>
                <li className="font-bold text-lg navigation-link">
                  <Link href="#desktop-brasa-footer" scroll={false}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default ResponsiveNavbar;
