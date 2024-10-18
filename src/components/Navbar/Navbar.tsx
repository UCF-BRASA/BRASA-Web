import { faArrowRightToBracket, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loggedUser } from "@lib";
import { COLORS } from "@util";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState, type FC } from "react";
import styles from "./Navbar.module.css";
import brasa_logo from "/public/static/brasa-logo.png";

type Props = {
  isMobile: boolean;
};

const Navbar: FC<Props> = ({ isMobile }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsSidebarOpen(false);
    };

    router.events.on("routeChangeStart", handleRouteChange);
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
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
    });
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      {isMobile ? (
        // Mobile Navbar
        <nav className={styles["new-nav"]}>
          <div className="bg-gradient-to-r from-main-brasa-yellow via-main-brasa-green to-main-brasa-blue h-2"></div>
          <div className="bg-white h-[4.5rem] flex justify-between items-center px-8 shadow-md">
            <div className="px-[0.6rem]" onClick={toggleSidebar}>
              <FontAwesomeIcon
                icon={faBars}
                color={COLORS.black}
                className="fa-2x min-w-fit cursor-pointer"
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
                <div className="flex justify-center items-center h-full">
                  {loggedUser.id ? (
                    // TODO - Add logged in profile design here
                    <Link
                      className="flex flex-row justify-center hover:cursor-pointer"
                      href="/profile"
                    >
                      <FontAwesomeIcon
                        icon={faUser}
                        color={COLORS.white}
                        className="fa-lg min-w-fit"
                      />
                    </Link>
                  ) : (
                    <Link href="/login">
                      <div className="flex flex-row items-center">
                        <FontAwesomeIcon
                          icon={faArrowRightToBracket}
                          color={COLORS.white}
                          className="fa-xl min-w-fit"
                        />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <ul className="mt-10">
              <li className="block py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-bold text-base">
                <Link href="/events">Events</Link>
              </li>
              <li className="block py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-bold text-base">
                <Link href="/meet-the-board">E-Board</Link>
              </li>
              <li className="block py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-bold text-base">
                <Link href="/become-member">Become a Member</Link>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        // Desktop Navbar
        <nav className="absolute pl-24 w-full z-50">
          <div className="px-2 sm:px-4 pt-2 bg-transparent">
            <div className="container flex flex-row items-center justify-between mx-auto top-25">
              <div className="order-first w-full md:block md:w-auto">
                <Link href="/" className="flex items-center">
                  <Image src={brasa_logo} sizes="100vw" alt="BRASA Logo" className="w-[90%]" />
                </Link>
              </div>

              <div className="order-last">
                <ul className="flex flex-row items-center p-4 pr-12 md:space-x-20 md:text-sm md:font-medium">
                  <li className="block py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-bold text-base">
                    <Link href="/events">Events</Link>
                  </li>
                  <li className="block py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-bold text-base">
                    <Link href="/meet-the-board">E-Board</Link>
                  </li>
                  <li className="block py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-bold text-base">
                    <Link href="/become-member">Become a Member</Link>
                  </li>
                  <li className="block py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-bold text-base">
                    <Link href="#desktop-brasa-footer" scroll={false}>
                      Contact
                    </Link>
                  </li>
                  <li className="block py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-bold text-base">
                    <Link href="/resource">Resources</Link>
                  </li>

                  {/* {loggedUser.id ? (
                    // TODO - Add logged in profile design here
                    <Link
                      className="flex flex-row justify-center hover:cursor-pointer"
                      href="/profile"
                    >
                      <div className="flex justify-center items-center rounded-full h-14 w-14 bg-main-brasa-blue text-center text-white py-2 md:p-0 font-medium">
                        <FontAwesomeIcon icon={faUser} color={COLORS.white} className="fa-xl" />
                      </div>

                      <li className="flex flex-col pl-4 mt-2">
                        <div className="text-center text-sm font-bold">
                          {loggedUser.firstName + " " + loggedUser.lastName}
                        </div>
                        <div className="text-sm">View Profile</div>
                      </li>
                    </Link>
                  ) : (
                    <li className="block mx-auto text-base rounded-full h-14 w-28 bg-blue-500 text-center text-white py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-medium">
                      <div className="flex justify-center items-center h-full">
                        <Link href="/login">Log In</Link>
                      </div>
                    </li>
                  )} */}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
