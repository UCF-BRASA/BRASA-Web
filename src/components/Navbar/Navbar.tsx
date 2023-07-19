import Link from "next/link";
import { useState, type FC } from "react";

const Navbar: FC = () => {
  const [showLogin, setShowLogin] = useState<boolean>(true);

  return (
    <header className="absolute pl-24 w-full">
      <nav className="px-2 sm:px-4 pt-7 bg-transparent">
        <div className="container flex flex-row items-center justify-between mx-auto top-25">
          <div className="order-first w-full md:block md:w-auto">
            <Link href="/" className="flex items-center">
              <img src="/brasa-logo.png" className="md:h-28" alt="BRASA Logo" />
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
                <Link href="/contact-us">Contact</Link>
              </li>

              {showLogin ? (
                <li
                  className="block mx-auto text-base rounded-full h-14 w-28 bg-blue-500 text-center text-white py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-medium"
                  onClick={() => setShowLogin(false)}
                >
                  <div className="flex justify-center items-center h-full">
                    <Link href="/">Log In</Link>
                  </div>
                </li>
              ) : (
                // TODO - Add logged in profile design here
                <li className="block mx-auto text-base rounded-full h-14 w-28 bg-blue-500 text-center text-white py-2 pl-3 pr-4 md:p-0 hover:cursor-pointer font-medium">
                  <Link href="/" onClick={() => setShowLogin(true)}>
                    PROFILE STUFF HERE
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
