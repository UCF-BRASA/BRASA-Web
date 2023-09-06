type Cookie = {
  [key: string]: string;
};

export const parseCookies = (str: string) => {
  const finalDict: Cookie = {};
  const cookiesList = str.split("; ");

  // const cookie = cookieWithQuotes.substring(1, cookieWithQuotes.length - 1);
  cookiesList.forEach((cookie) => {
    const [key, value] = cookie.split("=");
    finalDict[key] = decodeURI(value);
  });

  return finalDict;
};
