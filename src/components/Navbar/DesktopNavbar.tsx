import Image from "next/image";
import Link from "next/link";
import { useEffect, type FC } from "react";
import styles from "./Navbar.module.css";
import brasa_logo from "/public/static/brasa-logo.png";

const Navbar: FC = () => {
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

  return (
    <header>
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
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
