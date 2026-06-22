function openPopup(id) {
  document.getElementById(id).style.display = "flex";
  confetti();
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function openEnvelope() {
  document.querySelector(".envelope").classList.add("open");
}

function blowCandles() {
  document.querySelector(".candles").classList.add("out");

  document.getElementById("wishText").innerText =
    "wish made!";

  confetti();
}

function showFortune() {
  const fortunes = [
    "extra cake is a must.",
    "unlmited wishes.",
    "more cake."
  ];

  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  document.getElementById("fortuneText").innerText = randomFortune;

  confetti();
}


function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";

  const icons = ["💗", "✨", "🌸", "⭐", "🫧"];

  heart.innerText =
    icons[Math.floor(Math.random() * icons.length)];

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.animationDuration =
    Math.random() * 3 + 4 + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 500);

function confetti() {
  const icons = ["🎉", "✨", "🌷", "⭐", "🧁"];

  for (let i = 0; i < 35; i++) {
    const piece = document.createElement("div");

    piece.className = "confetti";

    piece.innerText =
      icons[Math.floor(Math.random() * icons.length)];

    piece.style.left = Math.random() * 100 + "vw";

    piece.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    document.body.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4000);
  }
}

document.addEventListener("mousemove", function (e) {
  const sparkle = document.createElement("div");

  sparkle.className = "cake";

  sparkle.innerText = "🍰";

  sparkle.style.left = e.clientX + "px";

  sparkle.style.top = e.clientY + "px";

  document.body.appendChild(cake);

  setTimeout(() => {
    cake.remove();
  }, 800);
});

window.addEventListener("click", function (event) {
  const popups = document.querySelectorAll(".popup");

  popups.forEach((popup) => {
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
