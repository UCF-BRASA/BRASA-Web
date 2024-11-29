// Landing Page images
import mainPicLanding from "/public/static/landing/intro/main-pic.webp";
import bailinho_pic from "/public/static/landing/our-events/bailinho_pic.png";
import churras_pic from "/public/static/landing/our-events/churras_pic.png";
import guest_speaker_pic from "/public/static/landing/our-events/guest_speaker_pic.webp";
import hangout_pic from "/public/static/landing/our-events/hangout_pic.png";
import study_pic from "/public/static/landing/our-events/study_pic.webp";
import workshop_pic from "/public/static/landing/our-events/workshop_pic.webp";

// Meet the Board imaegs
import ana_pic from "/public/static/meet-board/ana_pic.jpg";
import caio_pic from "/public/static/meet-board/caio_pic.jpeg";
import carlos_pic from "/public/static/meet-board/carlos_pic.jpg";
import carol_pic from "/public/static/meet-board/carol_pic.jpg";
import chris_pic from "/public/static/meet-board/chris_pic.png";
import daghum_pic from "/public/static/meet-board/daghum_pic.jpg";
import eric_newpic from "/public/static/meet-board/eric_newpic.jpeg";
import fernanda_pic from "/public/static/meet-board/fernanda_pic.jpg";
import gio_pic from "/public/static/meet-board/gio_pic.jpg";
import guilherme_pic from "/public/static/meet-board/guilherme_pic.jpg";
import gustavo_new_pic from "/public/static/meet-board/gustavo_new_pic.jpeg";
import isa_pic from "/public/static/meet-board/isa_pic.jpeg";
import isabele_pic from "/public/static/meet-board/isabele_pic.jpg";
import leo_pic from "/public/static/meet-board/leo_pic.png";
import leticia_pic from "/public/static/meet-board/leticia_pic.png";
import luana_pic from "/public/static/meet-board/luana_pic.jpeg";
import luca_pic from "/public/static/meet-board/luca_pic.png";
import lucas_pic from "/public/static/meet-board/lucas_pic.jpg";
import manu_pic from "/public/static/meet-board/manu_pic.jpeg";
import matheus_pic from "/public/static/meet-board/matheus_pic.jpg";
import matheusf_pic from "/public/static/meet-board/matheusf_pic.jpg";
import mel_pic from "/public/static/meet-board/mel_pic.jpg";
import mktgiovanna_pic from "/public/static/meet-board/mktgiovanna_pic.jpg";
import nino_newpic from "/public/static/meet-board/nino_newpic.jpeg";
import nino_pic from "/public/static/meet-board/nino_pic.jpeg";
import paulo_pic from "/public/static/meet-board/paulo_pic.jpg";
import pedro_pic from "/public/static/meet-board/pedro_pic.jpg";
import saki_pic from "/public/static/meet-board/saki_pic.png";
import seabra_pic from "/public/static/meet-board/seabra_pic.jpg";

// Board pic
import board_pic from "/public/static/become-member/member-box/board_pic.jpg";

// Profile icon
import profile_pic from "/public/static/profile/profile-icon.png";

// Login photo
import { EBoardData, EventCardImageObject } from "@interfaces";
import { getApiInstanceUrl, getWebInstanceUrl } from "./instanceUrl";
import brasa_logo from "/public/static/brasa-logo.png";

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
  caio_pic,
  ana_pic,
  carlos_pic,
  carol_pic,
  eric_newpic,
  daghum_pic,
  fernanda_pic,
  guilherme_pic,
  gio_pic,
  gustavo_new_pic,
  isa_pic,
  isabele_pic,
  leo_pic,
  luca_pic,
  lucas_pic,
  matheus_pic,
  manu_pic,
  leticia_pic,
  nino_newpic,
  nino_pic,
  pedro_pic,
  saki_pic,
  luana_pic,
  matheusf_pic,
  mel_pic,
  mktgiovanna_pic,
  paulo_pic,
  seabra_pic,
  board_pic,
  profile_pic,
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

export const BOARD_MEMBERS: EBoardData[] = [
  {
    image: IMAGES.luca_pic,
    imageAlt: "Luca De Vincenzo Picture",
    officerName: "Luca De Vincenzo",
    officerTitle: "President",
  },
  {
    image: IMAGES.guilherme_pic,
    imageAlt: "Guilherme Aranega Picture",
    officerName: "Guilherme Tonini",
    officerTitle: "Vice President",
  },
  {
    image: IMAGES.nino_newpic,
    imageAlt: "Nino Picture",
    officerName: "Nino Portugal",
    officerTitle: "Co-Head of Events",
  },
  {
    image: IMAGES.gio_pic,
    imageAlt: "Giovana Vicentin Picture",
    officerName: "Giovana Vicentin",
    officerTitle: "Co-Head of Events",
  },
  {
    image: IMAGES.isa_pic,
    imageAlt: "Isadora Prado Picture",
    officerName: "Isadora Prado",
    officerTitle: "Head of Marketing",
  },
  {
    image: IMAGES.leo_pic,
    imageAlt: "Leonora Carvalho Picture",
    officerName: "Leonora Carvalho",
    officerTitle: "Head of Finance",
  },
  {
    image: IMAGES.saki_pic,
    imageAlt: "Sophia Sakakibara Picture",
    officerName: "Sophia Sakakibara",
    officerTitle: "Head of Professional Development",
  },
  {
    image: IMAGES.lucas_pic,
    imageAlt: "Lucas Bassotto Silveira Picture",
    officerName: "Lucas Bassotto Silveira",
    officerTitle: "Head of Technology",
  },
];
