import Image, { StaticImageData } from "next/image";
import { type FC } from "react";

interface Props {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

const BoardBox: FC<Props> = ({ imageAlt, image, officerName, officerTitle }) => {
  return (
    <div className="w-[15rem] mb-10">
      <Image
        src={image}
        alt={imageAlt}
        sizes="100vw"
        className="rounded-[1rem] h-[20rem] w-full object-cover"
      />
      <div className="h-[6rem] w-full pl-[0.5rem] pt-[0.5rem]">
        <h3 className="text-black font-bold text-[1.25rem]">{officerName}</h3>
        <p className="text-black font-light text-base">{officerTitle}</p>
      </div>
    </div>
  );
};

export default BoardBox;
