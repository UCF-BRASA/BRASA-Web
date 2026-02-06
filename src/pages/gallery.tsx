"use client";

import GalleryBox from "@components/Gallery/GalleryBox";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GALLERY_DATA } from "@util/constants";
import { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { useSwipeable } from "react-swipeable";

interface Props {
  isMobile: boolean;
}

const Gallery: NextPage<Props> = ({ isMobile }) => {
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // Dynamically set items per page (max 3)
  useEffect(() => {
    const updateItems = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    updateItems();
    window.addEventListener("resize", updateItems);
    return () => window.removeEventListener("resize", updateItems);
  }, []);

  // Group slides
  const groups = useMemo(() => {
    const out: (typeof GALLERY_DATA)[] = [];
    for (let i = 0; i < GALLERY_DATA.length; i += itemsPerPage) {
      out.push(GALLERY_DATA.slice(i, i + itemsPerPage));
    }
    return out;
  }, [itemsPerPage]);

  const [page, setPage] = useState(0);
  const lastPage = Math.max(0, groups.length - 1);
  const goPrev = () => setPage((p) => (p > 0 ? p - 1 : lastPage));
  const goNext = () => setPage((p) => (p < lastPage ? p + 1 : 0));

  const handlers = useSwipeable({
    onSwipedLeft: goNext,
    onSwipedRight: goPrev,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <main className="bg-white h-full overflow-x-hidden">
      <div className={isMobile ? "h-[8rem]" : "h-[10rem]"} />

      {/* Header */}
      <div className="text-center flex flex-col justify-center items-center mb-8">
        <h4 className="font-bold text-sm tracking-[0.3rem] text-gray-700">SAVE YOUR MEMORIES</h4>
        <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem] text-black">Gallery</h1>
        <p className="pt-4 text-gray-500 text-sm italic">
          {isMobile
            ? "Swipe or use the arrows to explore the gallery"
            : "Use the arrows below to explore the gallery"}
        </p>
      </div>

      {/* Carousel */}
      <div className="flex flex-col items-center justify-center mt-10" {...handlers}>
        <div
          className="
            relative flex justify-center items-center 
            w-full max-w-[1200px] mx-auto 
            px-4 sm:px-6 md:px-10 overflow-visible
          "
        >
          {/* Left Arrow */}
          {groups.length > 1 && (
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

          {/* Gallery Items */}
          <div className="flex-1 overflow-hidden">
            <div
              key={page}
              className="flex justify-center items-center gap-6 sm:gap-8 transition-all duration-300 ease-in-out flex-wrap"
            >
              {groups[page]?.map((g) => (
                <div
                  key={g.date}
                  className="
                    flex justify-center items-center 
                    w-full sm:w-[45%] lg:w-[30%] 
                    max-w-[20rem]
                  "
                >
                  <GalleryBox
                    image={g.image}
                    imageAlt={g.imageAlt}
                    date={g.date}
                    driveLink={g.driveLink}
                    isMobile={isMobile}
                    eventDesc={g.eventDesc}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          {groups.length > 1 && (
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

      {/* Dots */}
      {groups.length > 1 && (
        <div className="flex justify-center gap-2 mt-8 mb-24">
          {groups.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 w-2 rounded-full ${i === page ? "bg-black" : "bg-gray-300"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default Gallery;
