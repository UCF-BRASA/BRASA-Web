import { NextPage } from "next";

import JoinNewsletter from "@components/JoinNewsletter/JoinNewsletter";
import ImageCarousel from "@components/Landing/ImageCarousel";
import BoardBox from "@components/Meet-Board/BoardBox";
import EBoardGrid from "@components/Meet-Board/EBoardGrid";
import { BOARD_MEMBERS, eventImagesData } from "@util/constants";
import { useState } from "react";

interface Props {
  isMobile: boolean;
}

// interface BoardYear {
//   year: "2021" | "2022" | "2023";
// }

const MeetTheBoard: NextPage<Props> = ({ isMobile }) => {
  const [boardYear, setBoardYear] = useState<"2021" | "2022" | "2023">("2021");

  return (
    <main>
      {isMobile ? (
        <div className="h-full w-screen bg-white">
          {/* E-Board Section */}
          <div className="text-center flex flex-col justify-center items-center w-full mt-20">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">MEET THE BOARD</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Head of Departments</h1>
          </div>

          <div className="">
            <div className="absolute z-30 w-full px-2">
              <EBoardGrid isMobile={isMobile} />
            </div>
          </div>

          <div className="z-10 absolute h-[130rem] w-screen bg-main-brasa-green rounded-t-[2rem] mt-[87.5rem]"></div>
          <div className="z-20 absolute h-[120rem] w-full bg-main-brasa-yellow rounded-t-[2rem] rounded-b-[2rem] mt-[190rem]">
            <div className="flex flex-col items-center w-full mt-[90rem] text-center">
              <h3 className="pt-16 font-bold text-4xl">Our Mission</h3>
              <p className="pt-5 font-base text-base w-auto px-[1rem]">
                Engage and support current Brazilian students at UCF by providing access to all
                available resources and events offered by the university and BRASA, ensuring a
                fulfilling and exceptional college experience.
              </p>
            </div>
          </div>

          {/* Div to add some white space because of the absolutes above */}
          <div className="w-full h-[315rem]"></div>

          <div className="text-center flex flex-col justify-center items-center w-full">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">MEET THE BOARD</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Department Members</h1>
          </div>

          {/* Board Section */}
          <div className="flex flex-wrap justify-evenly mx-auto w-full mt-20 mb-32">
            {BOARD_MEMBERS.map((member) => (
              <BoardBox
                key={member.officerName} // Use a unique key
                image={member.image}
                imageAlt={member.imageAlt}
                officerTitle={member.officerTitle}
                officerName={member.officerName}
                isMobile={isMobile}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="h-full bg-white">
          <div className="h-[10rem]"></div>
          {/* E-Board Section */}
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">MEET THE BOARD</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Head of Departments</h1>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute z-30 mt-20">
              <EBoardGrid isMobile={isMobile} />
            </div>
          </div>

          <div className="relative">
            <div className="z-10 absolute h-[70rem] w-full bg-main-brasa-green rounded-t-[2rem] mt-[25rem]"></div>
            <div className="z-20 absolute h-[30rem] w-full bg-main-brasa-yellow rounded-t-[2rem] mt-[90rem]">
              <div className="flex flex-col items-center w-full mt-40 text-center">
                <h3 className="pt-16 font-bold text-4xl">Our Mission</h3>
                <p className="pt-5 font-base text-base w-[25rem]">
                  Engage and support current Brazilian students at UCF by providing access to all
                  available resources and events offered by the university and BRASA, ensuring a
                  fulfilling and exceptional college experience.
                </p>
              </div>
            </div>
          </div>

          {/* Div to add some white space because of the absolutes above */}
          <div className="w-full h-[110rem]"></div>

          <div className="flex flex-col justify-center items-center w-full mt-52">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">MEET THE BOARD</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Department Analysts</h1>
          </div>

          <section className="flex flex-wrap justify-evenly mx-auto w-full mt-20">
            {BOARD_MEMBERS.map((member) => (
              <BoardBox
                key={member.officerName} // Use a unique key
                image={member.image}
                imageAlt={member.imageAlt}
                officerTitle={member.officerTitle}
                officerName={member.officerName}
                isMobile={isMobile}
              />
            ))}
          </section>
          <section className="bg-main-brasa-blue rounded-[2rem] overflow-x-hidden mt-24">
            <div className="flex flex-col items-center text-white w-full mb-16">
              <div className="text-center">
                <h3 className="pt-16 font-semi-bold text-base tracking-[0.20em]">BRASA HISTORY</h3>
                <h1 className="pt-5 font-semi-bold text-[2.5rem] leading-none tracking-[0.02em] mb-12">
                  Previous Boards
                </h1>
              </div>

              {/* <!-- Social/Professional Toggle --> */}
              <div className="flex items-center justify-center w-full mb-12 mt-3">
                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                  {/* <!-- toggle --> */}
                  <div className="relative">
                    {/* <!-- input --> */}
                    <input
                      type="checkbox"
                      id="toggleB"
                      className="sr-only select-none"
                      onClick={() => setBoardYear("2022")}
                    />

                    {/* <!-- dot --> */}
                    <div className="dot absolute inset-y-[0.265rem] left-1 bg-white w-[49.1%] h-[85%] rounded-full transition">
                      <p className="pt-3.5 text-center text-main-brasa-blue select-none font-semi-bold">
                        {boardYear}
                      </p>
                    </div>

                    {/* <!-- line --> */}
                    <div className="grid grid-cols-3 justify-center items-center text-center bg-transparent border-[2.5px] border-solid border-white w-[30rem] h-[3.7rem] rounded-full">
                      <p className="order-1 w-auto letter select-none font-semi-bold">2021</p>
                      <p className="order-2 w-auto letter select-none font-semi-bold">2022</p>
                      <p className="order-3 w-auto letter select-none font-semi-bold">2023</p>
                    </div>
                  </div>
                </label>
              </div>

              <ImageCarousel imageData={eventImagesData} isMobile={true} />
            </div>
          </section>
          <JoinNewsletter />
        </div>
      )}
    </main>
  );
};

export default MeetTheBoard;
