import JoinNewsletter from "@components/JoinNewsletter/JoinNewsletter";
import { IMAGES } from "@util/constants";
import { NextPage } from "next";
import Image from "next/image";

interface Props {
  windowWidth: number;
  isMobile: boolean;
}

const BecomeMember: NextPage<Props> = ({ windowWidth, isMobile }) => {
  return (
    <main>
      {isMobile ? (
        <section className="h-full w-screen bg-white">
          {/* Section 1 - Intro */}
          {/* Yellow blob on top-right hand corner */}
          <div className="absolute flex justify-end bg-white mb-[2rem] w-full z-0 top-0 right-0">
            <img
              src="static/become-member/intro/yellow-blob.svg"
              alt="yellow-blob-svg"
              className="h-[15rem]"
            />
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
                BRASA UCF, the Brazilian Student Association at the University of Central Florida,
                is a prominent organization dedicated to supporting Brazilian students in Orlando.
                With a strong focus on academic, professional, and social development, BRASA UCF
                serves as a vital resource and community for Brazilian students seeking to thrive in
                their educational journey.
              </p>
            </div>
          </div>

          <div className="bg-main-brasa-green mt-[4rem] pt-1 pb-24 w-full rounded-[2.5rem] mb-12">
            {/* Yellow background and image */}
            <div className=" bg-main-brasa-yellow rounded-3xl pb-16 mx-4">
              <div className="flex flex-col mt-[10rem] ">
                <h3 className="font-bold text-center pt-16 tracking-[0.20rem]">MEMBERSHIP</h3>
                <h1 className="leading-200 font-bold text-center text-3xl pb-6 pt-[0.7rem]">
                  Become a Member
                </h1>
                <p className="pt-[0.2rem] px-8 text-justify  font-medium text-base text-black/60 ">
                  BRASA @ UCF, the Brazilian Student Association at the University of Central
                  Florida, is a prominent organization dedicated to supporting Brazilian students in
                  Orlando. With a strong focus on academic, professional, and social development,
                  BRASA UCF serves as a vital resource and community for Brazilian students seeking
                  to thrive in their educational journey.
                </p>
                <div
                  className="flex text-center justify-center items-center mt-16 self-center rounded-full bg-blue-500
              text-white font-medium h-[4rem] w-[12rem]"
                >
                  <a href="https://knightconnect.campuslabs.com/engage/organization/brasa">
                    {" "}
                    Join BRASA @ UCF{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[4rem] bg-white" />
        </section>
      ) : (
        <section className="h-full bg-white">
          {/* Section 1 - Intro */}
          {/* Yellow blob on top-right hand corner */}
          <div className="flex justify-end bg-white mb-[8rem]">
            <img
              src="/static/become-member/intro/yellow-blob.svg"
              alt="yellow-blob-svg"
              className="h-[15rem]"
            />
          </div>
          {/*  */}
          <div className="absolute flex flex-row pl-24 my-[-13rem] overflow-x-hidden w-full">
            <div className="order-first w-screen">
              <h3 className="pt-16 font-bold text-base tracking-[0.20em]">
                EMPOWERING BRAZILIAN STUDENTS
              </h3>
              <h1 className="pt-5 leading-200 font-bold text-7xl">
                Shaping Minds,
                <br /> Transforming Futures
              </h1>
              <p className="pt-5 font-medium text-base text-black/60 w-[33rem] break-normal">
                The Brazilian Student Association, commonly known as BRASA is a worldwide student
                organization with chapters in more than 70 universities and more than 5 countries.
                The common goal of every chapter is to empower the next generation of leaders for a
                better Brazil.
              </p>
            </div>
          </div>
          {/* Curvy area */}
          <img
            src="/static/become-member/intro/intro-gy-area.svg"
            alt="Intro Curvy Area"
            width={windowWidth}
            className="mt-[10rem]"
          />

          <div className="bg-main-brasa-green">
            <div className="h-20 w-full bg-main-brasa-green"></div>
            {/* Yellow background and image */}
            <div className="w-full flex justify-center">
              <div className="container flex flex-row items-center justify-between bg-main-brasa-yellow mx-40 mb-40 rounded-[5rem] h-[38rem] w-[75rem]">
                <div className="flex flex-col gap-y-10 text-left ml-20">
                  <h3 className="font-bold tracking-[0.20em]">MEMBERSHIP</h3>
                  <h1 className="leading-200 font-bold text-5xl">Become a Member</h1>
                  <p className="font-medium text-base text-justify text-black/60 w-[25rem] break-normal">
                    BRASA @ UCF, the Brazilian Student Association at the University of Central
                    Florida, is a prominent organization dedicated to supporting Brazilian students
                    in Orlando. With a strong focus on academic, professional, and social
                    development, BRASA UCF serves as a vital resource and community for Brazilian
                    students seeking to thrive in their educational journey.
                  </p>
                  <div className="flex justify-center items-center text-base rounded-full md:h-14 md:w-44 bg-blue-500 text-white font-medium hover:bg-blue-400 transition duration-200">
                    <a
                      className="flex text-center justify-center items-center w-full h-full"
                      href="https://knightconnect.campuslabs.com/engage/organization/brasa"
                    >
                      Join BRASA @ UCF
                    </a>
                  </div>
                </div>
                <div>
                  <Image
                    src={IMAGES.board_pic}
                    alt="Brasa Board Picture"
                    sizes="100vw"
                    className=" w-[40rem] h-[40rem] p-16 ml-12 rounded-[5rem] object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Background after yellow board */}
            <div className="pt-2 bg-main-brasa-green"></div>
          </div>
          <div className="mt-20">
            <JoinNewsletter />
          </div>
        </section>
      )}
    </main>
  );
};

export default BecomeMember;
