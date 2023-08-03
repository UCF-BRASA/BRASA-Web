import { NextPage } from "next";

interface Props {
  windowWidth: number;
  windowHeight: number;
}

const BecomeMember: NextPage<Props> = ({ windowWidth }) => {
  return (
    <main className="h-full bg-white">
      {/* Section 1 - Intro */}

      {/* Yellow blob on top-right hand corner */}
      <div className="flex justify-end bg-white mb-[8rem]">
        <img src="become-member/intro/yellow-blob.svg" className="h-[15rem]" />
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
          <p className="pt-5 font-medium text-base text-black/60 w-[30rem] break-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea comm consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.
          </p>
        </div>
      </div>

      {/* Curvy area */}
      <img src="become-member/intro/intro-gy-area.svg" width={windowWidth} className="mt-[10rem]" />
    </main>
  );
};

export default BecomeMember;
