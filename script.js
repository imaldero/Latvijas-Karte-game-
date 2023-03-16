const waypoints = document.querySelectorAll("circle");
const pilsetas = document.querySelectorAll(`.pilseta`);
const revealer = document.querySelector(".revealer");
const lines = document.querySelectorAll(`path`);

lines.forEach((e) => {
  const lineLength = e.getTotalLength();
  e.style.strokeDasharray = lineLength;
  e.style.strokeDashoffset = lineLength;
  e.style.animation = `draw 4s ease`;
  e.style.animationFillMode = `forwards`;
});
const vietas = [
  `Vitols`,
  `Gulbene`,
  `Darzins`,
  `Rainis`,
  `Liepaja`,
  `Skrunda`,
  `Sigulda`,
  `Jelgava`,
  `Ventspils`,
  `Igate`,
];

let score = document.querySelector("h1");

let currentScore = 0;

const handleVietas = function (arr) {
  arr.forEach((el) => {
    el.addEventListener(`click`, (e) => {
      if (el.id === localStorage.getItem(`currName`) + `_map`) {
        if (currentScore === 10) return;
        if (el.tagName === `circle`) el.remove();
        document.querySelector(`#${localStorage.getItem(`currName`)}`).remove();
        currentScore++;
        score.textContent = `${currentScore}/10`;
        const index = vietas.indexOf(`${localStorage.getItem(`currName`)}`);
        vietas.splice(index, 1);
        startGame(vietas);
      }
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

const startGame = function (arr) {
  if (currentScore === 10) return;
  const nr = Math.floor(Math.random() * arr.length);
  const currentName = arr[nr];
  localStorage.setItem(`currName`, `${currentName}`);
  const currentCard = document.querySelector(`#${currentName}`);
  currentCard.classList.remove(`gone`);
};

startGame(vietas);
