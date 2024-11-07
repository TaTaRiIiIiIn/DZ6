const form = document.getElementById("registrationForm");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", validateForm);

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";

  document.getElementById("name").classList.remove("error");
  document.getElementById("email").classList.remove("error");
  document.getElementById("password").classList.remove("error");

  let valid = true;

  if (name.trim() === "") {
    document.getElementById("nameError").innerText = "Name cannot be empty";
    document.getElementById("name").classList.add("error");
    valid = false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").innerText = "Invalid email format";
    document.getElementById("email").classList.add("error");
    valid = false;
  }

  if (password.length < 8) {
    document.getElementById("passwordError").innerText =
      "Password must be at least 8 characters long";
    document.getElementById("password").classList.add("error");
    valid = false;
  }

  if (valid) {
    alert("Registration successful!");
  }
}
