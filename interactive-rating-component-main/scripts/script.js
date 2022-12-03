const rateButtons = document.querySelectorAll(".button");
const submitBtn = document.querySelector(".primary-button");
const rateContainer = document.getElementById("rate-container");
const thanksContainer = document.querySelector(".thanks-container");
const rate = document.getElementById("rate");

let selectedRate;

const resetButtons = (innerText) => {
  rateButtons.forEach((button) => {
    if (button.innerHTML !== innerText) {
      button.classList.remove("selected-button");
      button.classList.add("button");
    }
  });
};
const submitRate = () => {
  if (selectedRate) {
    rate.innerHTML = selectedRate;
    thanksContainer.classList.remove("inactive");
    rateContainer.classList.add("inactive");
  }
};

rateButtons.forEach((element) => {
  element.addEventListener("click", () => {
    resetButtons(element.innerHTML);
    selectedRate === element.innerHTML
      ? (selectedRate = undefined)
      : (selectedRate = element.innerHTML);
    element.classList.toggle("selected-button");
    element.classList.toggle("button");
  });
});
submitBtn.addEventListener("click", submitRate);
