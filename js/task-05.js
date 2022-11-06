const inputEl = document.querySelector("#name-input");
const textEl = document.querySelector("#name-output");

function onInputTyping(evt) {
  textEl.textContent = evt.currentTarget.value;

  if (!textEl.textContent) {
    textEl.textContent = "Anonymous";
  }
}

inputEl.addEventListener("input", onInputTyping);
