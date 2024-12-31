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
import {
  BoardData,
  EBoardData,
  EventCardImageObject,
  LandingPageEventsInfo,
  PrevBoardTabs,
  UpcomingEventsData,
} from "@interfaces";
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

// TODO: figure out a good way to expose images to app without doing it with a whole object
// (this is currently impacting performance)
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

const eventImagesData: EventCardImageObject[] = [
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

const professionalImagesData: EventCardImageObject[] = [
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

export const LANDING_PAGE_EVENTS: LandingPageEventsInfo[] = [
  {
    eventType: "Social",
    eventInfo: eventImagesData,
  },
  {
    eventType: "Professional",
    eventInfo: professionalImagesData,
  },
];

export const PREV_EBOARD_MEMBERS: PrevBoardTabs[] = [
  {
    year: "2021",
    boardData: [
      {
        id: 1,
        image: IMAGES.eric_newpic,
        imageAlt: "Marco Cardone Picture",
        officerName: "Marco Cardone",
        officerTitle: "President",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 2,
        image: IMAGES.matheus_pic,
        imageAlt: "Manuela Demarchi Picture",
        officerName: "Manuela Demarchi",
        officerTitle: "Vice President",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 3,
        image: IMAGES.matheus_pic,
        imageAlt: "Luis Naranjo Picture",
        officerName: "Luis Naranjo",
        officerTitle: "Treasurer",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 4,
        image: IMAGES.fernanda_pic,
        imageAlt: "Fernanda Barrusco Picture",
        officerName: "Fernanda Barrusco",
        officerTitle: "Secretary",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 5,
        image: IMAGES.matheus_pic,
        imageAlt: "Rafael Itinoche Picture",
        officerName: "Rafael Itinoche",
        officerTitle: "Director of Pre-Student & Alumni",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 6,
        image: IMAGES.carol_pic,
        imageAlt: "Chiara Alzamora Picture",
        officerName: "Chiara Alzamora",
        officerTitle: "Director of Media",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 7,
        image: IMAGES.matheus_pic,
        imageAlt: "Felipe Caseiro Picture",
        officerName: "Felipe Caseiro",
        officerTitle: "Director of Sports",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 8,
        image: IMAGES.matheus_pic,
        imageAlt: "Luiza Vasconcelos Picture",
        officerName: "Luiza Vasconcelos",
        officerTitle: "Event Coordinator",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
    ],
  },
  {
    year: "2022",
    boardData: [
      {
        id: 1,
        image: IMAGES.caio_pic,
        imageAlt: "Rafael Itinoche Picture",
        officerName: "Rafael Itinoche",
        officerTitle: "President",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 2,
        image: IMAGES.matheus_pic,
        imageAlt: "Monique Vilhena Picture",
        officerName: "Monique Vilhena",
        officerTitle: "Vice President",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 3,
        image: IMAGES.matheus_pic,
        imageAlt: "Pedro Fachetti Carvalho Picture",
        officerName: "Pedro Fachetti Carvalho",
        officerTitle: "Secretary",
        officerNickname: "Fachetti",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 4,
        image: IMAGES.matheus_pic,
        imageAlt: "Mariana Ricci Picture",
        officerName: "Mariana Ricci",
        officerTitle: "Treasurer",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 5,
        image: IMAGES.matheus_pic,
        imageAlt: "Luis Rehder Ferrari Picture",
        officerName: "Luis Rehder Ferrari",
        officerTitle: "Director of Pre-Student & Alumni",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 6,
        image: IMAGES.matheus_pic,
        imageAlt: "Andre Gianesi Picture",
        officerName: "Andre Gianesi",
        officerTitle: "Director of Sports",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 7,
        image: IMAGES.matheus_pic,
        imageAlt: "Lylian Monteiro Picture",
        officerName: "Lylian Monteiro",
        officerTitle: "Director of External Affairs",
        officerNickname: "Lilly",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 8,
        image: IMAGES.matheus_pic,
        imageAlt: "Julianna Rodriguez Picture",
        officerName: "Julianna Rodriguez",
        officerNickname: "Julie",
        officerTitle: "Director of Marketing",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 9,
        image: IMAGES.matheus_pic,
        imageAlt: "Amanda Salgado Picture",
        officerName: "Amanda Salgado",
        officerTitle: "Event Coordinator",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
    ],
  },
  {
    year: "2023",
    boardData: [
      {
        id: 1,
        image: IMAGES.pedro_pic,
        imageAlt: "Pedro Fachetti Carvalho Picture",
        officerName: "Pedro Fachetti Carvalho",
        officerTitle: "President",
        officerNickname: "Fachetti",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 2,
        image: IMAGES.matheus_pic,
        imageAlt: "Matheus Agramunt Picture",
        officerName: "Matheus Agramunt",
        officerTitle: "Vice President",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 3,
        image: IMAGES.matheus_pic,
        imageAlt: "Lucas Guilherme Picture",
        officerName: "Lucas Guilherme",
        officerTitle: "Head of Finance",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 4,
        image: IMAGES.matheus_pic,
        imageAlt: "Julianna Rodriguez Picture",
        officerName: "Julianna Rodriguez",
        officerTitle: "Co-Head of Marketing",
        officerNickname: "Julie",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 5,
        image: IMAGES.matheus_pic,
        imageAlt: "Jean Thomas Picture",
        officerName: "Jean Thomas",
        officerTitle: "Co-Head of Marketing",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 6,
        image: IMAGES.matheus_pic,
        imageAlt: "Ella Santucci Picture",
        officerName: "Ella Santucci",
        officerTitle: "Co-Head of Events",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 7,
        image: IMAGES.guilherme_pic,
        imageAlt: "Gabriel Couto Picture",
        officerName: "Gabriel Couto",
        officerTitle: "Co-Head of Events",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 8,
        image: IMAGES.manu_pic,
        imageAlt: "Nicole Weeden Picture",
        officerName: "Nicole Weeden",
        officerTitle: "Head of Professional Development",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 9,
        image: IMAGES.ana_pic,
        imageAlt: "Maria Eduarda Joazeiro Picture",
        officerName: "Maria Eduarda Joazeiro",
        officerTitle: "Head of Technology",
        officerNickname: "Duda",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
    ],
  },
];

// Move this to DB
export const EBOARD_MEMBERS: EBoardData[] = [
  {
    id: 1,
    image: IMAGES.luca_pic,
    imageAlt: "Luca De Vincenzo Picture",
    officerName: "Luca De Vincenzo",
    officerTitle: "President",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
  },
  {
    id: 2,
    image: IMAGES.guilherme_pic,
    imageAlt: "Guilherme Aranega Picture",
    officerName: "Guilherme Tonini",
    officerTitle: "Vice President",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/guilherme-tonini-aranega-b2a4101a1/",
  },
  {
    id: 3,
    image: IMAGES.nino_newpic,
    imageAlt: "Nino Picture",
    officerName: "Nino Portugal",
    officerTitle: "Co-Head of Events",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/ninoportugal/",
  },
  {
    id: 4,
    image: IMAGES.gio_pic,
    imageAlt: "Giovana Vicentin Picture",
    officerName: "Giovana Vicentin",
    officerTitle: "Co-Head of Events",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/giovanavicentinr/",
  },
  {
    id: 5,
    image: IMAGES.isa_pic,
    imageAlt: "Isadora Prado Picture",
    officerName: "Isadora Prado",
    officerTitle: "Head of Marketing",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/isadora-mendon%C3%A7a-prado-6418b021a/",
  },
  {
    id: 6,
    image: IMAGES.leo_pic,
    imageAlt: "Leonora Carvalho Picture",
    officerName: "Leonora Carvalho",
    officerTitle: "Head of Finance",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/leonora-carvalho-vaz-de-siqueira-525095210/",
  },
  {
    id: 7,
    image: IMAGES.saki_pic,
    imageAlt: "Sophia Sakakibara Picture",
    officerName: "Sophia Sakakibara",
    officerTitle: "Head of Professional Development",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/sophiacapello/",
  },
  {
    id: 8,
    image: IMAGES.lucas_pic,
    imageAlt: "Lucas Bassotto Silveira Picture",
    officerName: "Lucas Bassotto Silveira",
    officerTitle: "Head of Technology",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/lucasbassottosilveira/",
  },
];

export const BOARD_MEMBERS: BoardData[] = [
  {
    image: IMAGES.chris_pic,
    imageAlt: "Christopher Pavie Suarez Picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Chris Pavie Suarez",
  },
  {
    image: IMAGES.gustavo_new_pic,
    imageAlt: "Gustavo Manfredini picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Gustavo Manfredini",
  },
  {
    image: IMAGES.fernanda_pic,
    imageAlt: "Fernanda Goncalves Picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Fernanda Goncalves",
  },
  {
    image: IMAGES.carol_pic,
    imageAlt: "Carolina Tello Picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Carolina Tello",
  },
  {
    image: IMAGES.caio_pic,
    imageAlt: "Caio Amaral Picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Caio Amaral",
  },
  {
    image: IMAGES.carlos_pic,
    imageAlt: "Carlos Eduardo Picture",
    officerTitle: "Technology Analyst",
    officerName: "Carlos Eduardo Torres",
  },
  {
    image: IMAGES.seabra_pic,
    imageAlt: "Matheus Seabra Picture",
    officerTitle: "Technology Analyst",
    officerName: "Matheus Seabra",
  },
  {
    image: IMAGES.daghum_pic,
    imageAlt: "Lucas Daghum Picture",
    officerTitle: "Technology Analyst",
    officerName: "Lucas Daghum",
  },
  {
    image: IMAGES.paulo_pic,
    imageAlt: "Paulo Nascimento Picture",
    officerTitle: "Technology Analyst",
    officerName: "Paulo Nascimento",
  },
  {
    image: IMAGES.leticia_pic,
    imageAlt: "Leticia Novaes Bispo Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Leticia Novaes Bispo",
  },
  {
    image: IMAGES.mktgiovanna_pic,
    imageAlt: "Giovanna Vesselizza Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Giovanna Vesselizza",
  },
  {
    image: IMAGES.ana_pic,
    imageAlt: "Ana Beatriz Dantas Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Ana Beatriz Dantas",
  },
  {
    image: IMAGES.luana_pic,
    imageAlt: "Luana Agramunt Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Luana Agramunt",
  },
  {
    image: IMAGES.eric_newpic,
    imageAlt: "Eric Tavora Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Eric Tavora",
  },
  {
    image: IMAGES.matheus_pic,
    imageAlt: "Matheus Agramunt Picture",
    officerTitle: "Professional Development Analyst",
    officerName: "Matheus Agramunt",
  },
  {
    image: IMAGES.isabele_pic,
    imageAlt: "Isabelle Miguel Picture",
    officerTitle: "Professional Development Analyst",
    officerName: "Isabelle Miguel",
  },
  {
    image: IMAGES.mel_pic,
    imageAlt: "Mel Wolff Picture",
    officerTitle: "Professional Development Analyst",
    officerName: "Mel Wolff",
  },
  {
    image: IMAGES.matheusf_pic,
    imageAlt: "Matheus Gomes Picture",
    officerTitle: "Finance Analyst",
    officerName: "Matheus Gomes",
  },
  {
    image: IMAGES.manu_pic,
    imageAlt: "Manuela Martins Picture",
    officerTitle: "Finance Analyst",
    officerName: "Manuela Martins",
  },
  {
    image: IMAGES.pedro_pic,
    imageAlt: "Pedro Evangelista Picture",
    officerTitle: "Finance Analyst",
    officerName: "Pedro Evangelista",
  },
];

export const gridSectionsData = [
  {
    imageAlt: "Exam Icon",
    imagePath: "static/landing/what-we-do/exam-icon.svg",
    title: "Exam Preparation",
    description:
      "We offer comprehensive resources and study materials to help you prepare for entrance exams",
  },
  {
    imageAlt: "Study Abroad Icon",
    imagePath: "static/landing/what-we-do/study-abroad-icon.svg",
    title: "Study Abroad Opportunities",
    description:
      "We guide you through the application process and also assist with the visa requirements",
  },
  {
    imageAlt: "Career Guidance Icon",
    imagePath: "static/landing/what-we-do/career-icon.svg",
    title: "Career Guidance",
    description:
      "We offer career counselling services to help you explore different options & identify your strengths and interests",
  },
  {
    imageAlt: "Educational Resources Icon",
    imagePath: "static/landing/what-we-do/education-icon.svg",
    title: "Educational Resources",
    description:
      "We offer educational resources to support your learning journey from study tips to time management techniques",
  },
  {
    imageAlt: "Community Support Icon",
    imagePath: "static/landing/what-we-do/community-icon.svg",
    title: "Community Support",
    description:
      "Join our online forums and connect with fellow students, educators, and professionals",
  },
  {
    imageAlt: "DB icon",
    imagePath: "static/landing/what-we-do/db-icon.svg",
    title: "BRASA @ UCF Tech Team",
    description:
      "Our tech team is always looking for new members to help us build our website and other projects.",
  },
];

export const UPCOMING_EVENTS_DATA: UpcomingEventsData[] = [
  {
    date: "TBD",
    image: IMAGES.churras_pic,
    eventName: "Churrasco BRASA",
    location: "300 Dalhausser Ln, Oviedo, FL 32765",
    eventType: "Social",
    isPaid: true,
  },
  {
    date: "TBD",
    image: IMAGES.bailinho_pic,
    eventName: "Bailinho Brasa",
    location: "5250 International Dr, Orlando, FL 32819",
    eventType: "Social",
    isPaid: true,
  },
  {
    date: "TBD",
    image: IMAGES.guest_speaker_pic,
    eventName: "Guest Speaker",
    location: "UCF",
    eventType: "Professional",
    isPaid: false,
  },
];
