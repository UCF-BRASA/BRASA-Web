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
    <div className="h-[20rem] w-[15rem] mb-10">
      <Image
        src={image}
        alt={imageAlt}
        sizes="100vw"
        className="rounded-t-[2rem] h-[15rem] w-full object-cover"
      />
      <div className="h-[5.5rem] w-full bg-main-brasa-blue rounded-b-[2rem] text-center ">
        <h3 className="text-white font-medium text-lg pt-[1rem]">{officerName}</h3>
        <p className="text-white font-lighttext-base ">{officerTitle}</p>
      </div>
    </div>
  );
};

export default EBoardBox;
