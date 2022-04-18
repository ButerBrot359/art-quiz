import {
  basePage,
  categPage,
  artistGamePage,
  pictureGamePage,
} from "../template/basePage";
import {
  defineELBase,
  defineELCateg,
  defineELGameArtist,
  setCardsImages,
} from "./setEvents";
import { checkProgress } from "./progress";
import { setQuestionPage } from "./gamePage";
import "../styles/style.scss";
import "../styles/adaptive.scss";

export const all_btn_audio = new Audio("./sounds/sound_on.mp3");
export const next_paper = new Audio("./sounds/page.mp3");
export const right_answer = new Audio("./sounds/right.mp3");
export const wrong_answer = new Audio("./sounds/wrong.mp3");
export const end_game = new Audio("./sounds/end.mp3");

class Page {
  constructor() {
    this.progress_arr = [];
    this.count = 0;
    this.progress = localStorage.hasOwnProperty("progress")
      ? JSON.parse(localStorage.getItem("progress"))
      : {
          artist: {
            portrait: {
              pass: false,
              num: [],
            },
            landscape: {
              pass: false,
              num: [],
            },
            still_life: {
              pass: false,
              num: [],
            },
            graphic: {
              pass: false,
              num: [],
            },
            antique: {
              pass: false,
              num: [],
            },
            avant_garde: {
              pass: false,
              num: [],
            },
            renaissance: {
              pass: false,
              num: [],
            },
            surrealism: {
              pass: false,
              num: [],
            },
            kitsch: {
              pass: false,
              num: [],
            },
            minimalism: {
              pass: false,
              num: [],
            },
            avangard: {
              pass: false,
              num: [],
            },
            industrial: {
              pass: false,
              num: [],
            },
          },
          picture: {
            portrait: {
              pass: false,
              num: [],
            },
            landscape: {
              pass: false,
              num: [],
            },
            still_life: {
              pass: false,
              num: [],
            },
            graphic: {
              pass: false,
              num: [],
            },
            antique: {
              pass: false,
              num: [],
            },
            avant_garde: {
              pass: false,
              num: [],
            },
            renaissance: {
              pass: false,
              num: [],
            },
            surrealism: {
              pass: false,
              num: [],
            },
            kitsch: {
              pass: false,
              num: [],
            },
            minimalism: {
              pass: false,
              num: [],
            },
            avangard: {
              pass: false,
              num: [],
            },
            industrial: {
              pass: false,
              num: [],
            },
          },
        };
    this.settings = localStorage.hasOwnProperty("settings")
      ? JSON.parse(localStorage.getItem("settings"))
      : {
          volume: {
            is_on: true,
            value: 0.9,
          },
          timer: {
            is_on: false,
            value: 15,
          },
        };
    this.cur_time = this.settings.timer.value;
  }
  buildBasePage() {
    let body = document.querySelector("body");
    body.innerHTML = basePage;
    defineELBase();
  }
  buildCategoryPage(type) {
    this.gameTheme = type;
    let body = document.querySelector("body");
    body.innerHTML = categPage;
    setCardsImages();
    checkProgress();
    defineELCateg();
  }
  buildGamePage(id) {
    let body = document.querySelector("body");
    this.current_categ = id;
    if (this.gameTheme == "artist") {
      body.innerHTML = artistGamePage;
    } else {
      body.innerHTML = pictureGamePage;
    }
    defineELGameArtist();
    setQuestionPage();
  }
}
let page = new Page();
function setLocalStorage() {
  localStorage.setItem("progress", JSON.stringify(page.progress));
  localStorage.setItem("settings", JSON.stringify(page.settings));
}
window.addEventListener("beforeunload", setLocalStorage);
page.buildBasePage();

export { page };
