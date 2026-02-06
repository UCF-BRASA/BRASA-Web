"use client";

import NewsletterPostCard from "@components/NewsLetter/NewsletterPostCard";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NEWS_LETTER_DATA } from "@util/constants";
import { NextPage } from "next";
import { useMemo, useRef, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface Props {
  isMobile: boolean;
}

const Newsletter: NextPage<Props> = ({ isMobile }) => {
  const lastIndex = Math.max(0, NEWS_LETTER_DATA.length - 1);
  const [page, setPage] = useState(lastIndex);
  const [isVisible, setIsVisible] = useState(true);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const transitionTimeoutRef = useRef<number | null>(null);

  const orderedPosts = useMemo(() => NEWS_LETTER_DATA, []);

  const startTransition = (nextIndex: number, dir: "next" | "prev") => {
    if (transitionTimeoutRef.current) {
      window.clearTimeout(transitionTimeoutRef.current);
    }
    setDirection(dir);
    setIsVisible(false);
    transitionTimeoutRef.current = window.setTimeout(() => {
      setPage(nextIndex);
      window.setTimeout(() => setIsVisible(true), 10);
    }, 220);
  };

  const goPrev = () =>
    startTransition(page > 0 ? page - 1 : lastIndex, "prev");
  const goNext = () =>
    startTransition(page < lastIndex ? page + 1 : 0, "next");

  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <main className="bg-white h-full overflow-x-hidden">
      <div className={isMobile ? "h-[8rem]" : "h-[10rem]"} />

      <div className="text-center flex flex-col justify-center items-center mb-8">
        <h4 className="font-bold text-sm tracking-[0.3rem] text-gray-700">STAY IN THE LOOP</h4>
        <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem] text-black">Newsletter</h1>
        <p className="pt-4 text-gray-500 text-sm italic">
          {isMobile
            ? "Swipe or use the arrows to browse the newsletter"
            : "Use the arrows below to browse the newsletter"}
        </p>
      </div>

      <div className="flex flex-col items-center justify-center mt-10" {...handlers}>
        <div
          className="
            relative flex justify-center items-center 
            w-full max-w-[1200px] mx-auto 
            px-4 sm:px-6 md:px-10 overflow-visible
          "
        >
          {orderedPosts.length > 1 && (
            <button
              onClick={goPrev}
              className="
                absolute 
                left-6 sm:left-6 md:left-8 md:-translate-x-1/4 lg:-translate-x-1/2
                bg-white p-2 rounded-full shadow-md 
                hover:scale-105 transition z-20
              "
              aria-label="Previous"
            >
              <FontAwesomeIcon icon={faArrowLeft} />
            </button>
          )}

          <div className="flex-1 overflow-hidden">
            {orderedPosts.length === 0 ? (
              <div className="mx-6 mb-12 flex flex-col items-center justify-center rounded-2xl border border-black/[0.12] bg-white px-6 py-10 text-center shadow-md">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.24rem] text-black/[0.55] uppercase">
                  <span className="h-2 w-2 rounded-full bg-main-brasa-yellow"></span>
                  <span>Stay tuned</span>
                </div>
                <p className="mt-4 text-2xl font-bold text-black">No newsletters yet.</p>
                <p className="mt-3 text-base font-regular text-black/[0.7]">
                  We&apos;re preparing the next update. Check back soon!
                </p>
              </div>
            ) : (
              <div
                key={page}
                className={`flex justify-center items-center transition-all duration-300 ease-in-out ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : direction === "next"
                      ? "opacity-0 -translate-x-6"
                      : "opacity-0 translate-x-6"
                }`}
              >
                <NewsletterPostCard post={orderedPosts[page]} />
              </div>
            )}
          </div>

          {orderedPosts.length > 1 && (
            <button
              onClick={goNext}
              className="
                absolute 
                right-6 sm:right-6 md:right-8 md:translate-x-1/4 lg:translate-x-1/2
                bg-white p-2 rounded-full shadow-md 
                hover:scale-105 transition z-20
              "
              aria-label="Next"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          )}
        </div>
      </div>

      {orderedPosts.length > 1 && (
        <div className="flex justify-center gap-2 mt-8 mb-24">
          {orderedPosts.map((_, i) => (
            <button
              key={i}
              onClick={() => startTransition(i, i > page ? "next" : "prev")}
              className={`h-2 w-2 rounded-full ${i === page ? "bg-black" : "bg-gray-300"}`}
              aria-label={`Go to post ${i + 1}`}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Newsletter;
