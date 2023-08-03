import { BoardBox, EBoardBox } from "@components";
import { NextPage } from "next";

import alexia_pic from "/public/static/meet-board/alexia_pic.jpeg";
import chris_pic from "/public/static/meet-board/chris_pic.png";
import duda_pic from "/public/static/meet-board/duda_pic.jpeg";
import ella_pic from "/public/static/meet-board/ella_pic.jpeg";
import enzo_pic from "/public/static/meet-board/enzo_pic.jpeg";
import eric_pic from "/public/static/meet-board/eric_pic.png";
import fachetti_pic from "/public/static/meet-board/fachetti_pic.jpg";
import gabriel_pic from "/public/static/meet-board/gabriel_pic.jpeg";
import guilherme_pic from "/public/static/meet-board/guilherme_pic.jpeg";
import gustavo_pic from "/public/static/meet-board/gustavo_pic.jpg";
import jean_thomas_pic from "/public/static/meet-board/jean_thomas_pic.jpeg";
import julie_pic from "/public/static/meet-board/julie_pic.png";
import leo_pic from "/public/static/meet-board/leo_pic.png";
import luca_pic from "/public/static/meet-board/luca_pic.png";
import lucas_pic from "/public/static/meet-board/lucas_pic.jpeg";
import matheus_pic from "/public/static/meet-board/matheus_pic.jpg";
import nicole_pic from "/public/static/meet-board/nicole_pic.jpeg";
import nino_pic from "/public/static/meet-board/nino_pic.jpeg";
import pedro_pic from "/public/static/meet-board/pedro_pic.jpeg";
import saki_pic from "/public/static/meet-board/saki_pic.png";
import sophia_pic from "/public/static/meet-board/sophia_pic.png";
import victoria_pic from "/public/static/meet-board/victoria_pic.jpeg";

const MeetTheBoard: NextPage = () => {
  return (
    <main className="h-full bg-white">
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
              image={fachetti_pic}
              imageAlt="Pedro Fachetti Picture"
              officerTitle="President"
              officerName="Pedro Fachetti"
            />
            <EBoardBox
              image={matheus_pic}
              imageAlt="Matheus Agramunt Picture"
              officerTitle="Vice President"
              officerName="Matheus Agramunt"
            />
            <EBoardBox
              image={ella_pic}
              imageAlt="Ella Santucci Picture"
              officerTitle="Co-Head of Events"
              officerName="Ella Santucci"
            />
            <EBoardBox
              image={gabriel_pic}
              imageAlt="Gabriel Couto Picture"
              officerTitle="Co-Head of Events"
              officerName="Gabriel Couto"
            />
            <EBoardBox
              image={julie_pic}
              imageAlt="Julie Rodriguez Picture"
              officerTitle="Co-Head of Marketing"
              officerName="Julie Rodriguez"
            />
            <EBoardBox
              image={jean_thomas_pic}
              imageAlt="Jean-Thomas Mateesco Picture"
              officerTitle="Co-Head of Marketing"
              officerName="Jean-Thomas Mateesco"
            />
            <EBoardBox
              image={lucas_pic}
              imageAlt="Lucas Guilherme Medeiros de Carvalho Picture"
              officerTitle="Head of Finance"
              officerName="Lucas Guilherme"
            />
            <EBoardBox
              image={nicole_pic}
              imageAlt="Nicole Weeden Martins Picture"
              officerTitle="Head of Professional Development"
              officerName="Nicole Weeden"
            />
            <EBoardBox
              image={duda_pic}
              imageAlt="Maria Eduarda (Duda) Joazeiro Gomes Picture"
              officerTitle="Head of Technology"
              officerName="Eduarda Joazeiro"
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
          image={luca_pic}
          imageAlt="Luca de Vincenzo Picture"
          officerTitle="Professional Development Analyst"
          officerName="Luca de Vincenzo"
        />
        <BoardBox
          image={gustavo_pic}
          imageAlt="Gustavo Manfredini picture"
          officerTitle="Event Planning Analyst"
          officerName="Gustavo Manfredini"
        />
        <BoardBox
          image={pedro_pic}
          imageAlt="Pedro Evans Picture"
          officerTitle="Finance Analyst"
          officerName="Pedro Evans"
        />
        <BoardBox
          image={enzo_pic}
          imageAlt="Enzo Alisson Barros Picture"
          officerTitle="Event Planning Analyst"
          officerName="Enzo Alisson Barros"
        />
        <BoardBox
          image={sophia_pic}
          imageAlt="Sophia Cury Picture"
          officerTitle="Marketing Analyst"
          officerName="Sophia Cury"
        />
        <BoardBox
          image={leo_pic}
          imageAlt="Leonora Carvalho Picture"
          officerTitle="Event Planning Analyst"
          officerName="Leonora Carvalho"
        />
        <BoardBox
          image={alexia_pic}
          imageAlt="Alexia Uhlendorf Picture"
          officerTitle="Marketing Analyst"
          officerName="Alexia Uhlendorf"
        />
        <BoardBox
          image={eric_pic}
          imageAlt="Eric Tavora Picture"
          officerTitle="Marketing Analyst"
          officerName="Eric Tavora"
        />
        <BoardBox
          image={chris_pic}
          imageAlt="Chris Pavie Suarez Picture"
          officerTitle="Event Planning Analyst"
          officerName="Chris Pavie Suarez"
        />
        <BoardBox
          image={saki_pic}
          imageAlt="Sophia Sakakibara Picture"
          officerTitle="Professional Development Analyst"
          officerName="Sophia Sakakibara"
        />
        <BoardBox
          image={victoria_pic}
          imageAlt="Victoria Ferreira Picture"
          officerTitle="Marketing Analyst"
          officerName="Victoria Ferreira"
        />
        <BoardBox
          image={nino_pic}
          imageAlt="Nino Portugal Picture"
          officerTitle="Event Planning Analyst"
          officerName="Nino Portugal"
        />
        <BoardBox
          image={guilherme_pic}
          imageAlt="Guilherme Tonini Aranega Picture"
          officerTitle="Professional Development Analyst"
          officerName="Guilherme Tonini Aranega"
        />
      </div>

      {/* Board Section */}
    </main>
  );
};

export default MeetTheBoard;
