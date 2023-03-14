const waypoints = document.querySelectorAll("circle");
const pilsetas = document.querySelectorAll(`.pilseta`);
const revealer = document.querySelector(".revealer");

let score = document.querySelector("h1");

let currentScore = 0;

const handleVietas = function (arr) {
  arr.forEach((el) => {
    if (el.tagName === `circle`) el.classList.add("hidden");
    el.addEventListener(`click`, (e) => {
      if (currentScore === 10) return;
      const searchID = el.id;
      currentScore++;
      score.textContent = currentScore + ` /10`;
      if (el.tagName === `circle`) el.remove();
      const placeCard = document.querySelector(`#${searchID}`);
      placeCard.remove();
    });
  });
};

handleVietas(waypoints);
handleVietas(pilsetas);

revealer.addEventListener(`click`, (e) => {
  if (revealer.checked === true) {
    waypoints.forEach((el) => {
      el.classList.remove(`hidden`);
    });
  } else if (revealer.checked === false) {
    waypoints.forEach((el) => {
      el.classList.add(`hidden`);
    });
  }
});
