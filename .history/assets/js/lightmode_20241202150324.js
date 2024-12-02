// dark light theme
let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("theme-switch");

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "active");
};

const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
};

const enableDarkMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null); // set "null" to disable light mode
};

if (lightmode === "active") enableLightMode();

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  if (lightmode !== "active") {
    enableLightMode();
  } else {
    disableLightMode();
  }
});