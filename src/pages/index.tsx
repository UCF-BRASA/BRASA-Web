import EventCard from "@components/Landing/EventCard";
import GridSection from "@components/Landing/GridSection";
import ImageCarousel from "@components/Landing/ImageCarousel";
import { Tab, Tabs } from "@nextui-org/tabs";
import { IMAGES, LANDING_PAGE_EVENTS, gridSectionsData } from "@util/constants";
import { NextPage } from "next";
import Image from "next/image";

import { DeviceInfo } from "@utils/deviceDetection";

interface HomeProps {
  windowWidth?: number; // Deprecated - use CSS media queries
  isMobile?: boolean; // Deprecated - use CSS media queries  
  deviceInfo?: DeviceInfo;
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
      {/* Hero Section - Responsive Layout */}
      <section className="
        /* Mobile: Full-screen background image with overlay */
        rounded-b-lg relative lg:hidden
      ">
        <Image
          src={IMAGES.mainPicLandingNewMobile}
          alt="Landing Pic"
          fill
          priority
          className="object-cover lg:hidden"
        />
        <div className="flex flex-col items-center justify-center text-center overflow-x-hidden w-full backdrop-brightness-[0.4] h-screen lg:hidden">
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
      
      {/* Desktop Hero Section */}
      <div className="hidden lg:block h-full bg-white">
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
                  placeholder="blur"
                  className="h-full w-full object-cover"
                  alt="Landing Pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Info Section */}
      <section id="section-salve" className="lg:hidden h-[30rem] bg-main-brasa-yellow">
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
      
      {/* Mobile Yellow Section Spacer */}
      <div className="lg:hidden h-10 bg-main-brasa-yellow"></div>
      
      {/* Curvy Area Image - Responsive */}
      <img
        className="lg:hidden"
        src="static/landing/intro/landing-area.svg"
        alt="Smooth area on BRASA @ UCF Landing page"
        width={windowWidth}
      />
      <img
        id="desktop-image"
        className="hidden lg:block"
        alt="Curvy area on BRASA @ UCF Landing page"
        src="static/landing/intro/landing-area.svg"
        width={windowWidth}
        loading="lazy"
      />

      {/* What We Do Section - Responsive */}
      <section className="flex flex-col justify-center items-center w-full mt-10 lg:mt-20">
        <div className="
          /* Mobile: Side padding */
          px-6 text-center
          /* Desktop: No side padding */
          lg:px-0
        ">
          <h3 className="pt-16 font-bold text-base tracking-[0.20em]">WHAT WE DO</h3>
          <h1 className="
            /* Mobile: Smaller text */
            pt-5 font-bold text-[2.5rem] leading-none
            /* Desktop: Larger text */
            lg:text-5xl
          ">
            We offer support & guidance
          </h1>
        </div>

        <div className="
          /* Mobile: Single column with side padding */
          container mx-auto grid gap-x-20 gap-y-16 grid-cols-1 px-5 mt-20 w-full
          /* Desktop: Three columns with more padding */
          lg:grid-cols-3 lg:grid-rows-1 lg:p-20 lg:mt-8
        ">
          {displayGridIconSection()}
        </div>
      </section>
      
      {/* Events Section - Responsive */}
      <section className="
        /* Mobile: Rounded top, close to top */
        bg-main-brasa-blue rounded-[2rem] overflow-x-hidden mt-24
        /* Desktop: More rounded, more margin, fixed height */
        lg:h-[65rem] lg:rounded-t-[3rem] lg:mt-16
      ">
        <div className="flex flex-col items-center text-white w-full mb-16 lg:p-10 lg:mb-0">
          <div className="text-center">
            <h3 className="pt-16 font-semi-bold text-base tracking-[0.20em]">OUR EVENTS</h3>
            <h1 className="
              /* Mobile: Smaller text */
              pt-5 font-semi-bold text-[2.5rem] leading-none tracking-[0.02em] mb-12
              /* Desktop: Larger text */
              lg:text-5xl
            ">
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
                {/* Mobile: Carousel Layout */}
                <div className="lg:hidden w-full flex justify-center mt-10">
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
                
                {/* Desktop: Grid Layout */}
                <div className="hidden lg:block">
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
                </div>
              </Tab>
            )}
          </Tabs>
        </div>
      </section>

      {/* Footer spacing - Responsive */}
      <div className="
        /* Mobile: Less spacing */
        bg-white h-40
        /* Desktop: More spacing */
        lg:h-[6rem]
      "></div>
    </main>
  );
};

export default Home;
