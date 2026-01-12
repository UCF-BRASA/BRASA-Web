import UpcomingEventCard from "@components/UpcomingEvents/UpcomingEventCard";
import { UPCOMING_EVENTS_DATA } from "@util/constants";
import { NextPage } from "next";

export interface Props {
  isMobile?: boolean; // Optional for backward compatibility
}

const Events: NextPage<Props> = ({ isMobile }) => {
  return (
    <main>
      {/* Top spacing - responsive */}
      <div className="h-14 lg:h-[8rem]"></div>
      
      {/* Header section - responsive */}
      <div className="text-center flex flex-col justify-center items-center w-full mb-10 lg:mb-20">
        <h1 className="text-3xl font-bold tracking-[0.2rem] lg:text-6xl">UPCOMING EVENTS</h1>
        <p className="font-medium text-lg mt-4 lg:text-xl lg:mt-8">Don't miss out on our events!</p>
      </div>

      {/* Events grid - responsive layout */}
      <div className="flex flex-col space-y-6 lg:grid lg:grid-cols-2 lg:gap-20 lg:mx-28 lg:space-y-0">
        {UPCOMING_EVENTS_DATA.map((upcomingEvent) => (
          <UpcomingEventCard
            key={upcomingEvent.eventName}
            date={upcomingEvent.date}
            time={upcomingEvent.time}
            image={upcomingEvent.image}
            eventName={upcomingEvent.eventName}
            eventDescription={upcomingEvent.eventDescription}
            location={upcomingEvent.location}
            moreInfoLink={upcomingEvent.moreInfoLink}
            eventType={upcomingEvent.eventType}
            isPaid={upcomingEvent.isPaid}
            isAnnounced={upcomingEvent.isAnnounced}
            isMobile={isMobile || false}
          />
        ))}
      </div>
    </main>
  );
};

export default Events;
