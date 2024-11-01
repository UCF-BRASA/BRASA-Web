import { type FC } from "react";

const JoinNewsletter: FC = () => {
  return (
    <main>
      <div className="bg-main-brasa-green m-28 mt-8 rounded-[3rem] h-[22rem] flex flex-col items-center">
        <h1 className=" font-semi-bold text-white text-6xl justify-start pt-16">
          {" "}
          Join our newsletter!
        </h1>
        <div className="mb-12">
          <h2 className="font-medium text-white text-md mt-4 ">
            {" "}
            Don't miss out! Subscribe to receive the latest news and offers.
          </h2>
        </div>
        <form className="flex flex-container overflow-hidden">
          <input
            type="email"
            id="email"
            placeholder={"Enter your email address"}
            className="text-xs order-first pl-8 bg-white rounded-full h-[3.5rem] w-[24rem]
          items-end grow-0 static outline-0"
          />
          <button className="button bg-main-brasa-blue text-xs text-white m-2 py-3 px-6 rounded-full absolute ml-[18rem] hover:bg-blue-400 transition duration-200">
            Signup
          </button>
        </form>
      </div>
    </main>
  );
};

export default JoinNewsletter;
