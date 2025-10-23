const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  console.log("bgein");
  const updata = () => {
    const target = +counter.getAttribute("data-target");
    const value = +counter.innerHTML;
    const c = target / 200;
    if (value + c < target) {
      counter.innerHTML = value + c;
      setTimeout(updata, 1);
    } else {
      counter.innerHTML = target;
    }
  };
  updata();
});
