// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { ResponseData } from 'path/to/interfaces';

import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { type StaticImageData } from "next/image";

export interface LandingPageEventsInfo {
  eventType: "Social" | "Professional";
  eventInfo: EventCardImageObject[];
}

export interface EventCardImageObject {
  image: StaticImageData;
  imageAlt: string;
  tag: string;
  eventTitle: string;
  eventDescription: string;
}

export interface PrevBoardTabs {
  year: string;
  boardData: EBoardData[];
}

export interface EBoardData {
  id: number;
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
  officerNickname?: string;
  officerBio?: string;
  officerLinkedIn?: string;
}

export interface BoardData {
  image: StaticImageData;
  imageAlt: string;
  officerName: string;
  officerTitle: string;
}

export interface MobileSidebarData {
  name: string;
  route: string;
  icon: IconProp;
}
