import Image, { StaticImageData } from "next/image";
import { type FC } from "react";

interface Props {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

const EBoardBox: FC<Props> = ({ imageAlt, image, officerName, officerTitle }) => {
  return (
    <div className="h-[20rem] w-[20rem] mb-32">
      <Image
        src={image}
        alt={imageAlt}
        sizes="100vw"
        className="rounded-t-[2rem] h-[20rem] w-full"
      />
      <div className="h-[6rem] w-full bg-main-brasa-blue rounded-b-[2rem] text-center">
        <h3 className="text-white font-medium text-lg pt-5">{officerName}</h3>
        <p className="text-white font-light text-base">{officerTitle}</p>
      </div>
    </div>
  );
};

export default EBoardBox;
