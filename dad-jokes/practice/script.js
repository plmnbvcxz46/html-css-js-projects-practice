const content = document.getElementById("content");
const btn = document.getElementById("btn");

btn.addEventListener("click", getJoke);

async function getJoke() {
  btn.innerHTML = "Waitting...";
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  content.innerText = data.joke;
  console.log("sucess");
  btn.innerHTML = "Get";
}
