import { type FC } from "react";



const JoinNewsletter: FC = () => {
  return (
    <div className="bg-main-brasa-green m-28 mt-8 rounded-3xl h-[22rem] flex flex-col items-center">
      <h1 className=" font-semi-bold text-white text-6xl justify-start pt-16"> Join us and stay updated </h1>
      <h2 className="font-medium text-white text-sm mt-4"> Lorem ipsum dolor sit amet, consectetur 
      adipiscing</h2>
      <h2 className="font-medium text-white text-sm mb-12"> elit, sed do eiusmod tempor </h2>

      <form className="flex flex-container overflow-hidden">
        <input type="email" id="email" placeholder={"Enter your email address"} className="text-xs order-first pl-8 bg-white rounded-full h-[3.5rem] w-[24rem] 
        items-end grow-0 static outline-0"/>
        <button className="button bg-main-brasa-blue text-xs text-white m-2 py-3 px-6 rounded-full absolute ml-[18rem]">Signup</button>
      </form>
    </div>
  );
};

export default JoinNewsletter;
