function updateH2(newH2) {
  let answer = document.querySelector("h2");
  answer.innerHTML = newH2;
}
function canApply() {
  let age = prompt("How old are you?");
  return age < 18;
}
function apply() {
  let name = prompt("What is your name?");
  if (canApply()) {
    updateH2(
      `Sorry, ${name}!<br /> You cannot order this item <img src="/src/img/sorry.png" alt="sad face"/>`
    );
  } else {
    let number = prompt("What is your telephone number?");
    let email = prompt("What is your email?");
    updateH2(
      `Great choice, ${name}! <img src="/src/img/great.png" alt="Wow"/> We will contact you ASAP to confirm your order.<br />Have a nice day! <img src="/src/img/smile.png" alt="Mmm"/>`
    );
  }
}
let clickButton = document.querySelector(".order");
clickButton.addEventListener("click", apply);
