import { IMAGES } from "@util/constants";
import Image from "next/image";
import Link from "next/link";
import { type FC } from "react";

const DesktopNavbar: FC = () => {
  return (
    <header>
      <nav className="absolute pl-24 w-full z-50">
        <div className="px-2 sm:px-4 pt-2 bg-transparent">
          <div className="container flex flex-row items-center justify-between mx-auto top-25">
            <div className="order-first w-[30%] h-full block flex-none mr-[12rem]">
              <div className="w-[30%]">
                <Link href="/">
                  <Image src={IMAGES.brasa_logo} sizes="100vw" alt="BRASA Logo" />
                </Link>
              </div>
            </div>

            <div className="order-last flex-1 pb-14">
              <ul className="flex flex-row items-center p-4 pr-12 space-x-16 text-sm font-medium">
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
                  <Link href="/resource">Resources</Link>
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

export default DesktopNavbar;
