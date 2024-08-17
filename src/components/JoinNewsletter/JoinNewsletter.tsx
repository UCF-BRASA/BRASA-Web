import { type FC } from "react";

interface Props {
  isMobile: boolean;
}

const JoinNewsletter: FC<Props> = ({isMobile}) => {
  return (
    <main>
      {isMobile ? (
      <div className="bg-main-brasa-green mt-8 mx-4 rounded-3xl h-auto flex flex-col items-center">
        <h1 className=" font-semi-bold text-white text-2xl justify-start pt-12">Join our newsletter!</h1>
        <h2 className="font-medium text-center text-white text-sm mt-4 px-4 pb-8"> Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor </h2>

        <form className="flex flex-container overflow-hidden mb-6">
          <input type="email" id="email" placeholder={"Enter your email address"} className="text-xs order-first pl-8 bg-white 
          rounded-full h-[3rem] w-[18rem]  items-end grow-0 static outline-0 "/>
          <button className="button bg-main-brasa-blue text-xs text-white m-2 px-6 py-2 rounded-full absolute  ml-[12rem]">Signup</button>
        </form>
      </div>
      ) : (
        <div className="bg-main-brasa-green m-28 mt-8 rounded-[3rem] h-[22rem] flex flex-col items-center">
        <h1 className=" font-semi-bold text-white text-6xl justify-start pt-16"> Join our newsletter!</h1>
        <h2 className="font-medium text-white text-sm mt-4"> Lorem ipsum dolor sit amet, consectetur 
        adipiscing</h2>
        <h2 className="font-medium text-white text-sm mb-12"> elit, sed do eiusmod tempor </h2>

        <form className="flex flex-container overflow-hidden">
          <input type="email" id="email" placeholder={"Enter your email address"} className="text-xs order-first pl-8 bg-white rounded-full h-[3.5rem] w-[24rem] 
          items-end grow-0 static outline-0"/>
          <button className="button bg-main-brasa-blue text-xs text-white m-2 py-3 px-6 rounded-full absolute ml-[18rem]">Signup</button>
        </form>
      </div>
      )}
    </main>
  );
};

export default JoinNewsletter;
