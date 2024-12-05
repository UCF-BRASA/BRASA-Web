import { EBOARD_MEMBERS } from "@util/constants";
import { FC, useState } from "react";
import BoardModal from "./BoardModal";
import EBoardBox from "./EBoardBox";

interface Props {
  isMobile: boolean;
}

const EBoardGrid: FC<Props> = ({ isMobile }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleLearnMoreClick = (id: number) => {
    setSelectedId(id);
  };

  const closeModal = () => {
    setSelectedId(null);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        {EBOARD_MEMBERS.map((boardMember) => (
          <EBoardBox
            key={boardMember.id}
            id={boardMember.id}
            image={boardMember.image}
            imageAlt={boardMember.imageAlt}
            officerName={boardMember.officerName}
            officerTitle={boardMember.officerTitle}
            isMobile={isMobile}
            onLearnMoreClick={handleLearnMoreClick}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedId !== null && (
        <BoardModal id={selectedId} isMobile={isMobile} onClose={closeModal} />
      )}
    </>
  );
};

export default EBoardGrid;
