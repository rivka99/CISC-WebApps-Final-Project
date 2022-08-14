document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("favcolor")) {
    let savedFave = JSON.parse(localStorage.getItem("favcolor"));
    if (savedFave === "black") {
      document.querySelector("body").style.color = "white";
    }
    document.querySelector("body").style.backgroundColor = savedFave;
  }

  let colorCells = document.querySelectorAll(".color-cell");
  colorCells.forEach((cell) => {
    cell.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    cell.addEventListener("click", function () {
      cell.style.backgroundColor = document.getElementById("colorpick").value;
    });
  });
});
