// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { ResponseData } from 'path/to/interfaces';

import { type StaticImageData } from "next/image";

export interface EventCardImageObject {
  image: StaticImageData;
  imageAlt: string;
  tag: string;
  eventTitle: string;
  eventDescription: string;
}
