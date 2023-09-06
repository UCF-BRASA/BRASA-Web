/**
 * This function returns the Web app URL
 */

import { DEBUG_MODE } from "./constants";

export const getWebInstanceUrl = (): string | undefined => {
  switch (process.env.APP_ENV) {
    case "production":
      return process.env.WEB_PROD_URL;

    case "development":
      return process.env.WEB_DEV_URL;

    case "test":
      return process.env.WEB_PREVIEW_URL;

    default:
      return process.env.WEB_DEV_URL;
  }
};

/**
 * This function returns the API url
 */
export const getApiInstanceUrl = (): string | undefined => {
  if (DEBUG_MODE) {
    return process.env.API_DEV_URL;
  }

  return process.env.API_PROD_URL;
};
