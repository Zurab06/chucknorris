const joke = document.querySelector("#btn");
const div = document.querySelector("#div");

const fu = () => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((data) => {
      return data.json();
    })
    .then((data1) => {
div.textContent=data1.value

    });
};
joke.addEventListener("click",fu)