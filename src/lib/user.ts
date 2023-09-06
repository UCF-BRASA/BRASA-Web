import { User } from "@interfaces";

// eslint-disable-next-line prefer-const
export let loggedUser: User = {
  id: null,
  email: null,
  firstName: null,
  lastName: null,
  dateOfBirth: null,
  gender: null,
  originCity: null,
  major: null,
  schoolYear: null,
};

export const setLoggedUser = (
  id: string | null,
  username: string | null,
  firstName: string | null,
  lastName: string | null,
  dateOfBirth: string | null,
  gender: string | null,
  originCity: string | null,
  major: string | null,
  schoolYear: string | null
) => {
  loggedUser.id = id;
  loggedUser.email = username;
  loggedUser.firstName = firstName;
  loggedUser.lastName = lastName;
  loggedUser.dateOfBirth = dateOfBirth;
  loggedUser.gender = gender;
  loggedUser.originCity = originCity;
  loggedUser.major = major;
  loggedUser.schoolYear = schoolYear;
};

export const getLocalUserInfo = (email: string): User => {
  // get all user's metadata from local storage
  const id = localStorage.getItem("_id");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");
  const dateOfBirth = localStorage.getItem("dateOfBirth");
  const gender = localStorage.getItem("gender");
  const originCity = localStorage.getItem("originCity");
  const major = localStorage.getItem("major");
  const schoolYear = localStorage.getItem("schoolYear");

  return { id, email, firstName, lastName, dateOfBirth, gender, originCity, major, schoolYear };
};

export const setLocalUserInfo = ({ ...userData }: User) => {
  // validate each field
  for (const eachDataPoint in userData) {
    if (typeof eachDataPoint === null) return false;
  }

  // set all user's metadata in localStorage
  localStorage.setItem("_id", userData!.id!);
  localStorage.setItem("username", userData!.email!);
  localStorage.setItem("firstName", userData!.firstName!);
  localStorage.setItem("lastName", userData!.lastName!);
  localStorage.setItem("dateOfBirth", userData!.dateOfBirth!);
  localStorage.setItem("gender", userData!.gender!);
  localStorage.setItem("originCity", userData!.originCity!);
  localStorage.setItem("major", userData!.major!);
  localStorage.setItem("schoolYear", userData!.schoolYear!);
};
