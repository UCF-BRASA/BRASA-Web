import { IMAGES } from "@util/constants";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  windowWidth: number;
  windowHeight: number;
  isMobile: boolean;
}

const LogIn: NextPage<Props> = ({ isMobile }) => {
  const validatePass = () => {
    const x = document.getElementById("Password_eg");
  };

  return (
    <section>
      {isMobile ? (
        <main className="h-full">
          {/* <div className="bg-gradient-to-r from-main-brasa-blue  to-main-brasa-green"> */}
          <div className="bg-main-brasa-green">
            {/* <div className="bg-[url('/static/login/background_pic.jpg')] bg-cover bg-center opacity-90"> */}
            <div className="h-28"></div>
            <div className="">
              <div className="items-center justify-center text-center">
                <div className=" border-4 border-blue-500 bg-white rounded-[5rem] h-[34rem]">
                  <div className="items-center justify-center">
                    <h1 className="leading-200 font-bold text-3xl items-center mt-10">
                      BEM-VINDO!
                    </h1>
                    <p className="mt-6 font-medium text-base text-center text-black break-normal">
                      Login
                    </p>
                    <input
                      type="login"
                      id="login"
                      placeholder={"Enter your email"}
                      className="text-xs bg-white placeholder-gray-400 pl-10 pr-10 rounded-full text-center border-2 border-blue-500 h-[3rem]"
                    ></input>
                    <p className="mt-6 font-medium text-base text-black break-normal text-center">
                      Password
                    </p>
                    <input
                      type="login"
                      id="login"
                      placeholder={"Enter your Password"}
                      className="text-xs bg-white placeholder-gray-400 pl-10 pr-10 rounded-full text-center border-2 border-blue-500 h-[3rem] "
                    ></input>
                    <div className="m-6">
                      <Link
                        className="text-center underline text-blue-600 hover:text-blue-800"
                        href="/sign_in"
                      >
                        Register
                      </Link>
                    </div>
                    <div className="m-6">
                      <Link
                        className=" text-center underline text-blue-600 hover:text-blue-800"
                        href="/forgot-password"
                      >
                        Forgot-password?
                      </Link>
                    </div>
                    <div className="m-14 text-base">
                      <Link
                        className="rounded-full pl-20 pr-20 pt-4 pb-4 bg-blue-500 text-white font-medium text-center justify-center items-center"
                        href="/"
                      >
                        Enter
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-10 bg-main-brasa-green"></div>
          </div>
        </main>
      ) : (
        <main className="h-full">
          <div className="bg-main-brasa-green">
            <div className="h-28 w-full "></div>
            <div className="">
              <div className="items-center justify-center text-center">
                <div className=" border-8 border-blue-500 bg-white shadow-2xl m-40 rounded-[5rem] h-[40rem] w-auto flex flex-row">
                  <div className="text-left float-left mt-10 ml-24">
                    <h1 className="leading-200 font-bold text-5xl items-center mt-8 text-center">
                      Welcome To Our Family!
                    </h1>
                    <p className="mt-10 font-medium text-base text-justify text-black w-[25rem] break-normal">
                      UCF Email
                    </p>
                    <input
                      type="login"
                      id="login"
                      placeholder={"Enter your email"}
                      className="text-xs mt-3 bg-white placeholder-gray-400 rounded-full border-2 border-blue-500 px-2 h-[3rem] w-full"
                    ></input>
                    <p className="mt-8 font-medium text-base text-justify text-black w-[25rem] break-normal">
                      Password
                    </p>
                    <input
                      type="login"
                      id="login"
                      placeholder={"Enter your Password"}
                      className="text-xs mt-3 bg-white placeholder-gray-400 rounded-full border-2 border-blue-500 px-2 h-[3rem] w-full"
                    ></input>
                    <div className="flex flex-row">
                      <Link
                        className="ml-60 text-center justify-center items-center flex underline text-blue-600 hover:text-blue-800"
                        href="/sign_in"
                      >
                        Register
                      </Link>
                      <Link
                        className="ml-10 text-center justify-center items-center flex underline text-blue-600 hover:text-blue-800"
                        href="/forgot-password"
                      >
                        Forgot-password?
                      </Link>
                    </div>

                    <div className="mt-12 ml-28 text-base rounded-full md:h-14 md:w-44 bg-blue-500 text-white font-medium">
                      <Link
                        className="flex text-center justify-center items-center w-full h-full"
                        href="/"
                      >
                        Login
                      </Link>
                    </div>
                  </div>
                  {/* Photo */}
                  <div>
                    <Image
                      src={IMAGES.login_pic}
                      alt=""
                      sizes="100vw"
                      className=" w-[33.5rem] h-[39rem] ml-6 rounded-r-[4.5rem]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </section>
  );
};

export default LogIn;
