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
                  image={IMAGES.luca_pic}
                  imageAlt="Luca De Vincenzo Picture"
                  officerTitle="President"
                  officerName="Luca de Vincenzo"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.guilherme_pic}
                  imageAlt="Guilherme Tonini Picture"
                  officerTitle="Vice President"
                  officerName="Guilherme Tonini"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.gio_pic}
                  imageAlt="Giovana Vincentim Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Giovana Vincentim"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.nino_pic}
                  imageAlt="Nino Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Nino Portugal"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.isa_pic}
                  imageAlt="Isadora Prado Picture"
                  officerTitle="Co-Head of Marketing"
                  officerName="Isadora Prado"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.eric_pic}
                  imageAlt="Eric Picture"
                  officerTitle="Co-Head of Marketing"
                  officerName="Eric Tavora"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.leo_pic}
                  imageAlt="Leonora Carvalho Picture"
                  officerTitle="Head of Finance"
                  officerName="Leonora Carvalho"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.sophia_pic}
                  imageAlt="Sophia Sakakibara Picture"
                  officerTitle="Head of Professional Development"
                  officerName="Sophia Sakakibara"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.lucas_pic}
                  imageAlt="Lucas Silveira Picture"
                  officerTitle="Head of Technology"
                  officerName="Lucas Bassotto Silveira"
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
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Department Analysts</h1>
          </div>

          {/* Board Section */}
          <div className="flex flex-wrap justify-evenly mx-auto w-full mt-20 mb-32">
            <BoardBox
              image={IMAGES.carlos_pic}
              imageAlt="Carlos Picture"
              officerTitle="Tech Team Analyst"
              officerName="Carlos Eduardo Torres"
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
              officerName="Pedro Evangelista"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.ana_pic}
              imageAlt="Ana Picture"
              officerTitle="Marketing Analyst"
              officerName="Ana Beatriz Dantas"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.leticia_pic}
              imageAlt="Leticia Bispo Picture"
              officerTitle="Marketing Analyst"
              officerName="Leticia Bispo"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.paulo_pic}
              imageAlt="Paulo Nascimento Picture"
              officerTitle="Tech Team Analyst"
              officerName="Paulo Nascimento"
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
              image={IMAGES.seabra_pic}
              imageAlt="Matheus Seabra Picture"
              officerTitle="Tech Team Analyst"
              officerName="Matheus Seabra"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.daghum_pic}
              imageAlt="Lucas Daghum Picture"
              officerTitle="Tech Team Analyst"
              officerName="Lucas Daghum"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.matheus_pic}
              imageAlt="Matheus Gomes Picture"
              officerTitle="Finance Analyst"
              officerName="Matheus Gomes"
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
              image={IMAGES.mel_pic}
              imageAlt="Mel Wolf Picture"
              officerTitle="Professional Development Analyst"
              officerName="Mel Wolf"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.carol_pic}
              imageAlt="Carol Picture"
              officerTitle="Events Analyst"
              officerName="Carolina Fernandes Tello"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.fernanda_pic}
              imageAlt="Carol Picture"
              officerTitle="Events Analyst"
              officerName="Fernanda Signorelli"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.fernando_pic}
              imageAlt="Fernando Picture"
              officerTitle="Events Analyst"
              officerName="Fernando Mendes"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.isabele_pic}
              imageAlt="Carol Picture"
              officerTitle="Events Analyst"
              officerName="Isabele Miguel"
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
                  image={IMAGES.luca_pic}
                  imageAlt="Luca de Vincenzo Picture"
                  officerTitle="President"
                  officerName="Luca de Vincenzo"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.guilherme_pic}
                  imageAlt="Guilherme Picture"
                  officerTitle="Vice President"
                  officerName="Guilherme Tonini"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.gio_pic}
                  imageAlt="Gio Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Giovana Vincentin"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.nino_pic}
                  imageAlt="Nino Picture"
                  officerTitle="Co-Head of Events"
                  officerName="Nino"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.isa_pic}
                  imageAlt="Isadora Picture"
                  officerTitle="Co-Head of Marketing"
                  officerName="Isadora Prado"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.eric_pic}
                  imageAlt="Eric Picture"
                  officerTitle="Co-Head of Marketing"
                  officerName="Eric Tavora"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.leo_pic}
                  imageAlt="Leonora Picture"
                  officerTitle="Head of Finance"
                  officerName="Leonora Carvalho"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.sophia_pic}
                  imageAlt="Saki Picture"
                  officerTitle="Head of Professional Development"
                  officerName="Sophia Sakakibara"
                  isMobile={isMobile}
                />
                <EBoardBox
                  image={IMAGES.lucas_pic}
                  imageAlt="Lucas Silveira Picture"
                  officerTitle="Head of Technology"
                  officerName="Lucas Bassotto Silveira"
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
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Department Analysts</h1>
          </div>

          {/* <div className="grid gap-x-[-10rem] gap-y-42 grid-cols-5 w-full place-items-center mt-20"> */}
          <div className="flex flex-wrap justify-evenly mx-auto w-full mt-20">
            <BoardBox
              image={IMAGES.carlos_pic}
              imageAlt="Carlos Picture"
              officerTitle="Professional Development Analyst"
              officerName="Carlos Eduardo Torres"
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
              officerName="Pedro Evangelista"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.ana_pic}
              imageAlt="Ana Picture"
              officerTitle="Marketing Analyst"
              officerName="Ana Beatriz Dantas"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.leticia_pic}
              imageAlt="Leticia Bispo Picture"
              officerTitle="Marketing Analyst"
              officerName="Leticia Bispo"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.paulo_pic}
              imageAlt="Paulo Nascimento Picture"
              officerTitle="Tech Team Analyst"
              officerName="Paulo Nascimento"
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
              image={IMAGES.seabra_pic}
              imageAlt="Matheus Seabra Picture"
              officerTitle="Tech Team Analyst"
              officerName="Matheus Seabra"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.daghum_pic}
              imageAlt="Lucas Daghum Picture"
              officerTitle="Tech Team Analyst"
              officerName="Lucas Daghum"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.matheus_pic}
              imageAlt="Matheus Picture"
              officerTitle="Finance Analyst"
              officerName="Matheus Gomes"
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
              image={IMAGES.mel_pic}
              imageAlt="Mel Wolf Picture"
              officerTitle="Professional Development Analyst"
              officerName="Mel Wolf"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.carol_pic}
              imageAlt="Carol Picture"
              officerTitle="Events Analyst"
              officerName="Carolina Fernandes Tello"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.fernanda_pic}
              imageAlt="Carol Picture"
              officerTitle="Events Analyst"
              officerName="Fernanda Signorelli"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.fernando_pic}
              imageAlt="Fernando Picture"
              officerTitle="Events Analyst"
              officerName="Fernando Mendes"
              isMobile={isMobile}
            />
            <BoardBox
              image={IMAGES.isabele_pic}
              imageAlt="Carol Picture"
              officerTitle="Events Analyst"
              officerName="Isabele Miguel"
              isMobile={isMobile}
            />
          </div>
          <JoinNewsletter isMobile={false} />
        </div>
      )}
    </main>
  );
};

export default MeetTheBoard;
