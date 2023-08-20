import { setLoggedUser } from "@lib/user";
import { DEBUG_MODE } from "@util";
import axios, { AxiosError } from "axios";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent } from "react";

interface Props {
  windowWidth: number;
  windowHeight: number;
  isMobile: boolean;
}

interface LoginElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

interface LoginForm extends HTMLFormElement {
  readonly elements: LoginElements;
}

const SignIn: NextPage<Props> = ({ isMobile }) => {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<LoginForm>) => {
    event.preventDefault();

    const target = event.currentTarget.elements;

    const payload = {
      username: target.email.value,
      password: target.password.value,
    };

    try {
      const extraHeader = DEBUG_MODE ? "http://localhost:3000" : "https://brasaucf.com";

      const apiDomain = DEBUG_MODE ? "http://localhost:8080" : "https://brasaucf.com";
      const endpoint = "/api/v0.1/auth/login";
      const url = apiDomain + endpoint; // Replace with your API endpoint URL

      const headers = {
        "Content-Type": "application/json", // Adjust based on your API requirements
        Accept: "application/json",
        "Access-Control-Allow-Origin": extraHeader,
      };

      const response = await axios.post(url, payload, { headers, withCredentials: true });

      const {
        token,
        id,
        username,
        first_name,
        last_name,
        date_of_birth,
        gender,
        origin_city,
        major,
        school_year,
      } = response.data.data;

      setLoggedUser(
        id,
        token,
        username,
        first_name,
        last_name,
        date_of_birth,
        gender,
        origin_city,
        major,
        school_year
      );

      router.push("/");
    } catch (e) {
      const error = e as AxiosError;
      console.error(error);
    }
  };

  return (
    <main>
      {isMobile ? (
        <section className="h-full w-full bg-white">
          <div className="py-28 flex flex-col items-center w-full h-full">
            <div className="h-full shadow-xl mt-auto rounded-xl bg-light-grey w-[20rem]">
              <h1 className="pl-5 text-black font-bold text-[3rem] w-full rounded-t-xl bg-main-brasa-yellow">
                Login
              </h1>

              <form
                onSubmit={handleSubmit}
                className="h-full w-full px-3 mt-4 flex flex-col items-center space-y-3"
              >
                <div className="flex flex-col w-full">
                  <label htmlFor="email" className="pl-2 text-black font-bold">
                    UCF Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                  />
                </div>
                <div className="flex flex-col mt-6 w-full">
                  <label htmlFor="lastname" className="pl-2 text-black font-bold">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                  />

                  <div className="flex justify-center my-7">
                    <input
                      type="submit"
                      value="Login"
                      className="button font-semi-bold bg-main-brasa-blue text-sm text-white h-10 px-12 rounded-md hover:cursor-pointer"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-10 h-full shadow-xl rounded-xl bg-light-grey w-[20rem]">
              <div className="flex justify-center items-center my-5">
                <div className="flex flex-row justify-start space-x-2">
                  <p className="font-light">New to BRASA @ UCF?</p>
                  <Link
                    className="font-medium text-center text-blue-600 hover:text-blue-800"
                    href="/sign-up"
                  >
                    Sign up now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="h-full w-full bg-white">
          <div className="pt-48 pb-60 flex flex-col items-center">
            <div className="h-full shadow-xl mt-auto rounded-xl bg-light-grey w-[40rem]">
              <h3 className="pl-5 text-black font-bold text-[3rem] w-full rounded-t-xl bg-main-brasa-yellow">
                Login
              </h3>

              <form onSubmit={handleSubmit} className="h-full w-full pl-5 mt-6 pr-10">
                <div className="flex flex-col">
                  <label htmlFor="email" className="pt-2 pl-2 text-black font-bold">
                    UCF Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                  />
                </div>
                <div className="flex flex-col mt-6">
                  <label htmlFor="lastname" className="pt-2 pl-2 text-black font-bold">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                  />

                  <div className="flex justify-center mt-10 mb-7">
                    <input
                      type="submit"
                      value="Login"
                      className="button font-semi-bold bg-main-brasa-blue text-sm text-white h-10 w-[17rem] rounded-md hover:cursor-pointer"
                    />
                  </div>
                </div>
              </form>
            </div>

            <div className="mt-10 h-full shadow-xl rounded-xl bg-light-grey w-[40rem]">
              <div className="flex justify-center items-center my-5">
                <div className="flex flex-row justify-start space-x-2">
                  <p className="font-light">New to BRASA @ UCF?</p>
                  <Link
                    className="font-medium text-center text-blue-600 hover:text-blue-800"
                    href="/sign-up"
                  >
                    Sign up now!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default SignIn;
