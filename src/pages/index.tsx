import EventCard from "@components/Landing/EventCard";
import GridSection from "@components/Landing/GridSection";
import ImageCarousel from "@components/Landing/ImageCarousel";
import { Tab, Tabs } from "@nextui-org/tabs";
import { IMAGES, LANDING_PAGE_EVENTS, gridSectionsData } from "@util/constants";
import { NextPage } from "next";
import Image from "next/image";

interface HomeProps {
  windowWidth: number;
  isMobile: boolean;
}

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
  return (
    <main>
      {isMobile ? (
        // MOBILE LANDING PAGE
        <>
          <section className="rounded-b-lg">
            {/* Main section 1's content */}
            <Image
              src={IMAGES.mainPicLandingNewMobile}
              alt="Landing Pic"
              fill
              priority
              className="object-cover"
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
                The Brazilian Student Association at UCF is a dynamic community that supports
                <br /> Brazilian and Brazilian-affiliated students through academic, social, and
                professional
                <br /> initiatives. We host study sessions, social events, and career-building
                workshops to
                <br /> foster connection, celebrate our heritage, and help our members grow both
                <br /> personally and professionally.
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

              <Tabs
                aria-label="BRASA @ UCF Events"
                items={LANDING_PAGE_EVENTS}
                size="md"
                radius="full"
                color="primary"
                classNames={{
                  tabList: "bg-transparent border-[2.5px] border-white text-white w-[20rem]",
                  cursor: "w-full bg-white",
                  tab: "h-12 w-32",
                  tabContent:
                    "group-data-[selected=true]:text-main-brasa-blue text-white font-semi-bold",
                }}
              >
                {(item) => (
                  <Tab
                    className="w-full flex flex-row justify-center items-center"
                    key={item.eventType}
                    title={item.eventType}
                  >
                    <div className="w-full flex justify-center mt-10">
                      <ImageCarousel isMobile={isMobile}>
                        {item.eventInfo.map((event) => (
                          <div
                            key={event.imageAlt}
                            className="flex justify-center items-start w-full h-full relative"
                          >
                            <EventCard
                              image={event.image}
                              imageAlt={event.imageAlt}
                              tag={event.tag}
                              eventTitle={event.eventTitle}
                              eventDescription={event.eventDescription}
                              isMobile={isMobile}
                            />
                          </div>
                        ))}
                      </ImageCarousel>
                    </div>
                  </Tab>
                )}
              </Tabs>
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
                    The Brazilian Student Association at UCF is a dynamic community that supports
                    <br /> Brazilian and Brazilian-affiliated students through academic, social, and
                    professional
                    <br /> initiatives. We host study sessions, social events, and career-building
                    workshops to
                    <br /> foster connection, celebrate our heritage, and help our members grow both
                    <br /> personally and professionally.
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
                <div className="-top-[-10rem] -right-[10rem] w-[54rem] aspect-square overflow-hidden rounded-full ">
                  <Image
                    src={IMAGES.mainPicLandingNew}
                    sizes="100vw"
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
          <div className="flex flex-col justify-center items-center w-full mt-20">
            <h3 className="pt-16 font-bold text-base tracking-[0.20em]">WHAT WE DO</h3>
            <h1 className="pt-5 font-bold text-5xl">We offer support & guidance</h1>

            <div className="container mx-auto grid gap-x-20 gap-y-24 grid-cols-3 grid-rows-1 p-20 mt-8 w-full">
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

              <Tabs
                aria-label="BRASA @ UCF Events"
                items={LANDING_PAGE_EVENTS}
                size="md"
                radius="full"
                color="primary"
                classNames={{
                  tabList: "bg-transparent border-[2.5px] border-white text-white w-[20rem]",
                  cursor: "w-full bg-white",
                  tab: "h-12 w-32",
                  tabContent:
                    "group-data-[selected=true]:text-main-brasa-blue text-white font-semi-bold",
                }}
              >
                {(item) => (
                  <Tab
                    className="w-full flex flex-row justify-center items-center"
                    key={item.eventType}
                    title={item.eventType}
                  >
                    {item.eventInfo.map((event) => (
                      <div key={event.eventTitle} className="w-full flex justify-center mt-10">
                        <EventCard
                          image={event.image}
                          imageAlt={event.imageAlt}
                          tag={event.tag}
                          eventTitle={event.eventTitle}
                          eventDescription={event.eventDescription}
                          isMobile={isMobile}
                        />
                      </div>
                    ))}
                  </Tab>
                )}
              </Tabs>
            </div>
          </div>
          {/* Footer spacing */}
          <div className="bg-white h-[6rem]"></div>
        </div>
      )}
    </main>
  );
};

export default Home;
