import GalleryBox from "@components/Gallery/GalleryBox";
import { GALLERY_DATA } from "@util/constants";
import { NextPage } from "next";

interface Props {
  isMobile?: boolean; // Optional for backward compatibility
}

const Gallery: NextPage<Props> = ({ isMobile }) => {
  return (
    <main>
      <div className="h-full bg-white">
        {/* Top spacing - responsive */}
        <div className="h-[8rem]"></div>
        
        {/* Header section - responsive */}
        <div className="text-center flex flex-col justify-center items-center w-full mb-10 lg:mb-20">
          <h1 className="text-3xl font-bold tracking-[0.2rem] lg:text-6xl">GALLERY</h1>
          <p className="font-medium text-lg mt-4 lg:text-xl lg:mt-8">Here are some pictures from our past events!</p>
        </div>

        {/* Gallery grid - responsive layout */}
        <div className="flex flex-col justify-center items-center w-full lg:grid lg:grid-cols-2 lg:gap-20 lg:mx-28">
          {GALLERY_DATA.map((Gdata) => (
            <GalleryBox
              key={Gdata.date}
              image={Gdata.image}
              imageAlt={Gdata.imageAlt}
              date={Gdata.date}
              driveLink={Gdata.driveLink}
              isMobile={isMobile || false}
              eventDesc={Gdata.eventDesc}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Gallery;
