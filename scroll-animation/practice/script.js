window.addEventListener("scroll", scrollEvent);
window.addEventListener("load", scrollEvent);
function scrollEvent() {
  const boxs = document.querySelectorAll(".box");
  const windowHeight = window.innerHeight;
  boxs.forEach((box) => {
    const location = box.getBoundingClientRect();
    if (location.top + location.height / 4 <= windowHeight)
      box.classList.remove("hide");
    else if (location.top + (location.height / 3) * 2 >= windowHeight)
      box.classList.add("hide");
  });
}
