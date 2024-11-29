import { EBoardData } from "@interfaces";
import { FC } from "react";
import EBoardBox from "./EBoardBox";

interface Props {
  eBoardData: EBoardData[];
  searchParams: Record<string, string> | null | undefined;
  isMobile: boolean;
}

const EBoard: FC<Props> = ({ eBoardData, searchParams, isMobile }) => {
  return (
    <div>
      {eBoardData.forEach((officer, index) => {
        <EBoardBox
          key={index}
          image={officer.image}
          imageAlt={officer.imageAlt}
          officerName={officer.officerName}
          officerTitle={officer.officerTitle}
          searchParams={searchParams}
          isMobile={isMobile}
        />;
        // console.log(officer, index);
      })}
    </div>
  );
};

export default EBoard;
