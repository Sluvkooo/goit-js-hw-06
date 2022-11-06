const inputEl = document.querySelector("#validation-input");

function onInputTyping() {
  const inputTextLength = inputEl.value.length;
  const dataLength = Number(inputEl.getAttribute("data-length"));

  if (inputTextLength > dataLength || inputTextLength < dataLength) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }

  if (inputTextLength === dataLength) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  }

  if (!inputTextLength) {
    inputEl.classList.remove("valid");
    inputEl.classList.remove("invalid");
  }
}

inputEl.addEventListener("blur", onInputTyping);
