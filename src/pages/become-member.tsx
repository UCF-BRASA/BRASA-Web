import { JoinNewsletter } from "@components";
import { NextPage } from "next";
import Link from "next/link";

interface Props {
  windowWidth: number;
  windowHeight: number;
  isMobile: boolean;
}

const BecomeMember: NextPage<Props> = ({ windowWidth, isMobile }) => {
  return (
    <section>
      {isMobile ? (
        <main className="h-full w-screen bg-white">
          {/* Section 1 - Intro */}
          {/* Yellow blob on top-right hand corner */}
          <div className="absolute flex justify-end bg-white mb-[2rem] w-full z-0 top-0 right-0">
            <img src="static/become-member/intro/yellow-blob.svg" className="h-[15rem]" />
          </div>
          {/*  */}
          <div className="relative z-50">
            <div className="order-first w-full mt-[7rem]">
              <h3 className="pt-2 font-bold text-center text-sm tracking-[0.20em]">
                EMPOWERING BRAZILIAN STUDENTS
              </h3>
              <h1 className="pt-[3rem] ml-4 mr-2 font-bold text-[2.5rem]">
                Shaping Minds & Transforming Futures
              </h1>
              <p className="pt-[1.7rem] mx-4 font-medium text-base text-justify text-black/60">
                Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea comm consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
              </p>
            </div>
          </div>

          <div className="bg-main-brasa-green mt-[4rem] h-[107rem] max-h-[1700px] sm:h-[1600px] w-full rounded-[2.5rem] mb-12">
            {/* Section 2 - Our Mission */}
            <div className="items-center justify-center text-center">
              <h1 className="pt-[6rem] font-bold tracking-[0.20rem]">OUR MISSION</h1>
              <h1 className="pt-5 font-semi-bold text-3xl m-6">
                Committed with providing resources and guidance.
              </h1>
            </div>
            <div className="flex flex-col mt-24 text-center mx-[2rem]">
              <div className="flex flex-col rounded-full bg-white justify-center items-center h-[7rem]">
                <h1 className="leading-200 font-bold text-xl">Best University Support</h1>
                <h3 className="font-regular items-center justify-center">Inc. Magazine</h3>
              </div>

              <div className="flex flex-col mt-8 rounded-full bg-white justify-center items-center h-[7rem]">
                <h1 className="leading-200 font-bold text-xl">Most Promising Startup</h1>
                <h3 className="font-regular items-center justify-center">Israeli Globes Award</h3>
              </div>

              <div className="flex flex-col mt-8 rounded-full bg-white justify-center items-center h-[7rem]">
                <h1 className="leading-200 font-bold text-xl">Best Hybrid Places to work</h1>
                <h3 className="font-regular items-center justify-center">2023 Built In</h3>
              </div>

              <div className="flex flex-col mt-8 rounded-full bg-white justify-center items-center h-[7rem]">
                <h1 className="leading-200 font-bold text-xl">Best Hybrid Places to Work</h1>
                <h3 className="font-regular items-center justify-center">Inc Magazine</h3>
              </div>
            </div>

            {/* Yellow background and image */}
            <div className=" bg-main-brasa-yellow rounded-3xl pb-16 mx-4 ">
              <div className="flex flex-col mt-[10rem] ">
                <h3 className="font-bold text-center pt-16 tracking-[0.20rem]">MEMBERSHIP</h3>
                <h1 className="leading-200 font-bold text-center text-3xl pb-6 pt-[0.7rem]">
                  Become a Member
                </h1>
                <p className="pt-[0.2rem] px-8 text-justify  font-medium text-base text-black/60 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea comm consequat. Duis aute irure
                  dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
                </p>
                <div
                  className="flex text-center justify-center items-center mt-16 self-center rounded-full bg-blue-500 
              text-white font-medium h-[4rem] w-[12rem]"
                >
                  <Link href="/become-member"> Join BRASA @ UCF </Link>
                </div>
              </div>
            </div>
          </div>

          <JoinNewsletter isMobile={true} />
          <div className="h-[4rem] bg-white"></div>
        </main>
      ) : (
        <main className="h-full bg-white"></main>
      )}
    </section>
  );
};

export default BecomeMember;
