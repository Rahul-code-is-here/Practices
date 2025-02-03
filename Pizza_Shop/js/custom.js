document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    if (!emailField.value.trim()) {
      emailError.classList.remove("d-none");
      isValid = false;
    }

    if (!passwordField.value.trim()) {
      passwordError.classList.remove("d-none");
      isValid = false;
    }

    if (isValid) {
      alert("Login successful!");
    }
  });
});

// checkbox

document.getElementById("selectAll").addEventListener("change", function () {
  let checkboxes = document.querySelectorAll(".row-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = this.checked;
  });
});
