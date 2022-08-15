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
      "#" +
      "000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
      });
    cell.addEventListener("click", function () {
      cell.style.backgroundColor = document.getElementById("colorpick").value;
    });
  });
});
