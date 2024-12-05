import JoinNewsletter from "@components/JoinNewsletter/JoinNewsletter";
import EventCard from "@components/Landing/EventCard";
import GridSection from "@components/Landing/GridSection";
import ImageCarousel from "@components/Landing/ImageCarousel";
import { IMAGES, eventImagesData, gridSectionsData, professionalImagesData } from "@util/constants";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

interface HomeProps {
  windowWidth: number;
  isMobile: boolean;
}

const displayEventCards = (isSocial: boolean, isMobile: boolean) => {
  return isSocial ? (
    <div className="grid grid-cols-3 justify-items-center gap-2 lg:px-24">
      <EventCard
        image={IMAGES.churras_pic}
        imageAlt="UCF BRASA Churrasco Picture"
        tag="Main Event"
        eventTitle="BRASA Churrasco"
        eventDescription="All you can eat and drink Brazilian Churrasco! Come enjoy the full Brazilian experience with live DJ music and the best caipirinhas in Orlando!"
        isMobile={isMobile}
      />
      <EventCard
        image={IMAGES.bailinho_pic}
        imageAlt="UCF BRASA Baile da BRASA Picture"
        tag="Main Event"
        eventTitle="Baile da BRASA"
        eventDescription="Baile Funk da BRASA! Partnerships with the best clubs in Orlando with open-bars and premium discounts!"
        isMobile={isMobile}
      />
      <EventCard
        image={IMAGES.hangout_pic}
        imageAlt="UCF BRASA Hangout Picture"
        tag="Casual"
        eventTitle="BRASA Hangout"
        eventDescription="Looking to meet new Brazilian students at UCF? We got your back! Come eat some coxinhas with us at our hangouts!"
        isMobile={isMobile}
      />
    </div>
  ) : (
    <div className="grid grid-cols-3 justify-items-center gap-2 lg:px-24">
      <EventCard
        image={IMAGES.guest_speaker_pic}
        imageAlt="UCF BRASA Guest Speakers Picture"
        tag="Networking"
        eventTitle="Guest Speakers"
        eventDescription="Connect with experts of your field with our re-ocurrent Guest Speaker events! Whatever area you are in, we have professinals to help you out!"
        isMobile={isMobile}
      />
      <EventCard
        image={IMAGES.workshop_pic}
        imageAlt="UCF BRASA Workshops Picture"
        tag="Learning"
        eventTitle="BRASA Workshops"
        eventDescription="Expand your skillsets with our workshops! Our workshop areas include finance, marketing, coding, how to get a job and general networking!"
        isMobile={isMobile}
      />
      <EventCard
        image={IMAGES.study_pic}
        imageAlt="UCF BRASA Study Picture"
        tag="Casual"
        eventTitle="BRASA Study"
        eventDescription="A light, fun and collaborative environment for you to study with fellow BRASA members! We have weekly study sessions for everyone!"
        isMobile={isMobile}
      />
    </div>
  );
};

const displayGridIconSection = () => {
  return gridSectionsData.map((section) => (
    <GridSection
      key={section.imageAlt}
      imageAlt={section.imageAlt}
      imagePath={section.imagePath}
      title={section.title}
      description={section.description}
    />
  ));
};

