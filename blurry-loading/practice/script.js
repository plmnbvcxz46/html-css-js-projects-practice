window.addEventListener("load", () => {
  const loading_text = document.querySelector(".loading-text");
  const photo = document.querySelector(".photo");
  let base = 2;
  let loading = 100;

  const timeId = setInterval(load, 50);
  function load() {
    base += 0.8;
    loading = loading - Math.min((base * base) / 10, 3);
    if (loading <= 0) {
      loading = 0;
      photo.style.filter = `blur(${loading / 10}px)`;
      clearInterval(timeId);
      loading_text.textContent = "";
      loading_text.style.display = "none";
      return;
    }
    loading_text.style.opacity = `${loading / 100}`;
    loading_text.textContent = `${Math.floor(100 - loading)}%`;
    photo.style.filter = `blur(${loading / 10}px)`;
    console.log(loading);
  }
});
