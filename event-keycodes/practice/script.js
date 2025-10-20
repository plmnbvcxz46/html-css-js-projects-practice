const insert = document.querySelector(".insert");

window.addEventListener("keydown", (key) => {
  insert.innerHTML = `
  <div class = "key">
  ${key.key}
  <small>Keyboard.key</small>
  </div>
  <div class = "key">
  ${key.code}
  <small>Keyboard.code</small>
  </div>
  `;
});
