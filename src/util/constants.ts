// Logos
import brasa_logo from "/public/static/brasa-logo.png";

//Galleria pics updated
import cover_aug31 from "/public/static/gallery/cover_aug31.jpg";
import cover_feb29 from "/public/static/gallery/cover_feb29.jpg";
import cover_jul11 from "/public/static/gallery/cover_jul11.jpg";
import cover_mar09 from "/public/static/gallery/cover_mar09.jpg";
import cover_mar30 from "/public/static/gallery/cover_mar30.jpg";
import cover_oct05 from "/public/static/gallery/cover_oct05.jpg";

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
import paulo_pic from "/public/static/meet-board/paulo_pic.jpg";
import pedro_pic from "/public/static/meet-board/pedro_pic.jpg";
import saki_pic from "/public/static/meet-board/saki_pic.png";
import seabra_pic from "/public/static/meet-board/seabra_pic.jpg";

// Previous Boards pictures
import amanda_pic from "/public/static/meet-board/prev-board/amanda.jpeg";
import andre_pic from "/public/static/meet-board/prev-board/andre.jpeg";
import chiara_pic from "/public/static/meet-board/prev-board/chiara.jpeg";
import duda_pic from "/public/static/meet-board/prev-board/duda_pic.jpeg";
import ella_pic from "/public/static/meet-board/prev-board/ella_pic.jpeg";
import fachetti_pic from "/public/static/meet-board/prev-board/fachetti_pic.jpeg";
import felipe_caseiro_pic from "/public/static/meet-board/prev-board/felipe_caseiro.jpeg";
import fernanda_barrusco_pic from "/public/static/meet-board/prev-board/fernanda.jpeg";
import gabriel_pic from "/public/static/meet-board/prev-board/gabriel_pic.jpeg";
import jean_thomas_pic from "/public/static/meet-board/prev-board/jean_thomas_pic.jpeg";
import julie_pic from "/public/static/meet-board/prev-board/julie_pic.png";
import lilly_pic from "/public/static/meet-board/prev-board/lilly.jpeg";
import lucas_guilherme_pic from "/public/static/meet-board/prev-board/lucas_pic.jpeg";
import luis_2021_pic from "/public/static/meet-board/prev-board/luis_2021.jpeg";
import luis_f_pic from "/public/static/meet-board/prev-board/luis_f.jpeg";
import luiza_pic from "/public/static/meet-board/prev-board/luiza.jpeg";
import manu_2021_pic from "/public/static/meet-board/prev-board/manu_2021.jpeg";
import marco_pic from "/public/static/meet-board/prev-board/marco.jpeg";
import mari_r_pic from "/public/static/meet-board/prev-board/mari_r.jpeg";
import monique_pic from "/public/static/meet-board/prev-board/monique.jpeg";
import nicole_pic from "/public/static/meet-board/prev-board/nicole_pic.jpeg";
import rafa_pic from "/public/static/meet-board/prev-board/rafa.jpeg";

// Board pic
import board_pic from "/public/static/become-member/member-box/board_pic.jpg";

// Login photo
import {
  faCalendarDays,
  //gallery mobile side bar logo
  faCamera,
  faHandshake,
  faHome,
  faLayerGroup,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
import {
  BoardData,
  EBoardData,
  EventCardImageObject,
  GalleryBoxData,
  LandingPageEventsInfo,
  MobileSidebarData,
  PrevBoardTabs,
  UpcomingEventsData,
} from "@interfaces";
import { getApiInstanceUrl, getWebInstanceUrl } from "./instanceUrl";

// TODO: Change this value
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
  mainPicLanding,
  brasa_logo,
  board_pic,
  carol_pic,
  leticia_pic,

  //Gallery updated pics
  cover_feb29,
  cover_mar09,
  cover_mar30,
  cover_jul11,
  cover_aug31,
  cover_oct05,
};

