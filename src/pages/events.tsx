import UpcomingEvents from "@components/UpcomingEvents/UpcomingEvents";
import { IMAGES } from "@util/constants";
import { NextPage } from "next";

export interface Props {
  isMobile: boolean;
}

export const Events: NextPage<Props> = ({ isMobile }) => {
  return (
    <>
      {isMobile ? (
        <main>
          {/* Events main */}
          <div className="text-center flex flex-col justify-center items-center w-full mt-20 mb-10">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">COME HANG OUT</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Upcoming Events</h1>
          </div>

          <UpcomingEvents
            image={IMAGES.churras_pic}
            imageAlt="Churrasco Picture"
            eventsName="Churrasco BRASA"
            location="300 Dalhausser Ln, Oviedo, FL 32765"
            date="TBD"
            eventType="Professional"
            isMobile={isMobile}
            isPaid={false}
          />

          <UpcomingEvents
            image={IMAGES.bailinho_pic}
            imageAlt="Bailinho Picture"
            eventsName="Bailinho Brasa"
            location="5250 International Dr, Orlando, FL 32819"
            date="TBD"
            eventType="Social"
            isMobile={isMobile}
            isPaid={true}
          />
        </main>
      ) : (
        <main>
          <div className="h-20"></div>
          <div className="bg-white bg-cover bg-center">
            {/* Events main */}
            <div className="text-center flex flex-col justify-center items-center w-full mt-20 mb-20">
              <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">COME HANG OUT</h3>
              <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Upcoming Events</h1>
            </div>

            <UpcomingEvents
              image={IMAGES.churras_pic}
              imageAlt="Churrasco Picture"
              eventsName="Churrasco BRASA"
              location="300 Dalhausser Ln, Oviedo, FL 32765"
              date="TBD"
              eventType="Social"
              isMobile={isMobile}
              isPaid={false}
            />

            <UpcomingEvents
              image={IMAGES.bailinho_pic}
              imageAlt="Bailinho Picture"
              eventsName="Bailinho Brasa"
              location="5250 International Dr, Orlando, FL 32819"
              date="TBD"
              eventType="Social"
              isMobile={isMobile}
              isPaid={true}
            />
          </div>
        </main>
      )}
    </>
  );
};

export default Events;
