// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { ResponseData } from 'path/to/interfaces';

export type ResponseData = {
  status: "success"|"error"
}

export interface User {
  email: null | string,
  id: null | number
}

export interface LoginProps {
  setShowLogin: React.Dispatch<React.SetStateAction<boolean>>
}