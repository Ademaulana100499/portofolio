// dark light theme
let lightmode = localStorage.getItem("lightmode");
const themeSwitch = document.getElementById("theme-switch");

const enableLightMode = () => {
  document.body.classList.add("light-mode");
  localStorage.setItem("lightmode", "active");
};

const enableLightMode = () => {
  document.body.classList.remove("light-mode");
  localStorage.setItem("lightmode", null);
};

if (lightmode === "active") enableLightMode();

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  lightmode !== "active" ? enableLightMode() : enableLightMode();
});
