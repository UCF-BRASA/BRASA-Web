import { FC, useEffect } from "react";

interface Props {
  readonly toggleSidebar: (value: boolean) => void;
}

// Overlay to prevent clicks & scroll in background while sidebar is open
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
      className="flex fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-[1000]"
      onClick={() => toggleSidebar(false)}
    />
  );
};

export default SidebarOverlay;
