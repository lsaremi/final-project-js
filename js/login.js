import { checkUser } from "./api.js";

const form = document.querySelector("form");
const emailInput = document.getElementById("email-input");
const emailIcon = document.getElementById("email-icon");
const emailIconBlack = document.getElementById("email-icon-black");
const passwordInput = document.getElementById("password-input");
const passwordIcon = document.getElementById("password-icon");
const passwordIconBlack = document.getElementById("password-icon-black");
const eyeGray = document.getElementById("eye-gray");
const eyeBlack = document.getElementById("eye-black");
const eye = document.getElementById("eye");
const signInButton = document.getElementById("signin-button");
const rememberMeCheckbox = document.querySelector('input[type="checkbox"]');
const prevIcon = document.querySelector("#prev-icon");

prevIcon.addEventListener("click", function () {
  window.location.href = "slider.html";
});

// Function to save user input in local storage
function saveUserInput(email, password) {
  localStorage.setItem("savedEmail", email);
  localStorage.setItem("savedPassword", password);
}

// Function to load user input from local storage
function loadUserInput() {
  const savedEmail = localStorage.getItem("savedEmail");
  const savedPassword = localStorage.getItem("savedPassword");

  if (savedEmail && savedPassword) {
    emailInput.value = savedEmail;
    passwordInput.value = savedPassword;
    rememberMeCheckbox.checked = true;
  }
}

// Function to toggle password visibility
function togglePasswordVisibility() {
  const isPasswordVisible = passwordInput.type === "text";
  if (isPasswordVisible) {
    passwordInput.type = "password";
    eye.classList.add("hidden");
    eyeBlack.classList.remove("hidden");
  } else {
    passwordInput.type = "text";
    eye.classList.remove("hidden");
    eyeBlack.classList.add("hidden");
  }
}

function validateInputs() {
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Disable the button if either input is empty
  if (emailValue === "" || passwordValue === "") {
    signInButton.disabled = true;
    signInButton.style.background = "rgb(75 85 99)";
    emailIcon.classList.remove("hidden");
    emailIconBlack.classList.add("hidden");
    passwordIcon.classList.remove("hidden");
    passwordIconBlack.classList.add("hidden");
    eyeGray.classList.remove("hidden");
    eyeBlack.classList.add("hidden");
  } else {
    signInButton.disabled = false;
    emailIcon.classList.add("hidden");
    emailIconBlack.classList.remove("hidden");
    passwordIcon.classList.add("hidden");
    passwordIconBlack.classList.remove("hidden");
    eyeGray.classList.add("hidden");
    eyeBlack.classList.remove("hidden");
    signInButton.style.background = "black";
  }
  return emailValue !== "" && passwordValue !== "";
}

// Function to handle the form submission
const handleFormSubmit = async (e) => {
  e.preventDefault();

  // Get the user's input
  const email = emailInput.value;
  const password = passwordInput.value;

  // Save user input if "Remember me" is checked
  if (rememberMeCheckbox.checked) {
    saveUserInput(email, password);
  }

  // Validate the inputs
  if (!validateInputs()) {
    return;
  }
  // Submit the form to the API
  checkUser(email, password);
};

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  loadUserInput();
  validateInputs();

  // Add an event listener to the "Remember me" checkbox
  rememberMeCheckbox.addEventListener("change", () => {
    if (!rememberMeCheckbox.checked) {
      // If the checkbox is unchecked, remove user info from local storage
      localStorage.removeItem("savedEmail");
      localStorage.removeItem("savedPassword");
    }
  });

  form.addEventListener("submit", handleFormSubmit);
});

// Add event listeners to the toggle password visibility buttons
eyeBlack.addEventListener("click", togglePasswordVisibility);
eye.addEventListener("click", togglePasswordVisibility);

// Add event listeners to the email and password inputs
emailInput.addEventListener("input", validateInputs);
passwordInput.addEventListener("input", validateInputs);
