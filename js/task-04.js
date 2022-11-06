const counterValueEl = document.querySelector("#value");
const incrementButtonEl = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrementButtonEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);

function onDecrementBtnClick() {
  counterValueEl.textContent--;
}

function onIncrementBtnClick() {
  counterValueEl.textContent++;
}

incrementButtonEl.addEventListener("click", onIncrementBtnClick);
decrementButtonEl.addEventListener("click", onDecrementBtnClick);
