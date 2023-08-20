// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { ResponseData } from 'path/to/interfaces';

import { StaticImageData } from "next/image";

export type ResponseData = {
  status: "success" | "error";
};

export interface User {
  id: null | string;
  token: null | string;
  email: null | string;
  firstName: null | string;
  lastName: null | string;
  dateOfBirth: null | string;
  gender: null | string;
  originCity: null | string;
  major: null | string;
  schoolYear: null | string;
}

export interface LoginProps {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface EventCardImageObject {
  image: StaticImageData;
  imageAlt: string;
  tag: string;
  eventTitle: string;
  eventDescription: string;
}
