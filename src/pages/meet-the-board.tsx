import JoinNewsletter from "@components/JoinNewsletter/JoinNewsletter";
import ImageCarousel from "@components/Landing/ImageCarousel";
import BoardBox from "@components/Meet-Board/BoardBox";
import EBoardGrid from "@components/Meet-Board/EBoardGrid";
import { Tab, Tabs } from "@nextui-org/tabs";

import { BOARD_MEMBERS } from "@util/constants";
import { NextPage } from "next";
import { useState } from "react";

interface Props {
  isMobile: boolean;
}

interface ITabs {
  id: string;
  label: string;
  year: "2021" | "2022" | "2023";
  boardData: { id: string; nani: string }[];
  // content: string;
}

// const tabs: ITabs[] = [
//   {
//     id: "photos",
//     label: "Photos",
//     year: "2021",
//     content:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//   },
//   {
//     id: "music",
//     label: "Music",
//     year: "2022",
//     content:
//       "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//   },
//   {
//     id: "videos",
//     label: "Videos",
//     year: "2023",
//     content:
//       "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//   },
// ];

const tabs: ITabs[] = [
  {
    id: "photos",
    year: "2021",
    label: "Photos",
    boardData: [
      {
        id: "photos",
        nani: "photos",
      },
      {
        id: "photos2",
        nani: "photos2",
      },
      {
        id: "photos3",
        nani: "photos3",
      },
      {
        id: "photos4",
        nani: "photos4",
      },
      {
        id: "photos5",
        nani: "photos5",
      },
    ],
  },
  {
    id: "music",
    label: "Music",
    year: "2022",
    boardData: [
      {
        id: "music",
        nani: "music",
      },
      {
        id: "music2",
        nani: "music2",
      },
      {
        id: "music3",
        nani: "music3",
      },
      {
        id: "music4",
        nani: "music4",
      },
      {
        id: "music5",
        nani: "music5",
      },
    ],
  },
  {
    id: "videos",
    label: "Videos",
    year: "2023",
    boardData: [
      {
        id: "videos",
        nani: "videos",
      },
      {
        id: "videos2",
        nani: "videos2",
      },
      {
        id: "videos3",
        nani: "videos3",
      },
      {
        id: "videos4",
        nani: "videos4",
      },
      {
        id: "videos5",
        nani: "videos5",
      },
    ],
  },
];

const MeetTheBoard: NextPage<Props> = ({ isMobile }) => {
  const [selectedPrevBoardTab, setSelectedPrevBoardTab] = useState<"2021" | "2022" | "2023">(
    "2021"
  );
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
                <h1 className="pt-5 font-semi-bold text-[2.5rem] leading-none tracking-[0.02em] mb-8">
                  Previous Executive Boards
                </h1>
              </div>

              <Tabs
                aria-label="Previous Executive Boards"
                items={tabs}
                size="md"
                radius="full"
                color="primary"
                classNames={{
                  tabList: "bg-transparent border-[2.5px] border-white text-white w-[20rem]",
                  cursor: "w-full bg-white",
                  tab: "h-12 w-32",
                  tabContent:
                    "group-data-[selected=true]:text-main-brasa-blue text-white font-semi-bold",
                }}
              >
                {(item) => {
                  return (
                    <Tab className="w-full" key={item.id} title={item.year}>
                      <ImageCarousel>
                        {item.boardData.map((data, index) => (
                          <div
                            key={data.id}
                            className="flex flex-row justify-center items-center w-[20rem] h-[20rem] bg-white"
                          >
                            <p className="text-red-500">{data.nani}</p>
                          </div>
                        ))}
                      </ImageCarousel>
                    </Tab>
                  );
                }}
              </Tabs>
            </div>
          </section>
          <JoinNewsletter />
        </div>
      )}
    </main>
  );
};

export default MeetTheBoard;
