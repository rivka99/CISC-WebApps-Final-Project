document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("favcolor")) {
    let savedFave = JSON.parse(localStorage.getItem("favcolor"));
    if (savedFave === "black") {
      document.querySelector("body").style.color = "white";
    }
    document.querySelector("body").style.backgroundColor = savedFave;
  }
});
