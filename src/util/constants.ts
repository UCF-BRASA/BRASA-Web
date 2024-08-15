// Landing Page images
import bailinho_pic from "/public/static/landing/our-events/bailinho_pic.png";
import churras_pic from "/public/static/landing/our-events/churras_pic.png";
import guest_speaker_pic from "/public/static/landing/our-events/guest_speaker_pic.jpg";
import hangout_pic from "/public/static/landing/our-events/hangout_pic.png";
import study_pic from "/public/static/landing/our-events/study_pic.jpg";
import workshop_pic from "/public/static/landing/our-events/workshop_pic.jpg";

// Meet the Board imaegs
import ana_pic from "/public/static/meet-board/ana_pic.jpg";
import carlos_pic from "/public/static/meet-board/carlos_pic.jpg";
import carol_pic from "/public/static/meet-board/carol_pic.jpg";
import chris_pic from "/public/static/meet-board/chris_pic.png";
import daghum_pic from "/public/static/meet-board/daghum_pic.jpg";
import enzo_pic from "/public/static/meet-board/enzo_pic.jpg";
import eric_pic from "/public/static/meet-board/eric_pic.png";
import fernanda_pic from "/public/static/meet-board/fernanda_pic.jpg";
import fernando_pic from "/public/static/meet-board/fernando_pic.jpg";
import gio_pic from "/public/static/meet-board/gio_pic.jpg";
import guilherme_pic from "/public/static/meet-board/guilherme_pic.jpg";
import gustavo_pic from "/public/static/meet-board/gustavo_pic.jpg";
import isa_pic from "/public/static/meet-board/isa_pic.jpg";
import isabele_pic from "/public/static/meet-board/isabele_pic.jpg";
import leo_pic from "/public/static/meet-board/leo_pic.png";
import leticia_pic from "/public/static/meet-board/leticia_pic.png";
import luca_pic from "/public/static/meet-board/luca_pic.png";
import lucas_pic from "/public/static/meet-board/lucas_pic.jpg";
import matheus_pic from "/public/static/meet-board/matheus_pic.jpg";
import mel_pic from "/public/static/meet-board/mel_pic.jpg";
import mktgiovanna_pic from "/public/static/meet-board/mktgiovanna_pic.jpg";
import nino_pic from "/public/static/meet-board/nino_pic.jpeg";
import paulo_pic from "/public/static/meet-board/paulo_pic.jpg";
import pedro_pic from "/public/static/meet-board/pedro_pic.jpg";
import seabra_pic from "/public/static/meet-board/seabra_pic.jpg";
import sophia_pic from "/public/static/meet-board/sophia_pic.jpg";

// Board pic
import board_pic from "/public/static/become-member/member-box/board_pic.jpg";

// Profile icon
import profile_pic from "/public/static/profile/profile-icon.png";

// Login photo
import { getApiInstanceUrl, getWebInstanceUrl } from "./instanceUrl";
import login_pic from "/public/static/login/login_pic.jpg";

//Events Background
//import events_background from "public/static/Events/events_background.jpg";

export const MOBILE_THRESHOLD = 1000;

// .env values
export const DEBUG_MODE = process.env.APP_ENV === "development" || process.env.APP_ENV === "test";

// endpoint values
const API_ROOT = getApiInstanceUrl() + "/api/v0.1";
export const LOGIN_ENDPOINT = API_ROOT + "/auth/token";
export const SIGNUP_ENDPOINT = API_ROOT + "/auth/register";
export const USER_PROFILE_ENDPOINT = API_ROOT + "/auth/user-profile";

// content-types headers
export const APPLICATION_JSON = "application/json";
export const APPLICATION_URLENCODED = "application/x-www-form-urlencoded";
export const ACCESS_CONTROL_ALLOW_ORIGIN = getWebInstanceUrl();

export const COLORS = {
  "main-brasa-yellow": "#fef000",
  "main-brasa-green": "#7cb342",
  "main-brasa-blue": "#008cff",
  black: "#000000",
  white: "#ffffff",
};

export const IMAGES = {
  bailinho_pic,
  churras_pic,
  hangout_pic,
  guest_speaker_pic,
  study_pic,
  workshop_pic,
  ana_pic,
  chris_pic,
  isa_pic,
  daghum_pic,
  fernanda_pic,
  enzo_pic,
  eric_pic,
  fernando_pic,
  gio_pic,
  guilherme_pic,
  gustavo_pic,
  isabele_pic,
  mel_pic,
  leo_pic,
  luca_pic,
  lucas_pic,
  matheus_pic,
  mktgiovanna_pic,
  nino_pic,
  pedro_pic,
  carlos_pic,
  sophia_pic,
  paulo_pic,
  seabra_pic,
  board_pic,
  profile_pic,
  login_pic,
  carol_pic,
  leticia_pic,
};
