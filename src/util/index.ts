import {
  ACCESS_CONTROL_ALLOW_ORIGIN,
  APPLICATION_JSON,
  APPLICATION_URLENCODED,
  COLORS,
  DEBUG_MODE,
  IMAGES,
  LOGIN_ENDPOINT,
  MOBILE_THRESHOLD,
  SIGNUP_ENDPOINT,
  USER_PROFILE_ENDPOINT,
} from "./constants";
import { callGetUserInfoEndpoint, callLoginEndpoint } from "./endpointCalls";
import { getApiInstanceUrl, getWebInstanceUrl } from "./instanceUrl";
import { parseCookies } from "./parseCookies";

export {
  ACCESS_CONTROL_ALLOW_ORIGIN,
  APPLICATION_JSON,
  APPLICATION_URLENCODED,
  COLORS,
  DEBUG_MODE,
  IMAGES,
  LOGIN_ENDPOINT,
  MOBILE_THRESHOLD,
  SIGNUP_ENDPOINT,
  USER_PROFILE_ENDPOINT,
  callGetUserInfoEndpoint,
  callLoginEndpoint,
  getApiInstanceUrl,
  getWebInstanceUrl,
  parseCookies,
};
