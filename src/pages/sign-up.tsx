import { DEBUG_MODE } from "@util";
import axios, { AxiosError } from "axios";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { FormEvent } from "react";

interface Props {
  windowWidth: number;
  windowHeight: number;
  isMobile: boolean;
}

interface RegisterElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  firstName: HTMLInputElement;
  lastName: HTMLInputElement;
  gender: HTMLSelectElement;
  dateOfBirth: HTMLInputElement;
  major: HTMLInputElement;
  schoolYear: HTMLSelectElement;
  originCity: HTMLInputElement;
  password: HTMLInputElement;
  confirmPassword: HTMLInputElement;
}

interface RegisterForm extends HTMLFormElement {
  readonly elements: RegisterElements;
}

const SignIn: NextPage<Props> = ({ isMobile }) => {
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<RegisterForm>) => {
    event.preventDefault();

    const target = event.currentTarget.elements;

    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;

    if (password !== confirmPassword) {
      return <p className="h-10 w-10 bg-red-600">PASSWORDS DON'T MATCH</p>;
    }

    const payload = {
      username: target.email.value,
      password: target.password.value,
      first_name: target.firstName.value,
      last_name: target.lastName.value,
      date_of_birth: target.dateOfBirth.value,
      gender: target.gender.value,
      origin_city: target.originCity.value,
      major: target.major.value,
      school_year: target.schoolYear.value,
    };

    const extraHeader = DEBUG_MODE ? "http://localhost:3000" : "https://brasa-api.up.railway.app";

    const apiDomain = DEBUG_MODE ? "http://localhost:8080" : "https://brasa-api.up.railway.app";
    const endpoint = "/api/v0.1/auth/register";
    const url = apiDomain + endpoint; // Replace with your API endpoint URL

    console.log("apiDomain" + apiDomain);
    console.log("endpoint" + endpoint);
    console.log("url" + url);

    const headers = {
      "Content-Type": "application/json", // Adjust based on your API requirements
      Accept: "application/json",
      "Access-Control-Allow-Origin": extraHeader,
    };

    console.log(JSON.stringify(payload, null, 4));

    try {
      await axios.post(url, payload, { headers });

      router.push("/login");
    } catch (e) {
      const error = e as AxiosError;
      console.error(error);
    }
  };

  return (
    <main>
      {isMobile ? (
        <main className="h-full w-full bg-white">
          <div className="py-28 flex flex-col items-center w-full h-full">
            <div className="h-full  shadow-xl mt-auto rounded-xl bg-light-grey px-2">
              <h1 className="pl-5 text-black font-bold text-[3rem] w-full rounded-t-xl bg-main-brasa-yellow">
                Registration
              </h1>
              <form
                onSubmit={handleSubmit}
                className="h-full w-full px-2 flex flex-col space-y-7 mt-8"
              >
                <div className="flex flex-row w-full space-x-[1rem]">
                  <div className="grid grid-cols-2 gap-x-5">
                    <div className="flex flex-col flex-auto">
                      <label htmlFor="firstname" className="text-black pl-2 font-bold">
                        First Name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder={"Enter your First Name"}
                        className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                      />
                    </div>
                    <div className="flex flex-col flex-auto">
                      <label htmlFor="lastname" className="pl-2 text-black font-bold">
                        Last Name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder={"Enter your Last Name"}
                        className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-x-5">
                  <div className="flex flex-col col-span-3">
                    <label htmlFor="email" className="pl-2 text-black font-bold">
                      UCF Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={"Enter your email address"}
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <h1 className="pl-2 text-black font-bold">Gender</h1>
                    <label htmlFor="gender"></label>
                    <select
                      id="gender"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    >
                      <option value="Prefer not to say">Select your gender</option>
                      <option value="Man">Man</option>
                      <option value="Woman">Woman</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer Not to Say</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="flex flex-col">
                    <label htmlFor="dob" className="pl-2 text-black font-bold">
                      Date of Birth
                    </label>
                    <input
                      id="dateOfBirth"
                      type="date"
                      placeholder="Enter your Last Name"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label htmlFor="cos" className="pl-2 text-black font-bold">
                      Major
                    </label>
                    <input
                      id="major"
                      type="text"
                      placeholder="Enter your course of study"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-x-5">
                  <div className="flex flex-col">
                    <p className="pl-2 text-black font-bold">School Year</p>
                    <label htmlFor="grade"></label>
                    <select
                      id="schoolYear"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    >
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Graduate">Graduate</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-black pl-2 font-bold">Origin City</p>
                    <input
                      type="text"
                      id="originCity"
                      placeholder="Enter your origin city"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-5">
                  <div className="flex flex-col">
                    <p className="pl-2 text-black font-bold">Password</p>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="pl-2 text-black font-bold">Confirm Password</p>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <input
                    type="submit"
                    value="Join BRASA @ UCF"
                    className="button font-semi-bold bg-main-brasa-blue text-sm text-white h-10 px-12 rounded-md hover:cursor-pointer mt-10 mb-7"
                  />
                </div>
              </form>
            </div>
          </div>
        </main>
      ) : (
        <section className="h-full w-full bg-white">
          <div className="pt-60 pb-60 flex justify-center">
            <div className="h-full  shadow-xl mt-auto rounded-xl w-[50rem] bg-light-grey">
              <h1 className="pl-5 text-black font-bold text-[3rem] w-full rounded-t-xl bg-main-brasa-yellow">
                Registration
              </h1>
              <form
                onSubmit={handleSubmit}
                className="h-full w-full px-5 flex flex-col space-y-7 mt-8"
              >
                <div className="flex flex-row w-full space-x-[1rem]">
                  <div className="flex flex-col flex-auto">
                    <label htmlFor="firstname" className="text-black pl-2 font-bold">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      placeholder={"Enter your First Name"}
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                  <div className="flex flex-col flex-auto">
                    <label htmlFor="lastname" className="pl-2 text-black font-bold">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder={"Enter your Last Name"}
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-x-5">
                  <div className="flex flex-col">
                    <label htmlFor="email" className="pl-2 text-black font-bold">
                      UCF Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder={"Enter your email address"}
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h1 className="pl-2 text-black font-bold">Gender</h1>
                    <label htmlFor="gender"></label>
                    <select
                      id="gender"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    >
                      <option value="Man">Man</option>
                      <option value="Woman">Woman</option>
                      <option value="Non-binary">Non-binary</option>
                      <option value="Other">Other</option>
                      <option value="Prefer not to say">Prefer Not to Say</option>
                    </select>
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="dob" className="pl-2 text-black font-bold">
                      Date of Birth
                    </label>
                    <input
                      id="dateOfBirth"
                      type="date"
                      placeholder="Enter your Last Name"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-x-5">
                  <div className="flex flex-col ">
                    <label htmlFor="cos" className="pl-2 text-black font-bold">
                      Major
                    </label>
                    <input
                      id="major"
                      type="text"
                      placeholder="Enter your course of study"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="pl-2 text-black font-bold">School Year</p>
                    <label htmlFor="grade"></label>
                    <select
                      id="schoolYear"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    >
                      <option value="Freshman">Freshman</option>
                      <option value="Sophomore">Sophomore</option>
                      <option value="Junior">Junior</option>
                      <option value="Senior">Senior</option>
                      <option value="Grad">Graduate</option>
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-black pl-2 font-bold">Origin City</p>
                    <input
                      type="text"
                      id="originCity"
                      placeholder="Enter your origin city"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-5">
                  <div className="flex flex-col">
                    <p className="pl-2 text-black font-bold">Password</p>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>

                  <div className="flex flex-col">
                    <p className="pl-2 text-black font-bold">Confirm Password</p>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      className="text-xs bg-white placeholder-gray-500 rounded-xl px-2 h-[3rem] w-full border-grey-200 border-solid border-2"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <input
                    type="submit"
                    value="Join BRASA @ UCF"
                    className="button font-semi-bold bg-main-brasa-blue text-sm text-white h-10 px-20 rounded-md hover:cursor-pointer mt-10 mb-7"
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default SignIn;
