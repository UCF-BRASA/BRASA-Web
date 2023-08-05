import { EventCard, GridSection } from "@components";
import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

import bailinho_pic from "/public/static/landing/our-events/bailinho_pic.png";
import churras_pic from "/public/static/landing/our-events/churras_pic.png";
import guest_speaker_pic from "/public/static/landing/our-events/guest_speaker_pic.jpg";
import hangout_pic from "/public/static/landing/our-events/hangout_pic.png";
import study_pic from "/public/static/landing/our-events/study_pic.jpg";
import workshop_pic from "/public/static/landing/our-events/workshop_pic.jpg";

interface HomeProps {
  windowWidth: number;
  windowHeight: number;
}

const displayEventCards = (eventType: string) => {
  if (eventType === "Social") {
    return (
      <div className="grid grid-cols-3 justify-items-center px-32">
        <EventCard
          image={churras_pic}
          imageAlt="UCF BRASA Churrasco Picture"
          tag="Main Event"
          eventTitle="BRASA Churrasco"
          eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <EventCard
          image={bailinho_pic}
          imageAlt="UCF BRASA Baile da BRASA Picture"
          tag="Main Event"
          eventTitle="Baile da BRASA"
          eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <EventCard
          image={hangout_pic}
          imageAlt="UCF BRASA Hangout Picture"
          tag="Casual"
          eventTitle="BRASA Hangout"
          eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    );
  } else {
    return (
      <div className="grid grid-cols-3 justify-items-center px-32">
        <EventCard
          image={guest_speaker_pic}
          imageAlt="UCF BRASA Guest Speakers Picture"
          tag="Networking"
          eventTitle="Guest Speakers"
          eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <EventCard
          image={workshop_pic}
          imageAlt="UCF BRASA Workshops Picture"
          tag="Learning"
          eventTitle="BRASA Workshops"
          eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
        <EventCard
          image={study_pic}
          imageAlt="UCF BRASA Study Picture"
          tag="Casual"
          eventTitle="BRASA Study"
          eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing el sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    );
  }
};

const Home: NextPage<HomeProps> = ({ windowWidth }) => {
  const [eventType, setEventType] = useState<string>("Social");
  return (
    <main className="h-full bg-white">
      {/* Section 1 */}

      {/* White Blob */}
      <div className="flex items-center justify-between mx-auto top-25 bg-main-brasa-yellow">
        <img src="static/landing/intro/white-blob.svg" />
      </div>

      {/* Main section 1's content */}
      <div className="absolute flex flex-row pl-24 overflow-x-hidden w-full">
        <div className="order-first w-screen">
          <h3 className="pt-16 font-bold text-base tracking-[0.20em]">
            EMPOWERING BRAZILIAN STUDENTS
          </h3>
          <h1 className="pt-5 leading-200 font-bold text-7xl">
            Unlocking potential, <br />
            building futures
          </h1>
          <p className="pt-5 font-medium text-base text-black/60">
            Assist Brazilians interested in studying at UCF by providing guidance
            <br /> throughout the application process via our social media channels,
            <br /> offering campus tours, sharing insights about life in the US and Orlando,
            <br /> and addressing any additional inquiries with UCF Global.
          </p>

          <div className="mt-10 text-base rounded-full md:h-14 md:w-44 bg-blue-500 text-white font-medium">
            <Link className="flex justify-center items-center w-full h-full" href="/become-member">
              Become a Member
            </Link>
          </div>
        </div>
        <div className="order-last w-screen h-screen landing-page-image-ellipse">
          <img
            className="h-full w-auto"
            src="static/landing/intro/main-pic.png"
            alt="Landing Pic"
          />
        </div>
      </div>

      {/* Curvy landing page area */}
      <img src="static/landing/intro/landing-area.svg" width={windowWidth} />

      {/* End of Section 1 */}

      {/* Section 2 */}
      <div className="flex flex-col justify-center items-center w-full">
        <h3 className="pt-16 font-bold text-base tracking-[0.20em]">WHAT WE DO</h3>
        <h1 className="pt-5 font-bold text-5xl">We offer support & guidance</h1>

        <div className="container mx-auto grid gap-x-20 gap-y-24 grid-cols-3 grid-rows-2 p-20 mt-8 w-full">
          <GridSection
            imageAlt="DB icon"
            imagePath="static/landing/what-we-do/db-icon.svg"
            title="Extensive University Database"
            description="We've compiled an extensive database of universities and colleges both in Brazil and abroad"
          />

          <GridSection
            imageAlt="Exam Icon"
            imagePath="static/landing/what-we-do/exam-icon.svg"
            title="Exam Preparation"
            description="We offer comprehensive resources and study materials to help you prepare for entrance exams"
          />

          <GridSection
            imageAlt="Study Abroad Icon"
            imagePath="static/landing/what-we-do/study-abroad-icon.svg"
            title="Study Abroad Opportunities"
            description="We guide you through the application process and also assist with the visa requirements"
          />

          <GridSection
            imageAlt="Career Guidance Icon"
            imagePath="static/landing/what-we-do/career-icon.svg"
            title="Career Guidance"
            description="We offer career counselling services to help you explore different options & identify your strengths and interests"
          />

          <GridSection
            imageAlt="Educational Resources Icon"
            imagePath="static/landing/what-we-do/education-icon.svg"
            title="Educational Resources"
            description="We offer educational resources to support your learning journey from study tips to time management techniques"
          />

          <GridSection
            imageAlt="Community Support Icon"
            imagePath="static/landing/what-we-do/community-icon.svg"
            title="Community Support"
            description="Join our online forums and connect with fellow students, educators, and professionals. balbaskdhasidasildhio"
          />
        </div>
      </div>
      {/* End of Section 2 */}

      {/* Section 3 */}
      <div className="h-[70rem] bg-main-brasa-blue rounded-t-[3rem] overflow-x-hidden mt-16">
        <div className="flex flex-col items-center text-white p-10 w-screen">
          <h3 className="pt-16 font-semi-bold text-base tracking-[0.20em]">OUR EVENTS</h3>
          <h1 className="pt-5 font-semi-bold text-5xl tracking-[0.02em] mb-12">
            Weekly & monthly events
          </h1>

          {/* <!-- Social/Professional Toggle --> */}
          <div className="flex items-center justify-center w-full mb-12">
            <label htmlFor="toggleB" className="flex items-center cursor-pointer">
              {/* <!-- toggle --> */}
              <div className="relative">
                {/* <!-- input --> */}
                <input
                  type="checkbox"
                  id="toggleB"
                  className="sr-only select-none"
                  onClick={() => setEventType(eventType === "Social" ? "Professional" : "Social")}
                />

                {/* <!-- dot --> */}
                <div className="dot absolute inset-y-[0.265rem] left-1 bg-white w-[48.5%] h-[85%] rounded-full transition">
                  <p className="pt-3.5 text-center text-main-brasa-blue select-none font-semi-bold">
                    {eventType}
                  </p>
                </div>

                {/* <!-- line --> */}
                <div className="grid grid-cols-2 justify-center items-center text-center bg-transparent border-[2.5px] border-solid border-white w-[17rem] h-[3.7rem] rounded-full">
                  <p className="order-first w-auto letter select-none font-semi-bold">Social</p>
                  <p className="order-last w-auto letter select-none font-semi-bold">
                    Professional
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
        {/* <!-- Events Cards --> */}
        {displayEventCards(eventType)}
      </div>
    </main>
  );
};

export default Home;
