import { User } from "@interfaces";

const LoggedUser: User = {
  id: null,
  token: null,
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
  id: string,
  token: string,
  username: string,
  first_name: string,
  last_name: string,
  date_of_birth: string,
  gender: string,
  origin_city: string,
  major: string,
  school_year: string
) => {
  LoggedUser.id = id;
  LoggedUser.token = token;
  LoggedUser.email = username;
  LoggedUser.firstName = first_name;
  LoggedUser.lastName = last_name;
  LoggedUser.dateOfBirth = date_of_birth;
  LoggedUser.gender = gender;
  LoggedUser.originCity = origin_city;
  LoggedUser.major = major;
  LoggedUser.schoolYear = school_year;
};

export default LoggedUser;
