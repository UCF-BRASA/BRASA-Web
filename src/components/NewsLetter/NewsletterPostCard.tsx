import type { newsletterPostData } from "@interfaces";
import { type FC } from "react";
import newsletter_image from "../../../public/static/newsletter/newsletter-image.jpeg";

interface Props {
  post: newsletterPostData;
  className?: string;
}

const NewsletterPostCard: FC<Props> = ({ post, className }) => {
  return (
    <section
      className={`relative overflow-hidden bg-white border border-black/10 rounded-[2.5rem] px-8 py-10 md:px-12 md:py-14 mb-20 md:mb-28 ${
        className ?? ""
      }`}
    >
      <img
        src={newsletter_image.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-16 h-[18rem] w-[28rem] opacity-20 md:h-[22rem] md:w-[34rem]"
      />
      <div className="relative z-10">
        <header className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-2xl md:text-3xl font-bold text-black">{post.newsLetterDate}</h2>
          <p className="text-sm md:text-base font-semibold uppercase tracking-wide text-black/60">
            Skill of the week
          </p>
        </header>

        <p className="mt-6 text-base md:text-lg text-black/70 leading-relaxed">{post.content}</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-black/10 bg-white px-6 py-6">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-main-brasa-green"></span>
              <h3 className="text-lg font-bold text-black">Upcoming events</h3>
            </div>
            <ul className="mt-5 space-y-4">
              {post.events.map((event) => (
                <li key={`${event.eventTitle}-${event.eventDate}`} className="flex flex-col">
                  <span className="text-base font-semibold text-black">{event.eventTitle}</span>
                  <span className="text-sm text-black/60">{event.eventDate}</span>
                  <a
                    href={event.moreInfoLink}
                    className="mt-2 inline-flex w-fit items-center rounded-full bg-main-brasa-blue px-4 py-2 text-xs font-semibold text-white transition hover:bg-blue-400"
                  >
                    More info
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white px-6 py-6">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-main-brasa-yellow"></span>
              <h3 className="text-lg font-bold text-black">Don’t miss this!</h3>
            </div>
            <div className="mt-5 grid gap-4">
              {post.dontMissThis.map((item) => (
                <a
                  key={`${item.title}-${item.link}`}
                  href={item.link}
                  className="group rounded-2xl border border-black/10 px-4 py-4 transition hover:border-main-brasa-blue hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-black group-hover:text-main-brasa-blue">
                      {item.title}
                    </span>
                    <span className="text-xs font-semibold text-main-brasa-blue">View</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterPostCard;
