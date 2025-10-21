const btn = document.querySelectorAll(".faq-toggle");

btn.forEach((item) => {
  item.addEventListener("click", () => {
    item.parentNode.classList.toggle("active");
  });
});
