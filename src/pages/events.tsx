import UpcomingEventCard from "@components/UpcomingEvents/UpcomingEventCard";
import { UPCOMING_EVENTS_DATA } from "@util/constants";
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
          <div className="text-center flex flex-col justify-center items-center w-full mt-14 mb-10">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">COME HANG OUT</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Upcoming Events</h1>
          </div>

          {UPCOMING_EVENTS_DATA.length === 0 ? (
            <div className="mx-6 mb-12 flex flex-col items-center justify-center rounded-2xl border border-black/[0.12] bg-white px-6 py-10 text-center shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.24rem] text-black/[0.55] uppercase">
                <span className="h-2 w-2 rounded-full bg-main-brasa-yellow"></span>
                <span>Stay tuned</span>
              </div>
              <p className="mt-4 text-2xl font-bold text-black">No upcoming events at the moment.</p>
              <p className="mt-3 text-base font-regular text-black/[0.7]">
                We&apos;re currently planning our next events. Check back soon!
              </p>
            </div>
          ) : (
            UPCOMING_EVENTS_DATA.map((upcomingEvent) => (
              <UpcomingEventCard
                key={upcomingEvent.eventName}
                date={upcomingEvent.date}
                time={upcomingEvent.time}
                image={upcomingEvent.image}
                eventName={upcomingEvent.eventName}
                eventDescription={upcomingEvent.eventDescription}
                location={upcomingEvent.location}
                moreInfoLink={upcomingEvent.moreInfoLink}
                buyTicketLink={upcomingEvent.buyTicketLink}
                eventType={upcomingEvent.eventType}
                isPaid={upcomingEvent.isPaid}
                isAnnounced={upcomingEvent.isAnnounced}
                isMobile={isMobile}
              />
            ))
          )}
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

            {UPCOMING_EVENTS_DATA.length === 0 ? (
              <div className="mx-10 mb-24 flex flex-col items-center justify-center rounded-3xl border border-black/[0.12] bg-white px-10 py-16 text-center shadow-2xl lg:mx-40">
                <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.28rem] text-black/[0.55] uppercase">
                  <span className="h-2 w-2 rounded-full bg-main-brasa-yellow"></span>
                  <span>Stay tuned</span>
                </div>
                <p className="mt-5 text-3xl font-bold text-black">No upcoming events at the moment.</p>
                <p className="mt-3 max-w-2xl text-lg font-regular text-black/[0.7]">
                  We&apos;re currently planning our next events. Check back soon!
                </p>
              </div>
            ) : (
              UPCOMING_EVENTS_DATA.map((upcomingEvent) => (
                <UpcomingEventCard
                  key={upcomingEvent.eventName}
                  date={upcomingEvent.date}
                  time={upcomingEvent.time}
                  image={upcomingEvent.image}
                  eventName={upcomingEvent.eventName}
                  eventDescription={upcomingEvent.eventDescription}
                  location={upcomingEvent.location}
                  moreInfoLink={upcomingEvent.moreInfoLink}
                  buyTicketLink={upcomingEvent.buyTicketLink}
                  eventType={upcomingEvent.eventType}
                  isPaid={upcomingEvent.isPaid}
                  isAnnounced={upcomingEvent.isAnnounced}
                  isMobile={isMobile}
                />
              ))
            )}
          </div>
        </main>
      )}
    </>
  );
};

export default Events;