const eventImagesData: EventCardImageObject[] = [
  {
    image: churras_pic,
    imageAlt: "UCF BRASA Churrasco Picture",
    tag: "Main Event",
    eventTitle: "BRASA Churrasco",
    eventDescription:
      "All you can eat and drink Brazilian Churrasco! Come enjoy the full Brazilian experience with live DJ music and the best caipirinhas in Orlando!",
  },
  {
    image: bailinho_pic,
    imageAlt: "UCF BRASA Baile da BRASA Picture",
    tag: "Main Event",
    eventTitle: "Baile da BRASA",
    eventDescription:
      "Baile Funk da BRASA! Partnerships with the best clubs in Orlando with open-bars and premium discounts!",
  },
  {
    image: hangout_pic,
    imageAlt: "UCF BRASA Hangout Picture",
    tag: "Casual",
    eventTitle: "BRASA Hangout",
    eventDescription:
      "Looking to meet new Brazilian students at UCF? We got your back! Come eat some coxinhas with us at our hangouts!",
  },
];

const professionalImagesData: EventCardImageObject[] = [
  {
    image: guest_speaker_pic,
    imageAlt: "UCF BRASA Guest Speakers Picture",
    tag: "Networking",
    eventTitle: "Guest Speakers",
    eventDescription:
      "Connect with experts of your field with our re-ocurrent Guest Speaker events! Whatever area you are in, we have professinals to help you out!",
  },
  {
    image: workshop_pic,
    imageAlt: "UCF BRASA Workshops Picture",
    tag: "Learning",
    eventTitle: "BRASA Workshops",
    eventDescription:
      "Expand your skillsets with our workshops! Our workshop areas include finance, marketing, coding, how to get a job and general networking!",
  },
  {
    image: study_pic,
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

// Move this to DB
export const PREV_EBOARD_MEMBERS: PrevBoardTabs[] = [
  {
    year: "2021",
    boardData: [
      {
        id: 1,
        image: marco_pic,
        imageAlt: "Marco Cardone Picture",
        officerName: "Marco Cardone",
        officerTitle: "President",
        officerLinkedIn: "https://www.linkedin.com/in/marco-antonio-rocco-cardone-05a7b917b/",
      },
      {
        id: 2,
        image: manu_2021_pic,
        imageAlt: "Manuela Demarchi Picture",
        officerName: "Manuela Demarchi",
        officerTitle: "Vice President",
        officerLinkedIn: "https://www.linkedin.com/in/manuela-demarchi-1667661aa/",
      },
      {
        id: 3,
        image: luis_2021_pic,
        imageAlt: "Luis Naranjo Picture",
        officerName: "Luis Naranjo",
        officerTitle: "Treasurer",
        officerLinkedIn: "https://www.linkedin.com/in/luis-naranjo-vera/",
      },
      {
        id: 4,
        image: fernanda_barrusco_pic,
        imageAlt: "Fernanda Barrusco Picture",
        officerName: "Fernanda Barrusco",
        officerTitle: "Secretary",
        officerLinkedIn: "https://www.linkedin.com/in/fernanda-barusco/",
      },
      {
        id: 5,
        image: rafa_pic,
        imageAlt: "Rafael Itinoche Picture",
        officerName: "Rafael Itinoche",
        officerTitle: "Director of Pre-Student & Alumni",
        officerLinkedIn: "https://www.linkedin.com/in/rafaelitinoche/",
      },
      {
        id: 6,
        image: chiara_pic,
        imageAlt: "Chiara Alzamora Picture",
        officerName: "Chiara Alzamora",
        officerTitle: "Director of Media",
        officerLinkedIn: "https://www.linkedin.com/in/chiara-alzamora/",
      },
      {
        id: 7,
        image: felipe_caseiro_pic,
        imageAlt: "Felipe Caseiro Picture",
        officerName: "Felipe Caseiro",
        officerTitle: "Director of Sports",
        officerLinkedIn: "https://www.linkedin.com/in/felipe-caseiro/",
      },
      {
        id: 8,
        image: luiza_pic,
        imageAlt: "Luiza Vasconcelos Picture",
        officerName: "Luiza Vasconcelos",
        officerTitle: "Event Coordinator",
        officerLinkedIn: "https://www.linkedin.com/in/luiza-vasconcelos-cardone-1b48251bb/",
      },
    ],
  },
  {
    year: "2022",
    boardData: [
      {
        id: 1,
        image: rafa_pic,
        imageAlt: "Rafael Itinoche Picture",
        officerName: "Rafael Itinoche",
        officerTitle: "President",
        officerLinkedIn: "https://www.linkedin.com/in/rafaelitinoche/",
      },
      {
        id: 2,
        image: monique_pic,
        imageAlt: "Monique Vilhena Picture",
        officerName: "Monique Vilhena",
        officerTitle: "Vice President",
        officerLinkedIn: "https://www.linkedin.com/in/monique-vilhena-913884143/",
      },
      {
        id: 3,
        image: fachetti_pic,
        imageAlt: "Pedro Fachetti Carvalho Picture",
        officerName: "Pedro Fachetti Carvalho",
        officerTitle: "Secretary",
        officerNickname: "Fachetti",
        officerLinkedIn: "https://www.linkedin.com/in/pedro-fachetti-carvalho/",
      },
      {
        id: 4,
        image: mari_r_pic,
        imageAlt: "Mariana Ricci Picture",
        officerName: "Mariana Ricci",
        officerTitle: "Treasurer",
        officerLinkedIn: "https://www.linkedin.com/in/marianaricci02/",
      },
      {
        id: 5,
        image: luis_f_pic,
        imageAlt: "Luis Rehder Ferrari Picture",
        officerName: "Luis Rehder Ferrari",
        officerTitle: "Director of Pre-Student & Alumni",
        officerLinkedIn: "https://www.linkedin.com/in/luis-ferrari-rehder-b3080424b/",
      },
      {
        id: 6,
        image: andre_pic,
        imageAlt: "Andre Gianesi Picture",
        officerName: "Andre Gianesi",
        officerTitle: "Director of Sports",
        officerLinkedIn: "https://www.linkedin.com/in/andre-gianesi/",
      },
      {
        id: 7,
        image: lilly_pic,
        imageAlt: "Lylian Monteiro Picture",
        officerName: "Lylian Monteiro",
        officerTitle: "Director of External Affairs",
        officerNickname: "Lilly",
        officerLinkedIn: "https://www.linkedin.com/in/lylian-monteiro/",
      },
      {
        id: 8,
        image: julie_pic,
        imageAlt: "Julianna Rodriguez Picture",
        officerName: "Julianna Rodriguez",
        officerNickname: "Julie",
        officerTitle: "Director of Marketing",
        officerLinkedIn: "https://www.linkedin.com/in/juliannarodriguez/",
      },
      {
        id: 9,
        image: amanda_pic,
        imageAlt: "Amanda Sobral Picture",
        officerName: "Amanda Sobral",
        officerTitle: "Event Coordinator",
        officerLinkedIn: "https://www.linkedin.com/in/amandasobral1/",
      },
    ],
  },
  {
    year: "2023",
    boardData: [
      {
        id: 1,
        image: fachetti_pic,
        imageAlt: "Pedro Fachetti Carvalho Picture",
        officerName: "Pedro Fachetti Carvalho",
        officerTitle: "President",
        officerNickname: "Fachetti",
        officerLinkedIn: "https://www.linkedin.com/in/pedro-fachetti-carvalho/",
      },
      {
        id: 2,
        image: matheus_pic,
        imageAlt: "Matheus Agramunt Picture",
        officerName: "Matheus Agramunt",
        officerTitle: "Vice President",
        officerLinkedIn: "https://www.linkedin.com/in/matheus-agramunt10/",
      },
      {
        id: 3,
        image: lucas_guilherme_pic,
        imageAlt: "Lucas Medeiros Picture",
        officerName: "Lucas Medeiros",
        officerTitle: "Head of Finance",
        officerLinkedIn: "https://www.linkedin.com/in/medeiros-/",
      },
      {
        id: 4,
        image: julie_pic,
        imageAlt: "Julianna Rodriguez Picture",
        officerName: "Julianna Rodriguez",
        officerTitle: "Co-Head of Marketing",
        officerNickname: "Julie",
        officerLinkedIn: "https://www.linkedin.com/in/juliannarodriguez/",
      },
      {
        id: 5,
        image: jean_thomas_pic,
        imageAlt: "Jean Thomas Picture",
        officerName: "Jean Thomas",
        officerTitle: "Co-Head of Marketing",
        officerLinkedIn: "https://www.linkedin.com/in/jeanthomasmateesco/",
      },
      {
        id: 6,
        image: ella_pic,
        imageAlt: "Ella Santucci Picture",
        officerName: "Ella Santucci",
        officerTitle: "Co-Head of Events",
        officerLinkedIn: "https://www.linkedin.com/in/rafaellasantucci/",
      },
      {
        id: 7,
        image: gabriel_pic,
        imageAlt: "Gabriel Couto Picture",
        officerName: "Gabriel Couto",
        officerTitle: "Co-Head of Events",
        officerLinkedIn: "https://www.linkedin.com/in/gabrielmcouto/",
      },
      {
        id: 8,
        image: nicole_pic,
        imageAlt: "Nicole Weeden Picture",
        officerName: "Nicole Weeden",
        officerTitle: "Head of Professional Development",
        officerLinkedIn: "https://www.linkedin.com/in/nicole-weeden-martins/",
      },
      {
        id: 9,
        image: duda_pic,
        imageAlt: "Maria Eduarda Joazeiro Picture",
        officerName: "Maria Eduarda Joazeiro",
        officerTitle: "Head of Technology",
        officerNickname: "Duda",
        officerLinkedIn: "https://www.linkedin.com/in/maria-eduarda-joazeiro-gomes-983923226/",
      },
    ],
  },
  {
    year: "2024",
    boardData: [
      {
        id: 1,
        image: luca_pic,
        imageAlt: "Luca De Vincenzo Picture",
        officerName: "Luca De Vincenzo",
        officerTitle: "President",
        officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
      },
      {
        id: 2,
        image: guilherme_pic,
        imageAlt: "Guilherme Aranega Picture",
        officerName: "Guilherme Tonini",
        officerTitle: "Vice President",
        officerLinkedIn: "https://www.linkedin.com/in/guilherme-tonini-aranega-b2a4101a1/",
      },
      {
        id: 3,
        image: nino_newpic,
        imageAlt: "Nino Picture",
        officerName: "Nino Portugal",
        officerTitle: "Co-Head of Events",
        officerLinkedIn: "https://www.linkedin.com/in/ninoportugal/",
      },
      {
        id: 4,
        image: gio_pic,
        imageAlt: "Giovana Vicentin Picture",
        officerName: "Giovana Vicentin",
        officerTitle: "Co-Head of Events",
        officerLinkedIn: "https://www.linkedin.com/in/giovanavicentinr/",
      },
      {
        id: 5,
        image: isa_pic,
        imageAlt: "Isadora Prado Picture",
        officerName: "Isadora Prado",
        officerTitle: "Head of Marketing",
        officerLinkedIn: "https://www.linkedin.com/in/isadora-mendon%C3%A7a-prado-6418b021a/",
      },
      {
        id: 6,
        image: leo_pic,
        imageAlt: "Leonora Carvalho Picture",
        officerName: "Leonora Carvalho",
        officerTitle: "Head of Finance",
        officerLinkedIn: "https://www.linkedin.com/in/leonora-carvalho-vaz-de-siqueira-525095210/",
      },
      {
        id: 7,
        image: saki_pic,
        imageAlt: "Sophia Sakakibara Picture",
        officerName: "Sophia Sakakibara",
        officerTitle: "Head of Professional Development",
        officerLinkedIn: "https://www.linkedin.com/in/sophiacapello/",
      },
      {
        id: 8,
        image: lucas_pic,
        imageAlt: "Lucas Bassotto Silveira Picture",
        officerName: "Lucas Bassotto Silveira",
        officerTitle: "Head of Technology",

        officerLinkedIn: "https://www.linkedin.com/in/lucasbassottosilveira/",
      },
    ],
  },
];

// Move this to DB
export const EBOARD_MEMBERS: EBoardData[] = [
  {
    id: 1,
    image: luca_pic,
    imageAlt: "Luca De Vincenzo Picture",
    officerName: "Luca De Vincenzo",
    officerTitle: "President",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/luca-de-vincenzo-4a1b8b1b3/",
  },
  {
    id: 2,
    image: guilherme_pic,
    imageAlt: "Guilherme Aranega Picture",
    officerName: "Guilherme Tonini",
    officerTitle: "Vice President",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/guilherme-tonini-aranega-b2a4101a1/",
  },
  {
    id: 3,
    image: nino_newpic,
    imageAlt: "Nino Picture",
    officerName: "Nino Portugal",
    officerTitle: "Co-Head of Events",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/ninoportugal/",
  },
  {
    id: 4,
    image: gio_pic,
    imageAlt: "Giovana Vicentin Picture",
    officerName: "Giovana Vicentin",
    officerTitle: "Co-Head of Events",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/giovanavicentinr/",
  },
  {
    id: 5,
    image: isa_pic,
    imageAlt: "Isadora Prado Picture",
    officerName: "Isadora Prado",
    officerTitle: "Head of Marketing",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/isadora-mendon%C3%A7a-prado-6418b021a/",
  },
  {
    id: 6,
    image: leo_pic,
    imageAlt: "Leonora Carvalho Picture",
    officerName: "Leonora Carvalho",
    officerTitle: "Head of Finance",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/leonora-carvalho-vaz-de-siqueira-525095210/",
  },
  {
    id: 7,
    image: saki_pic,
    imageAlt: "Sophia Sakakibara Picture",
    officerName: "Sophia Sakakibara",
    officerTitle: "Head of Professional Development",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/sophiacapello/",
  },
  {
    id: 8,
    image: lucas_pic,
    imageAlt: "Lucas Bassotto Silveira Picture",
    officerName: "Lucas Bassotto Silveira",
    officerTitle: "Head of Technology",
    officerBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    officerLinkedIn: "https://www.linkedin.com/in/lucasbassottosilveira/",
  },
];

// Move this to DB
export const BOARD_MEMBERS: BoardData[] = [
  {
    image: chris_pic,
    imageAlt: "Christopher Pavie Suarez Picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Chris Pavie Suarez",
  },
  {
    image: gustavo_new_pic,
    imageAlt: "Gustavo Manfredini picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Gustavo Manfredini",
  },
  {
    image: fernanda_pic,
    imageAlt: "Fernanda Goncalves Picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Fernanda Goncalves",
  },
  {
    image: carol_pic,
    imageAlt: "Carolina Tello Picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Carolina Tello",
  },
  {
    image: caio_pic,
    imageAlt: "Caio Amaral Picture",
    officerTitle: "Event Planning Analyst",
    officerName: "Caio Amaral",
  },
  {
    image: carlos_pic,
    imageAlt: "Carlos Eduardo Picture",
    officerTitle: "Technology Analyst",
    officerName: "Carlos Eduardo Torres",
  },
  {
    image: seabra_pic,
    imageAlt: "Matheus Seabra Picture",
    officerTitle: "Technology Analyst",
    officerName: "Matheus Seabra",
  },
  {
    image: daghum_pic,
    imageAlt: "Lucas Daghum Picture",
    officerTitle: "Technology Analyst",
    officerName: "Lucas Daghum",
  },
  {
    image: paulo_pic,
    imageAlt: "Paulo Nascimento Picture",
    officerTitle: "Technology Analyst",
    officerName: "Paulo Nascimento",
  },
  {
    image: leticia_pic,
    imageAlt: "Leticia Novaes Bispo Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Leticia Novaes Bispo",
  },
  {
    image: mktgiovanna_pic,
    imageAlt: "Giovanna Vesselizza Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Giovanna Vesselizza",
  },
  {
    image: ana_pic,
    imageAlt: "Ana Beatriz Dantas Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Ana Beatriz Dantas",
  },
  {
    image: luana_pic,
    imageAlt: "Luana Agramunt Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Luana Agramunt",
  },
  {
    image: eric_newpic,
    imageAlt: "Eric Tavora Picture",
    officerTitle: "Marketing Analyst",
    officerName: "Eric Tavora",
  },
  {
    image: matheus_pic,
    imageAlt: "Matheus Agramunt Picture",
    officerTitle: "Professional Development Analyst",
    officerName: "Matheus Agramunt",
  },
  {
    image: isabele_pic,
    imageAlt: "Isabelle Miguel Picture",
    officerTitle: "Professional Development Analyst",
    officerName: "Isabelle Miguel",
  },
  {
    image: mel_pic,
    imageAlt: "Mel Wolff Picture",
    officerTitle: "Professional Development Analyst",
    officerName: "Mel Wolff",
  },
  {
    image: matheusf_pic,
    imageAlt: "Matheus Gomes Picture",
    officerTitle: "Finance Analyst",
    officerName: "Matheus Gomes",
  },
  {
    image: manu_pic,
    imageAlt: "Manuela Martins Picture",
    officerTitle: "Finance Analyst",
    officerName: "Manuela Martins",
  },
  {
    image: pedro_pic,
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

export const MOBILE_SIDEBAR_DATA: MobileSidebarData[] = [
  {
    name: "Home",
    route: "/",
    icon: faHome,
  },
  {
    name: "Events",
    route: "/events",
    icon: faCalendarDays,
  },
  {
    name: "Meet the Board",
    route: "/meet-the-board",
    icon: faHandshake,
  },
  {
    name: "Become a Member",
    route: "/become-member",
    icon: faPeopleGroup,
  },
  {
    name: "Resources",
    route: "/resource",
    icon: faLayerGroup,
  },
  {
    name: "Gallery",
    route: "/gallery",
    icon: faCamera,
  },
];

export const UPCOMING_EVENTS_DATA: UpcomingEventsData[] = [
  {
    date: "TBD",
    time: "2:00 PM - 8:00 PM",
    image: churras_pic,
    eventName: "Churrasco BRASA",
    eventDescription: "Join us for a day full of Brazilian music, dance, and lots of fun!",
    location: "300 Dalhausser Ln, Oviedo, FL 32765",
    moreInfoLink: "https://www.instagram.com/brasa.ucf/",
    buyTicketLink: "https://www.instagram.com/brasa.ucf/",
    eventType: "Social",
    isPaid: true,
  },
  {
    date: "TBD",
    time: "8:00 PM - 2:00 AM",
    image: bailinho_pic,
    eventName: "Bailinho Brasa",
    eventDescription: "Join us for a night of Brazilian music, dance, and culture!",
    location: "5250 International Dr, Orlando, FL 32819",
    moreInfoLink: "https://www.instagram.com/brasa.ucf/",
    buyTicketLink: "https://www.instagram.com/brasa.ucf/",
    eventType: "Social",
    isPaid: true,
  },
  {
    date: "TBD",
    time: "8:00 PM - 2:00 AM",
    image: guest_speaker_pic,
    eventName: "Guest Speaker",
    eventDescription: "Join us to learn more with Brazilian professionals!",
    location: "University of Central Florida",
    moreInfoLink: "https://www.instagram.com/brasa.ucf/",
    eventType: "Professional",
    isPaid: false,
  },
];

//GalleryBoxData array for easier implementation with .map
export const GALLERY_DATA: GalleryBoxData[] = [
  {
    //Event 1
    image: cover_feb29,
    imageAlt: "Churrasco",
    date: "02/29/2024",
    driveLink:
      "https://drive.google.com/drive/folders/1Va_pLQMCGyjP1SPlpFw_ZVvxFscYOc1G?usp=share_link",
    eventDesc: "CHURRASCO",
  },
  {
    //Event 2
    image: cover_mar09,
    imageAlt: "Churrasco",
    date: "03/09/2024",
    driveLink:
      "https://drive.google.com/drive/folders/1A6YB-SWCSOIUmU4mX324vqP7Mb8JqmD8?usp=share_link",
    eventDesc: "CHURRASCO",
  },
  {
    //Event 3
    image: cover_mar30,
    imageAlt: "Churrasco",
    date: "03/30/2024",
    driveLink:
      "https://drive.google.com/drive/folders/1tp9yn6Graocbc4ShYkwQTkCHWO4w5OQr?usp=share_link",
    eventDesc: "CHURRASCO",
  },
  {
    //Event 4
    image: cover_jul11,
    imageAlt: "BOUNCE",
    date: "11/07/2024",
    driveLink:
      "https://drive.google.com/drive/folders/1kX1vX6JnupMFxUtGwA_RFy9ASUSnep81?usp=share_link",
    eventDesc: "BOUNCE X BRASA",
  },
  {
    //Event 5
    image: cover_aug31,
    imageAlt: "Churrasco",
    date: "08/31/2024",
    driveLink:
      "https://drive.google.com/drive/folders/1jed59sv4upr-sAXeH1NNnLqmP7x1jpfS?usp=share_link",
    eventDesc: "CHURRASCO",
  },
  {
    //Event 6
    image: cover_oct05,
    imageAlt: "Churrasco",
    date: "10/05/2024",
    driveLink:
      "https://drive.google.com/drive/folders/1oFiy3g1Q0q6IQ7QlVYNccnWAmbMugaoT?usp=share_link",
    eventDesc: "CHURRASCO",
  },
];
