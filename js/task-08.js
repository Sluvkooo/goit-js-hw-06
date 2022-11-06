const loginEl = document.querySelector(".login-form");

loginEl.addEventListener("submit", onEvenLoginSubmitEl);

function onEvenLoginSubmitEl(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;

  const password = event.currentTarget.elements.password.value;

  if (email === "" || password === "") {
    alert("Please fill in all the fields!");
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);

  event.currentTarget.reset();
}
