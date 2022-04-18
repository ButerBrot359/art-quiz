import { page } from ".";
import { questionId } from "./gamePage";
import { images } from "../template/data";
import { checkAnswer, setQuestionPage, refreshTimer } from "./gamePage";
import {
  all_btn_audio,
  next_paper,
  right_answer,
  wrong_answer,
  end_game,
} from ".";
import { urlLink } from "./gamePage";
export function defineELBase() {
  const pictureCard = document.querySelector("#picture_card");
  const settingsBtn = document.querySelector("#setting_but");
  const artistCard = document.querySelector("#artist_card");

  let volume = document.querySelector("#volume_bar");
  let timer = document.querySelector("#timer_bar");
  let volume_switch = document.querySelector("#off_on_volume");
  let timer_switch = document.querySelector("#off_on_timer");
    changeOptins(volume, timer, volume_switch, timer_switch)
  artistCard.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }

    page.buildCategoryPage("artist");
  });
  pictureCard.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    page.buildCategoryPage("picture");
  });
  settingsBtn.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    changeOptins(volume, timer, volume_switch, timer_switch)
  });
  volume.addEventListener("change", function () {
    page.settings.volume.value = volume.value;
    [all_btn_audio, right_answer, wrong_answer, next_paper, end_game].forEach(el => {
        el.volume = volume.value
    })
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
  });
  timer.addEventListener("click", function () {
    page.settings.timer.value = timer.value;
    page.cur_time = timer.value;
    timer.nextElementSibling.textContent = timer.value;
  });
  volume_switch.addEventListener("change", function () {
    page.settings.volume.is_on = volume_switch.checked;
  });
  timer_switch.addEventListener("change", function () {
    page.settings.timer.is_on = timer_switch.checked;
  });
}

function changeOptins(volume, timer, volume_switch, timer_switch) {
    volume_switch.checked = page.settings.volume.is_on;
    timer_switch.checked = page.settings.timer.is_on;
    volume.value = page.settings.volume.value;
    timer.value = page.settings.timer.value;
    timer.nextElementSibling.textContent = page.settings.timer.value;
}
export function defineELCateg() {
  const homeBtn = document.querySelector(".back_to_main");
  const stats = document.querySelectorAll(".stats_overlay");

  let names = document.querySelectorAll(".card_name");
  let images = document.querySelectorAll(".card_img");
  stats.forEach((el) => {
    el.addEventListener("click", function () {
      if (page.settings.volume.is_on) {
        all_btn_audio.play();
      }
      setStatistic(el.parentNode.id);
    });
  });
  homeBtn.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    page.buildBasePage();
  });
  names.forEach((el) => {
    el.addEventListener("click", function () {
      if (page.settings.volume.is_on) {
        all_btn_audio.play();
      }
      page.buildGamePage(el.parentElement.id);
    });
  });
  images.forEach((el) => {
    el.addEventListener("click", function () {
      if (page.settings.volume.is_on) {
        all_btn_audio.play();
      }
      page.buildGamePage(el.parentElement.id);
    });
  });
}
function setStatistic(id) {
  let homeback = document.querySelector("#stats_popup_homeback");
  let categback = document.querySelector("#stats_popup_categback");
  homeback.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    page.buildBasePage();
  });
  categback.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    page.buildCategoryPage(page.gameTheme);
  });

  let num_of_correct_ans = document.querySelector(".final_score span");
  let question_list;
  if (page.gameTheme == "artist") {
    question_list = images.slice(questionId[id] * 10 - 10, questionId[id] * 10);
  } else {
    question_list = images.slice(
      questionId[id] * 10 + 110,
      questionId[id] * 10 + 120
    );
  }
  let answer_cards = document.querySelectorAll(".card_gived_answers");

  let count = 0;
  question_list.forEach((v, i) => {
    answer_cards[
      i
    ].firstElementChild.src = `${urlLink}${question_list[i].imageNum}.jpg`;
    answer_cards[
      i
    ].lastElementChild.innerHTML = `<span>${v.name}</span><span>${v.author}</span><span>${v.year}</span>`;
    if (page.progress[page.gameTheme][id].num[i]) {
      answer_cards[i].firstElementChild.classList.add("active");
      count++;
    }
  });
  num_of_correct_ans.textContent = count;
}
export function defineELGameArtist() {
  let answers = document.querySelectorAll(".answer");
  let next = document.querySelector(".next_question_btn");
  let back_categ = document.querySelector(".back_to_categ");
  let back_home = document.querySelector(".back_to_main");

  back_categ.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    refreshTimer();
    clearBaseStats();
    page.buildCategoryPage(page.gameTheme);
  });
  back_home.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    refreshTimer();
    clearBaseStats();
    page.buildBasePage();
  });
  if (page.gameTheme == "artist") {
    answers.forEach((el) => {
      el.addEventListener("click", function () {
        checkAnswer(el.lastChild.textContent);
      });
    });
  } else {
    answers.forEach((el) => {
      el.addEventListener("click", function () {
        checkAnswer(el.id.split("id_of_pic-")[1]);
      });
    });
  }
  next.addEventListener("click", function () {
    if (page.count < 10) {
      if (page.settings.volume.is_on) {
        next_paper.play();
      }
      let type_answer = document.querySelector(".popup_answer_type");
      type_answer.classList.remove("fail_type");
      type_answer.classList.remove("pass_type");
      setQuestionPage();
    }
  });
}

export function defineELPopupBtns() {
  let restart = document.querySelector(".popup_buttons.restart_btn");
  let home = document.querySelector(".popup_buttons.back_home_btn");
  let categ = document.querySelector(".popup_buttons.back_categ_btn");

  home.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    refreshTimer();
    setStats();
    page.buildBasePage();
  });
  restart.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    setStats();
    refreshTimer();
    page.buildGamePage(page.current_categ);
  });
  categ.addEventListener("click", function () {
    if (page.settings.volume.is_on) {
      all_btn_audio.play();
    }
    setStats();
    refreshTimer();
    page.buildCategoryPage(page.gameTheme);
  });
}

function setStats() {
  page.progress[page.gameTheme][page.current_categ].pass = true;
  page.progress[page.gameTheme][page.current_categ].num = page.progress_arr;
  clearBaseStats();
}
function clearBaseStats() {
  page.progress_arr = [];
  page.count = 0;
}

export function setCardsImages() {
  let image_cards = document.querySelectorAll(".card_img");
  image_cards.forEach((el) => {
    el.src = `./img/${page.gameTheme}/${el.parentElement.id}.jpeg`;
  });
}
