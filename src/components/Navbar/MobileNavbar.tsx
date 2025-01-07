import { faArrowRightToBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS } from "@util/constants";
import { useEffect, useState, type FC } from "react";
import styles from "./Navbar.module.css";
import Sidebar from "./Sidebar/Sidebar";

const MobileNavbar: FC = () => {
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

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header>
      <nav className={styles["new-nav"]}>
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
              <div className="flex justify-center items-center h-full">
                <FontAwesomeIcon
                  icon={faArrowRightToBracket}
                  color={COLORS.white}
                  className="fa-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <Sidebar showSidebar={showSidebar} toggleSidebar={setShowSidebar} />
      </nav>
    </header>
  );
};

export default MobileNavbar;
