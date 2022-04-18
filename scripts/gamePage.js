import { end_game, page } from ".";
import { images } from "../template/data";
import { right_answer, wrong_answer } from ".";
import { defineELPopupBtns } from "./setEvents";

export const questionId = {
  portrait: 1,
  landscape: 2,
  still_life: 3,
  graphic: 4,
  antique: 5,
  avant_garde: 6,
  renaissance: 7,
  surrealism: 8,
  kitsch: 9,
  minimalism: 10,
  avangard: 11,
  industrial: 12,
};
export const urlLink = 'https://raw.githubusercontent.com/ButerBrot359/image-data/master/img/'

var timeinterval;
function checkClock() {
  let timer = document.querySelector("#timer_id");
  timer.classList.add("active_timer");
  function updateClock() {
    timer.textContent = page.cur_time;
    if (page.cur_time <= 0) {
      refreshTimer();
      checkAnswer("fail", true);
    } else {
      page.cur_time--;
    }
  }

  updateClock();

  timeinterval = setInterval(updateClock, 1000);
}
export function refreshTimer() {
  clearInterval(timeinterval);
  page.cur_time = page.settings.timer.value;
}
export function setQuestionPage() {
  refreshTimer();
  if (page.gameTheme == "artist") {
    let question_list = images.slice(
      questionId[page.current_categ] * 10 - 10,
      questionId[page.current_categ] * 10
    );
    let image_box = document.querySelector(".question_img");
    let correct_answer = question_list[page.count].author;
    page.correct_answer = correct_answer;
    page.correct_el = question_list[page.count];
    let ans_arr = generateAnswers(correct_answer);
    setAnswers(ans_arr);
    progressCheck(page.progress_arr, page.count);
    if (page.settings.timer.is_on) {
      checkClock();
    }

    const img = document.querySelector(".box_img");
    img.src = `${urlLink}${
      question_list[page.count].imageNum
    }.jpg`;
    img.alt = "pic_img";
    img.onload = () => {
      image_box.appendChild(img);
    };
  } else {
    let question_list = images.slice(
      questionId[page.current_categ] * 10 + 110,
      questionId[page.current_categ] * 10 + 120
    );
    let correct_answer = question_list[page.count].imageNum;
    page.correct_answer = correct_answer;
    page.correct_el = question_list[page.count];
    let ans_arr = generateAnswers(correct_answer);
    setAnswers(ans_arr);
    progressCheck(page.progress_arr, page.count);
    if (page.settings.timer.is_on) {
      checkClock();
    }
  }
}

export function checkAnswer(choosen_answer, expend) {
  refreshTimer();
  if (expend) {
    if (page.gameTheme == "artist") {
      let answer = document.querySelector(".answer");
      answer.lastElementChild.textContent = "fail";
      answer.click();
    } else {
      let answer = document.querySelector(".answer.answer_for_pic");
      answer.id = "id_of_pic-fail";
      answer.click();
    }
  } else {
    let type_answer = document.querySelector(".popup_answer_type");
    let pic = document.querySelector(".popup_img img");
    let pic_name = document.querySelector(".popup_answer-picname");
    let author = document.querySelector(".popup_answer-author");
    let date = document.querySelector(".popup_answer-date");
    let block_final = document.querySelector(".popup_answer");
    if (
      choosen_answer == page.correct_answer ||
      page.correct_el.imageNum.toString() == choosen_answer
    ) {
      if (page.settings.volume.is_on && page.count < 9) {
        right_answer.play();
      }

      page.progress_arr.push(true);
      type_answer.classList.add("pass_type");
      type_answer.innerHTML = `<i class="fas fa-check"></i>`;
    } else {
      if (page.settings.volume.is_on && page.count < 9) {
        wrong_answer.play();
      }

      page.progress_arr.push(false);
      type_answer.classList.add("fail_type");
      type_answer.innerHTML = `<i class="fas fa-times"></i>`;
    }
    pic.src = `${urlLink}${page.correct_el.imageNum}.jpg`;
    pic.alt = "pic_img";
    pic_name.textContent = page.correct_el.name;
    author.textContent = page.correct_el.author;
    date.textContent = page.correct_el.year;
    page.count++;
    if (page.count >= 10) {
      if (page.settings.volume.is_on) {
        end_game.play();
      }
      let num_of_correct_ans = page.progress_arr.reduce( (accum, cur) => {
        return cur ? ++accum : accum
      }, 0);
      
      let span = document.createElement("p");
      span.style.fontSize = "30px";
      span.style.textDecoration = "underline";
      span.style.textAlign = "center";
      span.style.padding = "0 20px"

      span.textContent = `Игра окончена, количество правильных ответов ${num_of_correct_ans} из 10`;
      let block_btns = document.querySelector(".popup_buttons_block");
      block_btns.innerHTML = `                    <a href="#main_title" class='popup_buttons restart_btn'>Restart</a>
            <a href="#main_title" class='popup_buttons back_home_btn'>Home</a>
            <a href="#main_title" class='popup_buttons back_categ_btn'>Category</a>`;

      block_final.appendChild(span);
      defineELPopupBtns();
    }
  }
}

function progressCheck(progress_arr, count) {
  let progress_circles = document.querySelectorAll(".progress_circle");
  progress_arr.forEach((v, i) => {
    if (v) {
      progress_circles[i].classList.add("pass");
    } else {
      progress_circles[i].classList.add("fail");
    }
  });
  progress_circles[count].classList.add("current");
}
function setAnswers(arr) {
  if (page.gameTheme == "artist") {
    let answers_spans = document.querySelectorAll(".answer_text");
    arr.forEach((v, i) => {
      answers_spans[i].textContent = v;
    });
  } else {
    let answers_spans = document.querySelectorAll(".answer.answer_for_pic img");
    let author = document.querySelector(
      ".question_title.question_title_for_pic span"
    );
    arr.forEach((v, i) => {
      answers_spans[i].src = `${urlLink}${v}.jpg`;
      answers_spans[i].parentElement.id = `id_of_pic-${v}`;
    });
    author.textContent = page.correct_el.author;
  }
}
function generateAnswers(right_ans) {
  let ans = [];
  let pos_num = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; i++) {
    if (i == pos_num) {
      ans.push(right_ans);
    } else {
      ans.push(addSubAnswers(ans));
    }
  }
  return ans;
}

function addSubAnswers(arr) {
  if (page.gameTheme == "artist") {
    let num = Math.floor(Math.random() * 238);
    if (arr.includes(images[num].author)) {
      return addSubAnswers(arr);
    } else {
      return images[num].author;
    }
  } else {
    let num = Math.floor(Math.random() * 238);
    if (arr.includes(images[num].imageNum)) {
      return addSubAnswers(arr);
    } else {
      return images[num].imageNum;
    }
  }
}
