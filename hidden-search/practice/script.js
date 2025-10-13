const searchInput = document.querySelector(".searchInput");

function showInput() {
  searchInput.classList.contains("active")
    ? searchInput.classList.remove("active")
    : searchInput.classList.add("active");
  searchInput.focus();
}
