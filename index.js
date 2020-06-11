const slider = document.querySelector(".slider");
const firstChild = slider.firstElementChild;
const starBox = document.querySelector(".star");
let startChild = firstChild;

function repeat() {
  if (startChild.nextElementSibling) {
    startChild.classList.add("hidden");
    startChild.nextElementSibling.classList.remove("hidden");
    startChild.nextElementSibling.classList.add("next");
    startChild = startChild.nextElementSibling;
  } else {
    startChild.classList.add("hidden");
    firstChild.classList.remove("hidden");
    firstChild.classList.add("next");
    const span = document.createElement("span");
    if (starBox.childElementCount !== 8) {
      span.innerText = "🌙";
      starBox.appendChild(span);
    }
    startChild = firstChild;
  }
}

setInterval(repeat, 1500);
