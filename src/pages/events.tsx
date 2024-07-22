import {} from "@components";
import UpcomingEvents from "@components/UpcomingEvents/UpcomingEvents";
import { IMAGES } from "@util";
import { NextPage } from "next";

export interface Props {
  isMobile: boolean;
}

export const Events: NextPage<Props> = ({ isMobile }) => {
  return (
    <main>
      {isMobile ? (
        <div>
          <div className="h-28 justify-center items-center text-center"></div>
          <div className="bg-white bg-cover bg-center">
            <div className="bg-white bg-cover bg-center h-20">
              <div className="h-full w-screen bg-white">
                <div className="text-center flex flex-col justify-center items-center w-full mt-20">
                  <h1 className="text-black font-bold text-center text-[1.75rem]">
                    UPCOMING EVENTS
                  </h1>
                </div>
              </div>
            </div>
            <div>
              <UpcomingEvents
                image={IMAGES.churras_pic}
                imageAlt="Churrasco Picture"
                eventsName="Churrasco Brasa"
                location="300 Dalhausser Ln, Oviedo, FL 32765"
                date="TO BE ANNOUNCED"
                isMobile={isMobile}
                isPaid={false}
              />
            </div>
            <div>
              <UpcomingEvents
                image={IMAGES.bailinho_pic}
                imageAlt="Bailinho Picture"
                eventsName="Bailinho Brasa"
                location="5250 International Dr, Orlando, FL 32819"
                date="TO BE ANNOUNCED"
                isMobile={isMobile}
              />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="h-20"></div>
          <div className="bg-white bg-cover bg-center">
            <div className="bg-white bg-cover bg-center h-20">
              <h1 className="text-black font-bold justify-center items-center text-[1.75rem] ml-20 mt-24">
                UPCOMING EVENTS
              </h1>
            </div>
            <div>
              <UpcomingEvents
                image={IMAGES.churras_pic}
                imageAlt="Churrasco Picture"
                eventsName="Churrasco Brasa"
                location="300 Dalhausser Ln, Oviedo, FL 32765"
                date="TO BE ANNOUNCED"
                isMobile={isMobile}
                isPaid={false}
              />
            </div>
            <div>
              <UpcomingEvents
                image={IMAGES.bailinho_pic}
                imageAlt="Bailinho Picture"
                eventsName="Bailinho Brasa"
                location="5250 International Dr, Orlando, FL 32819"
                date="TO BE ANNOUNCED"
                isMobile={isMobile}
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Events;
