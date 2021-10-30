const darkModeToggle = document.getElementById("btnToggleDark");
darkModeToggle.addEventListener("click", function () {
  toggleDarkMode();
});
setLastDarkMode();

function enableDarkMode() {
  // update darkMode in the local storage
  localStorage.setItem("darkMode", "enabled");
  //add the class of darkmode to body

  document.body.classList.add("darkmode");
  console.log("add dark mode");
}

function disableDarkMode() {
  localStorage.setItem("darkMode", "");
  document.body.classList.remove("darkmode");
  console.log("remove dark Mode ");
}

function toggleDarkMode() {
  let darkMode = localStorage.getItem("darkMode");
  // check in case the dark mode already enabled
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

function setLastDarkMode() {
  let darkMode = localStorage.getItem("darkMode");
  // check in case the dark mode already enabled
  if (darkMode == "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

function validate() {
  let message = document.getElementById("subject").value;
  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let isValid = true;
  if (name.length <= 0) {
    document.getElementById("fnameValidation").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("fnameValidation").style.display = "none";
  }
  if (phone.length <= 0) {
    document.getElementById("phoneValidation").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("phoneValidation").style.display = "none";
  }

  if (message.length <= 0) {
    document.getElementById("subjectValidation").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("subjectValidation").style.display = "none";
  }
  if (!validateEmail(email)) {
    document.getElementById("emailValidation").style.display = "block";
    isValid = false;
  } else {
    document.getElementById("emailValidation").style.display = "none";
  }
  if (isValid) {
    submitFunction();
  }
  // to prevent submit the form
  return false;
}

function submitFunction() {
  console.log("called");
  let message = document.getElementById("subject").value;
  let name = document.getElementById("fname").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let obj = {
    nameValue: name,
    emailValue: email,
    phoneNumber: phone,
    messageSub: message,
  };
  localStorage.setItem("details", JSON.stringify(obj));
  document.getElementById("hiddenmsg").style.display = "block";

  document.getElementById("subject").value = "";
  document.getElementById("fname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
