const submitEl = document.getElementById("submit-btn");
const colorFormeEl = document.querySelector(".color-form");

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("favcolor")) {
    colorFormeEl.style.visibility = "hidden";
    let savedFave = JSON.parse(localStorage.getItem("favcolor"));
    if (savedFave === "black") {
      document.querySelector("body").style.color = "white";
    }
    document.querySelector("body").style.backgroundColor = savedFave;
  }
});

submitEl.addEventListener("click", function (e) {
  e.preventDefault();
  const selectedItems = document.querySelectorAll(
    "form input[type=radio]:checked"
  );
  console.log(selectedItems);
  let userPersonalColor = getMaxValueKey(
    mode([
      selectedItems[1].classList[0],
      selectedItems[2].classList[0],
      selectedItems[3].classList[0],
      selectedItems[4].classList[0],
      selectedItems[5].classList[0],
      selectedItems[6].classList[0],
    ])
  );
  localStorage.setItem("favcolor", JSON.stringify(userPersonalColor));
  console.log(userPersonalColor);
  document.querySelector("body").style.backgroundColor = userPersonalColor;

  return true;
});

function mode(arr) {
  const count = {};

  for (const element of arr) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }

  return count;
}

function getMaxValueKey(obj) {
  return Object.keys(obj).reduce((a, b) => (obj[a] > obj[b] ? a : b));
}
