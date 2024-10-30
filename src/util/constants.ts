// Landing Page images
import mainPicLanding from "/public/static/landing/intro/main-pic.png";
import bailinho_pic from "/public/static/landing/our-events/bailinho_pic.png";
import churras_pic from "/public/static/landing/our-events/churras_pic.png";
import guest_speaker_pic from "/public/static/landing/our-events/guest_speaker_pic.jpg";
import hangout_pic from "/public/static/landing/our-events/hangout_pic.png";
import study_pic from "/public/static/landing/our-events/study_pic.jpg";
import workshop_pic from "/public/static/landing/our-events/workshop_pic.jpg";

// Meet the Board imaegs
import chris_pic from "/public/static/meet-board/chris_pic.png";
import duda_pic from "/public/static/meet-board/duda_pic.jpeg";
import ella_pic from "/public/static/meet-board/ella_pic.jpeg";
import enzo_pic from "/public/static/meet-board/enzo_pic.jpeg";
import eric_pic from "/public/static/meet-board/eric_pic.png";
import fachetti_pic from "/public/static/meet-board/fachetti_pic.jpg";
import gabriel_pic from "/public/static/meet-board/gabriel_pic.jpeg";
import guilherme_pic from "/public/static/meet-board/guilherme_pic.jpg";
import gustavo_pic from "/public/static/meet-board/gustavo_pic.jpg";
import jean_thomas_pic from "/public/static/meet-board/jean_thomas_pic.jpeg";
import julie_pic from "/public/static/meet-board/julie_pic.png";
import leo_pic from "/public/static/meet-board/leo_pic.png";
import luca_pic from "/public/static/meet-board/luca_pic.png";
import lucas_pic from "/public/static/meet-board/lucas_pic.jpeg";
import matheus_pic from "/public/static/meet-board/matheus_pic.jpg";
import nicole_pic from "/public/static/meet-board/nicole_pic.png";
import nino_pic from "/public/static/meet-board/nino_pic.jpeg";
import pedro_pic from "/public/static/meet-board/pedro_pic.jpeg";
import saki_pic from "/public/static/meet-board/saki_pic.png";
import sophia_pic from "/public/static/meet-board/sophia_pic.png";
import victoria_pic from "/public/static/meet-board/victoria_pic.jpeg";

// Board pic
import board_pic from "/public/static/become-member/member-box/board_pic.jpg";

// Profile icon
import profile_pic from "/public/static/profile/profile-icon.png";

// Login photo
import { EventCardImageObject } from "@interfaces";
import { getApiInstanceUrl, getWebInstanceUrl } from "./instanceUrl";
import brasa_logo from "/public/static/brasa-logo.png";
import login_pic from "/public/static/login/login_pic.jpg";

//Events Background
//import events_background from "public/static/Events/events_background.jpg";

export const MOBILE_THRESHOLD = 1400;

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
  mainPicLanding,
  brasa_logo,
  churras_pic,
  hangout_pic,
  guest_speaker_pic,
  study_pic,
  workshop_pic,
  chris_pic,
  duda_pic,
  ella_pic,
  enzo_pic,
  eric_pic,
  fachetti_pic,
  gabriel_pic,
  guilherme_pic,
  gustavo_pic,
  jean_thomas_pic,
  julie_pic,
  leo_pic,
  luca_pic,
  lucas_pic,
  matheus_pic,
  nicole_pic,
  nino_pic,
  pedro_pic,
  saki_pic,
  sophia_pic,
  victoria_pic,
  board_pic,
  profile_pic,
  login_pic,
};

export const eventImagesData: EventCardImageObject[] = [
  {
    image: IMAGES.churras_pic,
    imageAlt: "UCF BRASA Churrasco Picture",
    tag: "Main Event",
    eventTitle: "BRASA Churrasco",
    eventDescription:
      "All you can eat and drink Brazilian Churrasco! Come enjoy the full Brazilian experience with live DJ music and the best caipirinhas in Orlando!",
  },
  {
    image: IMAGES.bailinho_pic,
    imageAlt: "UCF BRASA Baile da BRASA Picture",
    tag: "Main Event",
    eventTitle: "Baile da BRASA",
    eventDescription:
      "Baile Funk da BRASA! Partnerships with the best clubs in Orlando with open-bars and premium discounts!",
  },
  {
    image: IMAGES.hangout_pic,
    imageAlt: "UCF BRASA Hangout Picture",
    tag: "Casual",
    eventTitle: "BRASA Hangout",
    eventDescription:
      "Looking to meet new Brazilian students at UCF? We got your back! Come eat some coxinhas with us at our hangouts!",
  },
];

export const professionalImagesData: EventCardImageObject[] = [
  {
    image: IMAGES.guest_speaker_pic,
    imageAlt: "UCF BRASA Guest Speakers Picture",
    tag: "Networking",
    eventTitle: "Guest Speakers",
    eventDescription:
      "Connect with experts of your field with our re-ocurrent Guest Speaker events! Whatever area you are in, we have professinals to help you out!",
  },
  {
    image: IMAGES.workshop_pic,
    imageAlt: "UCF BRASA Workshops Picture",
    tag: "Learning",
    eventTitle: "BRASA Workshops",
    eventDescription:
      "Expand your skillsets with our workshops! Our workshop areas include finance, marketing, coding, how to get a job and general networking!",
  },
  {
    image: IMAGES.study_pic,
    imageAlt: "UCF BRASA Study Picture",
    tag: "Casual",
    eventTitle: "BRASA Study",
    eventDescription:
      "A light, fun and collaborative environment for you to study with fellow BRASA members! We have weekly study sessions for everyone!",
  },
];
