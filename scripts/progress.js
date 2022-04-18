import { page } from ".";

export function checkProgress() {
  let cards = document.querySelectorAll(".card_img");
  let progress_bars = page.progress[page.gameTheme];
  cards.forEach((elem) => {
    if (progress_bars[elem.parentNode.id].pass) {
      elem.classList.add("active");
      let count = progress_bars[elem.parentNode.id].num.reduce((acc, el) => {
        return el ? ++acc : acc
      }, 0);
      elem.nextElementSibling.lastElementChild.textContent = count;
    }
  });
}
