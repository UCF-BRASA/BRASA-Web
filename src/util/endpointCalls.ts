import axios, { AxiosError } from "axios";
import {
  ACCESS_CONTROL_ALLOW_ORIGIN,
  APPLICATION_JSON,
  APPLICATION_URLENCODED,
  LOGIN_ENDPOINT,
  USER_PROFILE_ENDPOINT,
} from "./constants";

interface LoginPayload {
  username: string;
  password: string;
  grant_type: string;
  scope: string;
  client_id: string;
  client_secret: string;
}

export const callLoginEndpoint = async (payload: LoginPayload) => {
  try {
    const url = LOGIN_ENDPOINT; // Replace with your API endpoint URL

    const headers = {
      Accept: APPLICATION_JSON,
      "Content-Type": APPLICATION_URLENCODED, // Adjust based on your API requirements
      "Access-Control-Allow-Origin": ACCESS_CONTROL_ALLOW_ORIGIN,
    };

    const response = await axios.post(url, payload, { headers, withCredentials: true });

    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    console.error(error);
  }
};

export const callGetUserInfoEndpoint = async () => {
  try {
    const url = USER_PROFILE_ENDPOINT; // Replace with your API endpoint URL

    const headers = {
      Accept: APPLICATION_JSON,
    };

    const response = await axios.get(url, { headers, withCredentials: true });
    return response.data;
  } catch (e) {
    const error = e as AxiosError;
    console.error(error);
  }
};
