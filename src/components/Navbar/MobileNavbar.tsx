import { faArrowRightToBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { COLORS } from "@util/constants";
import { useEffect, type FC } from "react";
import styles from "./Navbar.module.css";

const MobileNavbar: FC = () => {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  //   const handleRouteChange = () => {
  //     setIsSidebarOpen(false);
  //   };

  //   router.events.on("routeChangeStart", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeStart", handleRouteChange);
  //   };
  // }, [router.events]);

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

  // const toggleSidebar = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <header>
      <nav className={styles["new-nav"]}>
        <div className="bg-gradient-to-r from-main-brasa-yellow via-main-brasa-green to-main-brasa-blue h-2"></div>
        <div className="bg-white h-[4.5rem] flex justify-between items-center px-8 shadow-md">
          <div className="px-[0.6rem]">
            <FontAwesomeIcon
              // onClick={toggleSidebar}
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

        {/* Sidebar */}
        {/* <div
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
        </div> */}
      </nav>
    </header>
  );
};

export default MobileNavbar;
