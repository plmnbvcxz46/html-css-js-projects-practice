const toggle = document.querySelector(".icon");

toggle.addEventListener("click", () => {
  console.log("hidden");
  toggle.parentNode.classList.toggle("hidden");
});
