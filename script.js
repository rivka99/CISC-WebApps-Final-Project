const submitEl = document.getElementById("submit-btn");

submitEl.addEventListener("click", function (e) {
  e.preventDefault();
  const selectedItems = document.querySelectorAll(
    "form input[type=radio]:checked"
  );
  console.log(selectedItems);
  console.log(
    getMaxValueKey(
      mode([
        selectedItems[1].classList[0],
        selectedItems[2].classList[0],
        selectedItems[3].classList[0],
        selectedItems[4].classList[0],
        selectedItems[5].classList[0],
        selectedItems[6].classList[0],
      ])
    )
  );

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
