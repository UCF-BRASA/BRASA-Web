import { type FC } from "react";

interface Props {
  imageAlt: string;
  imagePath: string;
  title: string;
  description: string;
}

const GridSection: FC<Props> = ({ imageAlt, imagePath, title, description }) => {
  return (
    <div className="flex flex-col justify-between items-center text-center h-[12rem]">
      {/* with flex-wrap use: mx-14 my-14 */}
      {/* these are SVGs, no need to use Next Image component */}
      <img src={imagePath} alt={imageAlt} loading="lazy" />
      <h1 className="font-bold text-2xl">{title}</h1>
      <p className="font-medium text-base text-black/60 w-auto break-normal">{description}</p>
    </div>
  );
};

export default GridSection;
