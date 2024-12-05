import { Dialog } from "@headlessui/react";
import { FC, ReactNode, useRef } from "react";

interface Props {
  onClose?: () => void;
  children: ReactNode;
}

const ModalWrapper: FC<Props> = ({
  onClose = () => {
    null;
  },
  children,
}) => {
  const overlayRef = useRef<HTMLDivElement | null>(null);

  return (
    <Dialog
      static
      open={true}
      onClose={onClose}
      initialFocus={overlayRef}
      className="fixed inset-0 bg-black bg-opacity-70 shadow-2xl h-auto w-auto flex items-center justify-center z-[1000]"
    >
      <div>{children}</div>
    </Dialog>
  );
};

export default ModalWrapper;
