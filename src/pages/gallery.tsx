import GalleryBox from "@components/Gallery/GalleryBox";
import { GALLERY_DATA } from "@util/constants";
import { NextPage } from "next";

interface Props {
  isMobile: boolean;
}
const Gallery: NextPage<Props> = ({ isMobile }) => {
  return (
    <main>
      {isMobile ? (
        <div className="h-full bg-white">
          <div className="h-[8rem]"></div>
          <div className="flex flex-col justify-center items-center w-full">
            <h4 className="pt-2 font-bold text-m tracking-[0.1rem]"> SAVE YOUR MEMORIES</h4>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Gallery</h1>
          </div>
          <div className="bg-main-brasa-green mt-12">
            <div className="flex justify-center">
              <div className="mt-5">
                {GALLERY_DATA.map((Gdata) => (
                  <GalleryBox
                    image={Gdata.image}
                    imageAlt={Gdata.imageAlt}
                    date={Gdata.date}
                    driveLink={Gdata.driveLink}
                    isMobile={isMobile}
                    eventDesc={Gdata.eventDesc}
                    //key to bc of warning
                    key={Gdata.date}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-evenly mx-auto w-full mt-20"></div>
          </div>
        </div>
      ) : (
        <div className="h-full bg-white">
          <div className="h-[10rem]"></div>
          <div className="text-center flex flex-col justify-center items-center w-full mb-20">
            <h3 className="pt-16 font-bold text-base tracking-[0.3rem]">SAVE YOUR MEMORIES</h3>
            <h1 className="pt-5 font-bold text-5xl tracking-[0.1rem]">Gallery</h1>
            <h4 className="pt-2 font-bold text-m tracking-[0.1rem]"> </h4>
          </div>
          <div className="bg-main-brasa-green mt-24">
            <div className="flex justify-center">
              <div className="grid grid-cols-3 mt-10 gap-x-40">
                {GALLERY_DATA.map((Gdata) => (
                  <GalleryBox
                    image={Gdata.image}
                    imageAlt={Gdata.imageAlt}
                    date={Gdata.date}
                    driveLink={Gdata.driveLink}
                    isMobile={isMobile}
                    eventDesc={Gdata.eventDesc}
                    //key to bc of warning
                    key={Gdata.date}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-evenly mx-auto w-full mt-20"></div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
