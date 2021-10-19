darkModeToggle = document.getElementById("btnToggleDark");
darkModeToggle.addEventListener("click", function () {
  toggleDarkMode();
});
setLastDarkMode();
// enable dark mode
//1 set local storage
function enableDarkMode() {
  localStorage.setItem("myDarkStyle", "enable");
  //2 apply dark mode upon clicking
  document.body.classList.add("darkmode");
}
console.log(enableDarkMode);
// disable dark mode
////1 set local storage
function disableDarkMode() {
  localStorage.setItem("myDarkStyle", "");
  //2 apply dark mode upon clicking

  document.body.classList.remove("darkmode");
}
//2 apply disable dark mode upon clicking
// toggle-mood
// condition, if darkmode = enable -->make disable and vice versa
function toggleDarkMode() {
  let enableDark = localStorage.getItem("myDarkStyle");

  if (enableDark !== "enable") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  console.log(toggleDarkMode);
}
function setLastDarkMode() {
  let darkMode = localStorage.getItem("myDarkStyle");
  // check in case the dark mode already enabled
  if (darkMode == "enable") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}
