let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let errorMessage = document.querySelector(".error");

function matachPassword() {
  if (password.value === "" || password.value !== confirmPassword.value) {
    errorMessage.textContent = "*Passwords do not match.";
    password.style.borderColor = "red";
    confirmPassword.style.borderColor = "red";
  } else {
    errorMessage.textContent = "";
    password.style.borderColor = "blue";
    confirmPassword.style.borderColor = "blue";
  }
}
matachPassword();

password.addEventListener("keyup", (e) => {
  matachPassword();
});

confirmPassword.addEventListener("keyup", (e) => {
  matachPassword();
});
