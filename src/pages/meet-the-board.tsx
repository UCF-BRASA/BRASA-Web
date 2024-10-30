import { NextPage } from "next";

import { BoardBox, EBoardBox, JoinNewsletter } from "@components";
import { IMAGES } from "@util";

interface Props {
  isMobile: boolean;
}

const MeetTheBoard: NextPage<Props> = ({ isMobile }) => {
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
                  image={IMAGES.fachetti_pic}
                  imageAlt="Pedro Fachetti Picture"
                  officerTitle="President"
                  officerName="Pedro Fachetti"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.matheus_pic}
                  imageAlt="Matheus Agramunt Picture"
                  officerTitle="Vice President"
                  officerName="Matheus Agramunt"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.ella_pic}
                  imageAlt="Ella Santucci Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Ella Santucci"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.gabriel_pic}
                  imageAlt="Gabriel Couto Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Gabriel Couto"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.julie_pic}
                  imageAlt="Julie Rodriguez Picture"
                  officerTitle="Co-Head of Marketing"
                  officerName="Julie Rodriguez"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.jean_thomas_pic}
                  imageAlt="Jean-Thomas Mateesco Picture"
                  officerTitle="Co-Head of Marketing"
                  officerName="Jean-Thomas Mateesco"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.lucas_pic}
                  imageAlt="Lucas Guilherme Medeiros de Carvalho Picture"
                  officerTitle="Head of Finance"
                  officerName="Lucas Guilherme"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.nicole_pic}
                  imageAlt="Nicole Weeden Martins Picture"
                  officerTitle="Head of Professional Development"
                  officerName="Nicole Weeden"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.duda_pic}
                  imageAlt="Maria Eduarda (Duda) Joazeiro Gomes Picture"
                  officerTitle="Head of Technology"
                  officerName="Eduarda Joazeiro"
                  isMobile={isMobile}
                />
              </div>
            </div>
          </div>

          <div className="z-10 absolute h-[100rem] w-screen bg-main-brasa-green rounded-t-[2rem] mt-[87.5rem]"></div>
          <div className="z-20 absolute h-[100rem] w-full bg-main-brasa-yellow rounded-t-[2rem] mt-[155rem]">
            <div className="flex flex-col items-center w-full mt-[70rem] text-center">
              <h3 className="pt-16 font-bold text-4xl">Our Mission</h3>
              <p className="pt-5 font-base text-base w-auto px-[1rem]">
                Engage and support current Brazilian students at UCF by providing access to all
                available resources and events offered by the university and BRASA, ensuring a
                fulfilling and exceptional college experience.
              </p>
            </div>
          </div>

          {/* Div to add some white space because of the absolutes above */}
          <div className="w-full h-[260rem]"></div>

          <div className="text-center flex flex-col justify-center items-center w-full">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">MEET THE BOARD</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Department Members</h1>
          </div>

          {/* Board Section */}
          <div className="flex flex-wrap justify-evenly mx-auto w-full mt-20 mb-32">
            <BoardBox
              image={IMAGES.luca_pic}
              imageAlt="Luca de Vincenzo Picture"
              officerTitle="Professional Development Analyst"
              officerName="Luca de Vincenzo"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.gustavo_pic}
              imageAlt="Gustavo Manfredini picture"
              officerTitle="Event Planning Analyst"
              officerName="Gustavo Manfredini"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.pedro_pic}
              imageAlt="Pedro Evans Picture"
              officerTitle="Finance Analyst"
              officerName="Pedro Evans"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.enzo_pic}
              imageAlt="Enzo Alisson Lima Barros Picture"
              officerTitle="Event Planning Analyst"
              officerName="Enzo Alisson Lima Barros"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.sophia_pic}
              imageAlt="Sophia Cury Picture"
              officerTitle="Marketing Analyst"
              officerName="Sophia Cury"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.leo_pic}
              imageAlt="Leonora Carvalho Picture"
              officerTitle="Event Planning Analyst"
              officerName="Leonora Carvalho"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.eric_pic}
              imageAlt="Eric Tavora Picture"
              officerTitle="Marketing Analyst"
              officerName="Eric Tavora"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.chris_pic}
              imageAlt="Chris Pavie Suarez Picture"
              officerTitle="Event Planning Analyst"
              officerName="Chris Pavie Suarez"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.saki_pic}
              imageAlt="Sophia Sakakibara Picture"
              officerTitle="Professional Development Analyst"
              officerName="Sophia Sakakibara"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.victoria_pic}
              imageAlt="Victoria Ferreira Picture"
              officerTitle="Marketing Analyst"
              officerName="Victoria Ferreira"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.nino_pic}
              imageAlt="Nino Portugal Picture"
              officerTitle="Event Planning Analyst"
              officerName="Nino Portugal"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.guilherme_pic}
              imageAlt="Guilherme Tonini Aranega Picture"
              officerTitle="Professional Development Analyst"
              officerName="Guilherme Tonini Aranega"
              isMobile={isMobile}
            />
          </div>

          <div className="w-full bg-white h-[10rem]"></div>
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
            <div className="absolute z-30 w-4/5 mx-auto">
              <div className="flex flex-wrap justify-between mx-auto w-full mt-20">
                <EBoardBox
                  image={IMAGES.fachetti_pic}
                  imageAlt="Pedro Fachetti Picture"
                  officerTitle="President"
                  officerName="Pedro Fachetti"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.matheus_pic}
                  imageAlt="Matheus Agramunt Picture"
                  officerTitle="Vice President"
                  officerName="Matheus Agramunt"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.ella_pic}
                  imageAlt="Ella Santucci Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Ella Santucci"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.gabriel_pic}
                  imageAlt="Gabriel Couto Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Gabriel Couto"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.julie_pic}
                  imageAlt="Julie Rodriguez Picture"
                  officerTitle="Co-Head of Marketing"
                  officerName="Julie Rodriguez"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.jean_thomas_pic}
                  imageAlt="Jean-Thomas Mateesco Picture"
                  officerTitle="Co-Head of Marketing"
                  officerName="Jean-Thomas Mateesco"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.lucas_pic}
                  imageAlt="Lucas Guilherme Medeiros de Carvalho Picture"
                  officerTitle="Head of Finance"
                  officerName="Lucas Guilherme"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.nicole_pic}
                  imageAlt="Nicole Weeden Martins Picture"
                  officerTitle="Head of Professional Development"
                  officerName="Nicole Weeden"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.duda_pic}
                  imageAlt="Maria Eduarda (Duda) Joazeiro Gomes Picture"
                  officerTitle="Head of Technology"
                  officerName="Eduarda Joazeiro"
                  isMobile={isMobile}
                />
              </div>
            </div>
          </div>

          <div className="z-10 absolute h-[70rem] w-full bg-main-brasa-green rounded-t-[2rem] mt-[25rem]"></div>
          <div className="z-20 absolute h-[30rem] w-full bg-main-brasa-yellow rounded-t-[2rem] mt-[81rem]">
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

          <div className="flex flex-col justify-center items-center w-full mt-16">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">MEET THE BOARD</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Department Members</h1>
          </div>

          {/* <div className="grid gap-x-[-10rem] gap-y-42 grid-cols-5 w-full place-items-center mt-20"> */}
          <div className="flex flex-wrap justify-evenly mx-auto w-full mt-20">
            <BoardBox
              image={IMAGES.luca_pic}
              imageAlt="Luca de Vincenzo Picture"
              officerTitle="Professional Development Analyst"
              officerName="Luca de Vincenzo"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.gustavo_pic}
              imageAlt="Gustavo Manfredini picture"
              officerTitle="Event Planning Analyst"
              officerName="Gustavo Manfredini"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.pedro_pic}
              imageAlt="Pedro Evans Picture"
              officerTitle="Finance Analyst"
              officerName="Pedro Evans"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.enzo_pic}
              imageAlt="Enzo Alisson Barros Picture"
              officerTitle="Event Planning Analyst"
              officerName="Enzo Alisson Barros"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.sophia_pic}
              imageAlt="Sophia Cury Picture"
              officerTitle="Marketing Analyst"
              officerName="Sophia Cury"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.leo_pic}
              imageAlt="Leonora Carvalho Picture"
              officerTitle="Event Planning Analyst"
              officerName="Leonora Carvalho"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.eric_pic}
              imageAlt="Eric Tavora Picture"
              officerTitle="Marketing Analyst"
              officerName="Eric Tavora"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.chris_pic}
              imageAlt="Chris Pavie Suarez Picture"
              officerTitle="Event Planning Analyst"
              officerName="Chris Pavie Suarez"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.saki_pic}
              imageAlt="Sophia Sakakibara Picture"
              officerTitle="Professional Development Analyst"
              officerName="Sophia Sakakibara"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.victoria_pic}
              imageAlt="Victoria Ferreira Picture"
              officerTitle="Marketing Analyst"
              officerName="Victoria Ferreira"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.nino_pic}
              imageAlt="Nino Portugal Picture"
              officerTitle="Event Planning Analyst"
              officerName="Nino Portugal"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.guilherme_pic}
              imageAlt="Guilherme Tonini Aranega Picture"
              officerTitle="Professional Development Analyst"
              officerName="Guilherme Tonini Aranega"
              isMobile={isMobile}
            />
          </div>
          <JoinNewsletter />
        </div>
      )}
    </main>
  );
};

export default MeetTheBoard;
