const colorFormeEl = document.querySelector(".color-form");
const submitEl = document.getElementById("submit-btn");
const colorInformation = {
  black: `Black can mean so many different things: boldness, uniqueness, mystery, intrigue, and power. <br>But it can also mean unhappiness, darkness, sadness, pain, or grief. Black is associated with death and mourning, but can also be associated with strength, luxury, and intensity.
    <br>Personality traits of black:
    <br>Bold
    <br>Risk-taker
    <br>Perhaps a little impulsive at times
    <br>Serious (maybe a little too serious)
    <br>You’re strong and command a sense of respect from your peers
    <br>You’re trustworthy
    <br>Perhaps a little intimidating`,
  red: `Red is a bold color choice that’s been associated with excitement, passion, danger, thrill, energy, and action. <br>You may notice that some brands use red for their “call to action” buttons (“order now,” “shop now,” etc.). <br>This is because red is an intense color that is able to provoke strong emotions which can encourage you to buy things.
    <br>Personality traits of red:
    <br>Bold
    <br>Thrill-seeker
    <br>Adventure-lover
    <br>Can be a little impulsive
    <br>Can be perceived as intimidating`,
  pink: `Pink is often associated with femininity, playfulness, and love, but pink can also be perceived as a somewhat immature color.  <br>You will notice a lot of pink in a child’s toy packaging or brands to signal playful, whimsical fun.  <br>Other brands (Victoria Secret for example) have signified the color to mean something cute, fun, playful and sexy.
    <br>Personality traits of pink:
    <br>Fun
    <br>Playful
    <br>Maybe a little naive
    <br>You wear your heart on your sleeve and aren’t afraid to express your emotions
    <br>Love and family are important to you`,
  yellow: `Happiness, positivity, and warm summer sun is what yellow reminds us of. <br>Brands may use a splash of yellow in their logo to make you feel happy when you see their products. <br>Many “free shipping” icons on websites may be yellow to attract you to something that is cheerful and positive.
    <br>Personality traits of yellow: 
    <br>A positive spirit
    <br>Optimistic
    <br>Cheerful
    <br>Adventurous
    <br>Calming for those around them
    <br>Infectious smiles and happiness that spreads to each person they encounter`,
  green: `Two of the things that make the world go ’round are associated with the color green: nature and money. <br>Green can signify growth, fertility, health, wealth, wellness, or generosity. <br>Green can also be associated with negative connotations such as jealousy or envy.
    <br>Personality traits of green:
    <br>Practical
    <br>Down-to-earth
    <br>Loves to give advice
    <br>Loves to help others
    <br>Enjoys the outdoors and finds balance in life important
    <br>In regards to productivity, you like to analyze the situation before diving in, you’re a problem solver and you can find inventive ways to think outside the box`,
};
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("favcolor")) {
    let savedFave = JSON.parse(localStorage.getItem("favcolor"));
    if (savedFave === "black") {
      document.querySelector("body").style.color = "white";
    }
    if (colorFormeEl != null) {
      colorFormeEl.style.visibility = "hidden";
      colorFormeEl.style.display = "none";
      document.getElementById("homepage").innerHTML += `
      <h1>Based on your answers, the color that suits you best is the color ${savedFave}</h1>
      <h3>Here is some information from <a href="https://bigthink.com/neuropsych/color-personality-psychology/" target="_blank" style="color:gray;text-decoration: underline;">BigThink.com</a> as to what this might mean about your personality:</h3>
      <p>${colorInformation[savedFave]}</p>`;
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
  document.getElementById("submit-php").style.display = "block";
  submitEl.style.display = "none";

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
