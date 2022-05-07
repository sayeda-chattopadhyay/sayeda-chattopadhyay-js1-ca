const form = document.querySelector("form");

const name = document.querySelector("#name");
const nameError = document.querySelector("#name-error");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");

const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");

const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");

const button = document.querySelector("button");

function formValidation() {
  event.preventDefault();

  if (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 9) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(address.value, 24) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}

form.addEventListener("submit", formValidation);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternCheck = regEx.test(email);
  return patternCheck;
}
