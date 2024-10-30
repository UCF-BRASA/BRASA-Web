import { IMAGES } from "@util";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

const DesktopNavbar: FC = () => {
  return (
    <header>
      <nav className="absolute pl-24 w-full z-50">
        <div className="px-2 sm:px-4 pt-2 bg-transparent">
          <div className="container flex flex-row items-center justify-between mx-auto top-25">
            <div className="order-first gap-x-8 w-full md:block md:w-auto 2xl:ml-[-1rem] min-[1750px]:ml-[-3rem] min-[1750px]:ml-[-7rem]">
              <Link href="/">
                <Image src={IMAGES.brasa_logo} sizes="100vw" alt="BRASA Logo" className="w-[90%]" />
              </Link>
              <div className="w-8"></div>
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
                  <Link href="/resource">Resources</Link>
                </li>
                <li className="block py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-bold text-base">
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

export default DesktopNavbar;
