const waypoints = document.querySelectorAll("circle");

let score = document.querySelector("h1");

let currentScore = 0;

waypoints.forEach((el) => {
  el.addEventListener(`click`, (e) => {
    const searchID = el.id.replaceAll(" ", "_");
    currentScore++;
    score.textContent = currentScore + ` /10`;
    el.remove();
    const placeCard = document.querySelector(`#${searchID}`);
    placeCard.remove();
  });
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const zoomElement = document.querySelector(".zoom");
let zoom = 1;
let prevX = 0;
let prevY = 0;
let dragging = false;
let translationX = 0;
let translationY = 0;
const ZOOM_SPEED = 0.1;
const MAX_ZOOM = 3;

zoomElement.addEventListener("mousedown", (e) => {
  e.preventDefault();
  prevX = e.clientX;
  prevY = e.clientY;
  dragging = true;
});

document.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (dragging) {
    const diffX = e.clientX - prevX;
    const diffY = e.clientY - prevY;
    prevX = e.clientX;
    prevY = e.clientY;
    translationX += diffX;
    translationY += diffY;
    zoomElement.style.transform = `scale(${zoom}) translate(${translationX}px, ${translationY}px)`;
  }
});

document.addEventListener("mouseup", (e) => {
  dragging = false;
});

document.addEventListener("wheel", (e) => {
  e.preventDefault();
  if (e.deltaY < 0) {
    if (zoom < MAX_ZOOM) {
      zoom += ZOOM_SPEED;
    }
  } else {
    if (zoom > ZOOM_SPEED) {
      zoom -= ZOOM_SPEED;
    } else {
      zoom = 0.1;
    }
  }
  zoomElement.style.transform = `scale(${zoom}) translate(${translationX}px, ${translationY}px)`;
});
