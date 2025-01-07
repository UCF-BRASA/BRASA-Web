import { FC, useEffect } from "react";

interface Props {
  readonly toggleSidebar: (value: boolean) => void;
}

// Overlay to prevent clicks in background, also serves as our close button
const SidebarOverlay: FC<Props> = ({ toggleSidebar }) => {
  useEffect(() => {
    // Disable background scrolling when the overlay is mounted
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when the overlay is unmounted
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="flex md:hidden fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-30"
      onClick={() => {
        toggleSidebar((oldVal) => !oldVal);
      }}
    />
  );
};

export default SidebarOverlay;
