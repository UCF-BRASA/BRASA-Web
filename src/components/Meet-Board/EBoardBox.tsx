import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { type FC } from "react";

interface Props {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
  isMobile: boolean;
  searchParams: Record<string, string> | null | undefined;
}

const EBoardBox: FC<Props> = ({
  imageAlt,
  image,
  officerName,
  officerTitle,
  searchParams,
  isMobile,
}) => {
  // const show = searchParams?.show;
  // console.log("From EBoardBox.tsx");
  // console.log(show);
  return (
    <>
      {isMobile ? (
        <div className="w-[20rem] mb-12">
          <div className="w-full h-full rounded bg-light-grey shadow-2xl">
            <Image
              src={image}
              alt={imageAlt}
              sizes="100vw"
              className="h-[20rem] w-full object-cover mx-auto my-auto rounded-t-[0.25rem]"
            />
            <div className="w-full text-left px-4 my-4">
              <h3 className="text-black font-medium text-2xl">{officerName}</h3>
              <p className="text-slate-900/[.6] font-light text-base">{officerTitle}</p>
            </div>
            <hr className="border-black/[.1]"></hr>
            <div className="w-full flex justify-center items-center py-4">
              <Link
                href="/meet-the-board?show=true"
                className="bg-main-brasa-blue text-center text-white py-3 w-full mx-5 rounded hover:bg-blue-400 transition duration-200"
              >
                Learn More
              </Link>

              {/* {show && <BoardModal />} */}
              {/* <BoardModal isMobile /> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="w-[20rem] mb-32">
          <div className="w-full h-full rounded bg-white shadow-xl">
            <Image
              src={image}
              alt={imageAlt}
              sizes="100vw"
              className="h-[30rem] w-full object-cover mx-auto my-auto rounded-t-[0.25rem]"
            />
            <div className="w-full text-left px-4 my-4">
              <h3 className="text-black font-medium text-2xl">{officerName}</h3>
              <p className="text-slate-900/[.6] font-light text-base">{officerTitle}</p>
            </div>
            <hr className="border-black/[.1]"></hr>
            <div className="w-full flex justify-center items-center py-4">
              <Link
                href="/meet-the-board?show=true"
                className="bg-main-brasa-blue text-center text-white py-3 w-full mx-5 rounded hover:bg-blue-400 transition duration-200"
              >
                Learn More
              </Link>

              {/* {show && <BoardModal />} */}
              {/* <BoardModal isMobile /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EBoardBox;