const Home: NextPage<HomeProps> = ({ windowWidth, isMobile }) => {
  const [isSocial, setIsSocial] = useState<boolean>(true);

  return (
    <main>
      {isMobile ? (
        // MOBILE LANDING PAGE
        <>
          <section className="rounded-b-lg">
            {/* Main section 1's content */}
            <Image
              src={IMAGES.mainPicLanding}
              alt="Landing Pic"
              fill
              priority
              className="bg-cover"
            />
            <div className="flex flex-col items-center justify-center text-center overflow-x-hidden w-full backdrop-brightness-[0.4] h-screen">
              <h1 className="relative tracking-[0.1rem] font-bold text-xs break-normal text-white">
                EMPOWERING BRAZILIAN STUDENTS
              </h1>
              <br />
              <h1 className="relative leading-200 font-bold text-5xl break-normal text-main-brasa-yellow">
                Unlocking <br />
                potential, <br />
                building <br />
                futures
              </h1>
            </div>
          </section>
          <section id="section-salve" className="h-[30rem] bg-main-brasa-yellow">
            <div className="h-full w-full flex flex-col justify-center pt-24 ">
              <h3 className="font-semi-bold text-center text-2xl tracking-[0.08em]">
                What is BRASA @ UCF?
              </h3>
              <p className="font-medium text-base text-black text-justify mt-4 pr-8 pl-10">
                Assist Brazilians interested in studying at UCF by providing guidance
                <br /> throughout the application process via our social media channels,
                <br /> offering campus tours, sharing insights about life in the US and Orlando,
                <br /> and addressing any additional inquiries with UCF Global.
              </p>
            </div>
            <div className="flex justify-center w-full relative z-30">
              <div className="text-base rounded-full bg-blue-500 text-white font-medium h-16 w-44">
                <a
                  className="flex justify-center items-center w-full h-full"
                  href="https://knightconnect.campuslabs.com/engage/organization/brasa"
                >
                  Become a Member
                </a>
              </div>
            </div>
          </section>
          <div className="h-10 bg-main-brasa-yellow"></div>
          <img
            src="static/landing/intro/landing-area.svg"
            alt="Smooth area on BRASA @ UCF Landing page"
            width={windowWidth}
          />

          <section className="flex flex-col justify-center items-center w-full mt-10">
            <div className="px-6 text-center">
              <h3 className="pt-16 font-bold text-base tracking-[0.20em]">WHAT WE DO</h3>
              <h1 className="pt-5 font-bold text-[2.5rem] leading-none">
                We offer support & guidance
              </h1>
            </div>

            <div className="container mx-auto grid gap-x-20 gap-y-16 grid-cols-1 px-5 mt-20 w-full">
              {displayGridIconSection()}
            </div>
          </section>
          <section className="bg-main-brasa-blue rounded-[2rem] overflow-x-hidden mt-24">
            <div className="flex flex-col items-center text-white w-full mb-16">
              <div className="text-center">
                <h3 className="pt-16 font-semi-bold text-base tracking-[0.20em]">OUR EVENTS</h3>
                <h1 className="pt-5 font-semi-bold text-[2.5rem] leading-none tracking-[0.02em] mb-12">
                  Weekly & monthly events
                </h1>
              </div>

              {/* <!-- Social/Professional Toggle --> */}
              <div className="flex items-center justify-center w-full mb-12 mt-3">
                <label htmlFor="toggleB" className="flex items-center cursor-pointer">
                  {/* <!-- toggle --> */}
                  <div className="relative">
                    {/* <!-- input --> */}
                    <input
                      type="checkbox"
                      id="toggleB"
                      className="sr-only select-none"
                      onClick={() => setIsSocial(!isSocial)}
                    />

                    {/* <!-- dot --> */}
                    <div className="dot absolute inset-y-[0.265rem] left-1 bg-white w-[48.5%] h-[85%] rounded-full transition">
                      <p className="pt-3.5 text-center text-main-brasa-blue select-none font-semi-bold">
                        {isSocial ? "Social" : "Professional"}
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

              {isSocial ? (
                <ImageCarousel imageData={eventImagesData} isMobile={true} />
              ) : (
                <ImageCarousel imageData={professionalImagesData} isMobile={true} />
              )}
            </div>
          </section>

          {/* Footer spacing */}
          <div className="bg-white h-40"></div>
        </>
      ) : (
        <div className="h-full bg-white">
          {/* Section 1 */}

          {/* White Blob */}
          <div className="flex items-center justify-between mx-auto top-25 bg-main-brasa-yellow">
            <img src="static/landing/intro/white-blob.svg" alt="navbar-white-blob" />
          </div>

          {/* Main section 1's content */}
          <div id="desktop-area" className="absolute pl-24 overflow-x-hidden w-full">
            <div className="grid grid-cols-2">
              <div className="flex flex-row">
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

                  <div className="mt-10 text-base rounded-full md:h-14 md:w-44 bg-blue-500 text-white font-medium hover:bg-blue-400 transition duration-200">
                    <a
                      className="flex justify-center items-center w-full h-full"
                      href="https://knightconnect.campuslabs.com/engage/organization/brasa"
                    >
                      Become a Member
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative w-full">
                <div className="-top-[-10rem] -right-[10rem] w-[54rem] aspect-square overflow-hidden rounded-full shadow-xl">
                  <Image
                    src={IMAGES.mainPicLanding}
                    sizes="33vw"
                    // priority
                    placeholder="blur"
                    className="h-full w-full object-cover"
                    alt="Landing Pic"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Curvy landing page area */}
          <img
            id="desktop-image"
            alt="Curvy area on BRASA @ UCF Landing page"
            src="static/landing/intro/landing-area.svg"
            width={windowWidth}
            loading="lazy"
          />

          {/* End of Section 1 */}

          {/* Section 2 */}
          <div className="flex flex-col justify-center items-center w-full">
            <h3 className="pt-16 font-bold text-base tracking-[0.20em]">WHAT WE DO</h3>
            <h1 className="pt-5 font-bold text-5xl">We offer support & guidance</h1>

            <div className="container mx-auto grid gap-x-20 gap-y-24 grid-cols-3 grid-rows-2 p-20 mt-8 w-full">
              {displayGridIconSection()}
            </div>
          </div>
          {/* End of Section 2 */}

          {/* Section 3 */}
          <div className="h-[65rem] bg-main-brasa-blue rounded-t-[3rem] overflow-x-hidden mt-16">
            <div className="flex flex-col items-center text-white p-10 w-full">
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
                      onClick={() => setIsSocial(!isSocial)}
                    />

                    {/* <!-- dot --> */}
                    <div className="dot absolute inset-y-[0.265rem] left-1 bg-white w-[48.5%] h-[85%] rounded-full transition">
                      <p className="pt-3.5 text-center text-main-brasa-blue select-none font-semi-bold">
                        {isSocial ? "Social" : "Professional"}
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
            {displayEventCards(isSocial, isMobile)}
          </div>

          <div className="absolute w-full h-48 bg-main-brasa-blue">
            <JoinNewsletter />
          </div>

          {/* Footer spacing */}
          <div className="bg-white h-[34rem]"></div>
        </div>
      )}
    </main>
  );
};

export default Home;
