const tags = document.querySelector(".tags");
const textarea = document.getElementById("textarea");

textarea.addEventListener("keyup", (e) => {
  const choices = e.target.value
    .split(",")
    .filter((choice) => {
      return choice.trim() !== "";
    })
    .map((choice) => {
      console.log("map");
      return choice.trim();
    });
  tags.innerHTML = "";
  choices.forEach((choice) => {
    const tag = document.createElement("div");
    tag.classList.add("tag");
    tag.innerText = choice;
    tags.appendChild(tag);
  });

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomselect();
  }
});

function randomselect() {
  const times = 30;
  const timelabel = setInterval(() => {
    highlighttag();
  }, 100);
  setTimeout(() => {
    clearInterval(timelabel);
  }, 100 * times);
}

function selector() {
  const tags = document.querySelectorAll(".tag");
  tags.forEach((tag) => {
    tag.classList.remove("highlight");
  });
  return tags[Math.floor(Math.random() * tags.length)];
}

function highlighttag() {
  const tag = selector();
  tag.classList.add("highlight");
}
