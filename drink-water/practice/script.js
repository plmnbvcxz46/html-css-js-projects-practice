const percentage = document.querySelector(".percentage");
const cups = document.querySelectorAll(".cup-small");
const remained = document.querySelector(".remained");
const bigcup = document.querySelector(".cup-big");

cups.forEach((cup, index) => {
  cup.addEventListener("click", () => updata(index));
});

function updata(num) {
  if (cups[num].classList.contains("active")) num--;
  cups.forEach((cup, index) => {
    if (index <= num) cup.classList.add("active");
    else cup.classList.remove("active");
  });
  updataBigCup(num);
}

function updataBigCup(num) {
  num++;
  percentage.innerText = `${((num * 250) / 2000) * 100}%`;
  if (num > 0) percentage.style.visibility = "visible";
  else percentage.style.visibility = "hidden";
  percentage.style.height = `${((num * 250) / 2000) * 300}px`;
  if (num > cups.length - 2) remained.style.visibility = "hidden";
  else remained.style.visibility = "visible";
}
