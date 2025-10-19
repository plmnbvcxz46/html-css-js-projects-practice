const words = document.querySelectorAll(".form-control label");

words.forEach((word) => {
  word.innerHTML = word.textContent
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join("");
});
