const card = document.getElementById("card");
const contactButton = document.getElementById("contactBtn");

function flipCard() {
  card.classList.toggle("flipped");
}

card.addEventListener("click", function (event) {
  if (event.target.tagName !== "A" && event.target.tagName !== "BUTTON") {
    flipCard();
  }
});

card.addEventListener("keydown", function (event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    flipCard();
  }
});

contactButton.addEventListener("click", function () {
  alert("Thank you for contacting Leonelas Ice Cream!");
});