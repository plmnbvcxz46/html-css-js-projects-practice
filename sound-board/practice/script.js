const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const button = document.createElement("button");
  button.classList.add("btn");
  button.innerText = sound;
  button.addEventListener("click", () => {
    stopPlay();
    document.getElementById(sound).play();
  });
  document.querySelector(".buttons").appendChild(button);
});

function stopPlay() {
  sounds.forEach((name) => {
    const audio = document.getElementById(name);
    audio.pause();
    audio.currentTime = 0;
  });
}
