import Image, { StaticImageData } from "next/image";
import { type FC } from "react";

interface Props {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
  isMobile: boolean;
}

const EBoardBox: FC<Props> = ({ imageAlt, image, officerName, officerTitle, isMobile }) => {
  officerTitle =
    officerName == "Nicole Weeden" && isMobile ? "Head of Professional Dev" : officerTitle;

  return (
    <section>
      {isMobile ? (
        <div className="h-[20rem] w-[15rem] mb-10 mx-auto">
          {/* Added `mx-auto` here to center the box */}
          <Image
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="rounded-t-[2rem] h-[15rem] w-full object-cover mx-auto"
          />
          <div className="h-[5.5rem] w-full bg-main-brasa-blue rounded-b-[2rem] text-center">
            <h3 className="text-white font-medium text-lg pt-[1rem]">{officerName}</h3>
            <p className="text-white font-light text-base">{officerTitle}</p>
          </div>
        </div>
      ) : (
        <div className="w-[20rem] mb-32 mx-auto">
          {/* Added `mx-auto` here to center the box */}
          <Image
            src={image}
            alt={imageAlt}
            sizes="100vw"
            className="rounded-t-[1rem] h-[30rem] w-full object-cover mx-auto"
          />
          <div className="h-[6rem] w-full bg-white rounded-b-[2rem] text-left px-4">
            <h3 className="text-black font-medium text-xl pt-5">{officerName}</h3>
            <p className="text-slate-900/[.6] font-light text-base">{officerTitle}</p>
          </div>
          <hr className="border-black/[.1]"></hr>
        </div>
      )}
    </section>
  );
};

export default EBoardBox;
