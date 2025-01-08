import { faArrowRightToBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS } from "@util/constants";
import { useEffect, type FC } from "react";
import styles from "./Navbar.module.css";

interface Props {
  showSidebar: boolean;
  setShowSidebar: (value: boolean) => void;
}

const MobileNavbar: FC<Props> = ({ showSidebar, setShowSidebar }) => {
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
    </header>
  );
};

export default MobileNavbar;
