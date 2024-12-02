// dark light theme
let lightmode = localStorage.getItem("light-mode");
const themeSwitch = document.getElementById("theme-switch");

const enableLightMode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("light-mode", "active");
};

const disableLightMode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("light-mode", null);
};

if (lightmode === "active") enableLightMode();

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("ligh-tmode");
  lightmode !== "active" ? enableLightMode() : enableDarkMode();
});
