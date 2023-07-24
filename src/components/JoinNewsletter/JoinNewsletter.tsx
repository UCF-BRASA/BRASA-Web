import { type FC } from "react";



const JoinNewsletter: FC = () => {
  return (
    <div className="bg-main-brasa-green m-36 rounded-3xl h-[22rem] flex flex-col items-center">
      <h1 className=" font-semi-bold text-white text-5xl justify-start pt-16"> Join us and stay updated </h1>
      <h2 className="font-medium text-white text-sm mt-4"> Lorem ipsum dolor sit amet, consectetur 
      adipiscing</h2>
      <h2 className="font-medium text-white text-sm mb-12"> elit, sed do eiusmod tempor </h2>

      <div className="bg-white rounded-full h-[3.5rem] container flex flex-row w-[24rem] items-center justify-between">      
        <h1 className="text-xs order-first pl-8">Enter your email address</h1>
        <button className="button bg-main-brasa-blue text-xs text-white m-2 py-3 px-6 rounded-full order-last">Signup</button>
      </div>

    </div>
  );
};

export default JoinNewsletter;
