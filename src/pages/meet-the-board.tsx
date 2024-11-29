import { NextPage } from "next";

import { BoardBox, EBoardBox, ImageCarousel, JoinNewsletter } from "@components";
import { eventImagesData, IMAGES } from "@util";
import { useState } from "react";

interface Props {
  isMobile: boolean;
  searchParams: Record<string, string> | null | undefined;
}

// interface BoardYear {
//   year: "2021" | "2022" | "2023";
// }

const MeetTheBoard: NextPage<Props> = ({ isMobile, searchParams }) => {
  const show = searchParams?.show;
  console.log("aaaaa");
  console.log(searchParams);

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
              <div className="flex flex-wrap justify-evenly mx-auto w-full mt-20">
                <EBoardBox
                  image={IMAGES.luca_pic}
                  imageAlt="Luca De Vincenzo Picture"
                  officerTitle="President"
                  officerName="Luca De Vincenzo"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.guilherme_pic}
                  imageAlt="Guilherme Aranega Picture"
                  officerTitle="Vice President"
                  officerName="Guilherme Tonini"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.nino_newpic}
                  imageAlt="Nino Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Nino Portugal"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.gio_pic}
                  imageAlt="Giovana Vicentin Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Giovana Vicentin"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.isa_pic}
                  imageAlt="Isadora Prado Picture"
                  officerTitle="Head of Marketing"
                  officerName="Isadora Prado"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.leo_pic}
                  imageAlt="Leonora Carvalho Picture"
                  officerTitle="Head of Finance"
                  officerName="Leonora Carvalho"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.saki_pic}
                  imageAlt="Sophia Sakakibara Picture"
                  officerTitle="Head of Professional Development"
                  officerName="Sophia Sakakibara"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.lucas_pic}
                  imageAlt="Lucas Bassotto Silveira Picture"
                  officerTitle="Head of Technology"
                  officerName="Lucas Bassotto Silveira"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
              </div>
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
            <BoardBox
              image={IMAGES.chris_pic}
              imageAlt="Christopher Pavie Suarez Picture"
              officerTitle="Event Planning Analyst"
              officerName="Chris Pavie Suarez"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.gustavo_new_pic}
              imageAlt="Gustavo Manfredini picture"
              officerTitle="Event Planning Analyst"
              officerName="Gustavo Manfredini"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.fernanda_pic}
              imageAlt="Fernanda Goncalves Picture"
              officerTitle="Event Planning Analyst"
              officerName="Fernanda Goncalves"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.carol_pic}
              imageAlt="Carolina Tello Picture"
              officerTitle="Event Planning Analyst"
              officerName="Carolina Tello"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.caio_pic}
              imageAlt="Caio Amaral Picture"
              officerTitle="Event Planning Analyst"
              officerName="Caio Amaral"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.carlos_pic}
              imageAlt="Carlos Eduardo Picture"
              officerTitle="Technology Analyst"
              officerName="Carlos Eduardo Torres"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.seabra_pic}
              imageAlt="Matheus Seabra Picture"
              officerTitle="Technology Analyst"
              officerName="Matheus Seabra"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.daghum_pic}
              imageAlt="Lucas Daghum Picture"
              officerTitle="Technology Analyst"
              officerName="Lucas Daghum"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.paulo_pic}
              imageAlt="Paulo Nascimento Picture"
              officerTitle="Technology Analyst"
              officerName="Paulo Nascimento"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.leticia_pic}
              imageAlt="Leticia Novaes Bispo Picture"
              officerTitle="Marketing Analyst"
              officerName="Leticia Novaes Bispo"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.mktgiovanna_pic}
              imageAlt="Giovanna Vesselizza Picture"
              officerTitle="Marketing Analyst"
              officerName="Giovanna Vesselizza"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.ana_pic}
              imageAlt="Ana Beatriz Dantas Picture"
              officerTitle="Marketing Analyst"
              officerName="Ana Beatriz Dantas"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.luana_pic}
              imageAlt="Luana Agramunt Picture"
              officerTitle="Marketing Analyst"
              officerName="Luana Agramunt"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.eric_newpic}
              imageAlt="Eric Tavora Picture"
              officerTitle="Marketing Analyst"
              officerName="Eric Tavora"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.matheus_pic}
              imageAlt="Matheus Agramunt Picture"
              officerTitle="Professional Development Analyst"
              officerName="Matheus Agramunt"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.isabele_pic}
              imageAlt="Isabelle Miguel Picture"
              officerTitle="Professional Development Analyst"
              officerName="Isabelle Miguel"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.mel_pic}
              imageAlt="Mel Wolff Picture"
              officerTitle="Professional Development Analyst"
              officerName="Mel Wolff"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.matheusf_pic}
              imageAlt="Matheus Gomes Picture"
              officerTitle="Finance Analyst"
              officerName="Matheus Gomes"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.manu_pic}
              imageAlt="Manuela Martins Picture"
              officerTitle="Finance Analyst"
              officerName="Manuela Martins"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.pedro_pic}
              imageAlt="Pedro Evangelista Picture"
              officerTitle="Finance Analyst"
              officerName="Pedro Evangelista"
              isMobile={isMobile}
            />
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

          <div className="flex justify-center">
            <div className="absolute z-30">
              {/* <div className="flex flex-wrap justify-between mx-auto w-full mt-20"> */}
              <div className="grid grid-cols-4 gap-x-8 w-full mt-20">
                <EBoardBox
                  image={IMAGES.luca_pic}
                  imageAlt="Luca De Vincenzo Picture"
                  officerTitle="President"
                  officerName="Luca De Vincenzo"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.guilherme_pic}
                  imageAlt="Guilherme Aranega Picture"
                  officerTitle="Vice President"
                  officerName="Guilherme Aranega"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.gio_pic}
                  imageAlt="Giovana Vicentin Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Giovana Vicentin"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.nino_newpic}
                  imageAlt="Nino Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Nino Portugal"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.isa_pic}
                  imageAlt="Isadora Prado Picture"
                  officerTitle="Head of Marketing"
                  officerName="Isadora Prado"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.leo_pic}
                  imageAlt="Leonora Carvalho Picture"
                  officerTitle="Head of Finance"
                  officerName="Leonora Carvalho"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.saki_pic}
                  imageAlt="Sophia Sakakibara Picture"
                  officerTitle="Head of Professional Development"
                  officerName="Sophia Sakakibara"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.lucas_pic}
                  imageAlt="Lucas Bassotto Silveira Picture"
                  officerTitle="Head of Technology"
                  officerName="Lucas Bassotto Silveira"
                  searchParams={searchParams}
                  isMobile={isMobile}
                />
              </div>
            </div>
          </div>

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

          {/* Div to add some white space because of the absolutes above */}
          <div className="w-full h-[110rem]"></div>

          <div className="flex flex-col justify-center items-center w-full mt-52">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">MEET THE BOARD</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Department Analysts</h1>
          </div>

          <section className="flex flex-wrap justify-evenly mx-auto w-full mt-20">
            <BoardBox
              image={IMAGES.chris_pic}
              imageAlt="Christopher Pavie Suarez Picture"
              officerTitle="Event Planning Analyst"
              officerName="Chris Pavie Suarez"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.gustavo_new_pic}
              imageAlt="Gustavo Manfredini picture"
              officerTitle="Event Planning Analyst"
              officerName="Gustavo Manfredini"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.fernanda_pic}
              imageAlt="Fernanda Goncalves Picture"
              officerTitle="Event Planning Analyst"
              officerName="Fernanda Goncalves"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.carol_pic}
              imageAlt="Carolina Tello Picture"
              officerTitle="Event Planning Analyst"
              officerName="Carolina Tello"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.caio_pic}
              imageAlt="Caio Amaral Picture"
              officerTitle="Event Planning Analyst"
              officerName="Caio Amaral"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.carlos_pic}
              imageAlt="Carlos Eduardo Picture"
              officerTitle="Technology Analyst"
              officerName="Carlos Eduardo Torres"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.seabra_pic}
              imageAlt="Matheus Seabra Picture"
              officerTitle="Technology Analyst"
              officerName="Matheus Seabra"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.daghum_pic}
              imageAlt="Lucas Daghum Picture"
              officerTitle="Technology Analyst"
              officerName="Lucas Daghum"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.paulo_pic}
              imageAlt="Paulo Nascimento Picture"
              officerTitle="Technology Analyst"
              officerName="Paulo Nascimento"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.leticia_pic}
              imageAlt="Leticia Novaes Bispo Picture"
              officerTitle="Marketing Analyst"
              officerName="Leticia Novaes Bispo"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.mktgiovanna_pic}
              imageAlt="Giovanna Vesselizza Picture"
              officerTitle="Marketing Analyst"
              officerName="Giovanna Vesselizza"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.ana_pic}
              imageAlt="Ana Beatriz Dantas Picture"
              officerTitle="Marketing Analyst"
              officerName="Ana Beatriz Dantas"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.luana_pic}
              imageAlt="Luana Agramunt Picture"
              officerTitle="Marketing Analyst"
              officerName="Luana Agramunt"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.eric_newpic}
              imageAlt="Eric Tavora Picture"
              officerTitle="Marketing Analyst"
              officerName="Eric Tavora"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.matheus_pic}
              imageAlt="Matheus Agramunt Picture"
              officerTitle="Professional Development Analyst"
              officerName="Matheus Agramunt"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.isabele_pic}
              imageAlt="Isabelle Miguel Picture"
              officerTitle="Professional Development Analyst"
              officerName="Isabelle Miguel"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.mel_pic}
              imageAlt="Mel Wolff Picture"
              officerTitle="Professional Development Analyst"
              officerName="Mel Wolff"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.matheusf_pic}
              imageAlt="Matheus Gomes Picture"
              officerTitle="Finance Analyst"
              officerName="Matheus Gomes"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.manu_pic}
              imageAlt="Manuela Martins Picture"
              officerTitle="Finance Analyst"
              officerName="Manuela Martins"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.pedro_pic}
              imageAlt="Pedro Evangelista Picture"
              officerTitle="Finance Analyst"
              officerName="Pedro Evangelista"
              isMobile={isMobile}
            />
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
