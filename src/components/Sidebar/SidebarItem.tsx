import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MobileSidebarData } from "@interfaces";
import Link from "next/link";
import router from "next/router";
import { FC } from "react";

interface Props extends MobileSidebarData {
  readonly toggleSidebar: (value: boolean) => void;
}

const SidebarItem: FC<Props> = ({ icon, name, route, toggleSidebar }) => {
  // Highlight menu item based on currently displayed route
  const selectedItemColor =
    router.pathname === route ? "text-main-brasa-blue" : "text-black/50 hover:text-main-brasa-blue";

  return (
    <Link
      href={route}
      onClick={() => {
        toggleSidebar(false);
      }}
      className={`flex gap-3 [&>*]:my-auto text-md pl-5 py-3 border-b-[1px] border-b-black/10 ${selectedItemColor}`}
    >
      <div className="text-xl flex [&>*]:mx-auto w-[30px]">
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="font-regular text-base">{name}</span>
    </Link>
  );
};

export default SidebarItem;
