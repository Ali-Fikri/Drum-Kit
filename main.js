const playSound = (e) => {
  const audio = document.querySelector(`audio[data-key ='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key = '${e.keyCode}']`);

  if (!audio) return; // stop function from running on other keys

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
};
const removeTransition = (e) => {
  if (e.propertyName !== "transform") return; // skip it if it not a transform
  e.target.classList.remove("playing");
};
const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
