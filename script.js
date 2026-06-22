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
    "wish made. i hope it comes true ♡";

  confetti();
}

function showFortune() {
  const fortunes = [
    "extra cake is mandatory.",
    "birthday boy gets unlimited wishes today.",
    "you have unlocked: good vibes only.",
    "today's rule: no overthinking, just cake.",
    "fortune says: you deserve something sweet."
  ];

  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

  document.getElementById("fortuneText").innerText = randomFortune;

  confetti();
}

function mirrorSparkle() {
  const mirrorText = document.querySelector(".mirror p");

  mirrorText.innerText = "handsome birthday boy detected";

  confetti();
}

function createHeart() {
  const heart = document.createElement("div");

  heart.className = "heart";

  const icons = ["♡", "💗", "✨", "🌸", "⭐", "🫧"];

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
  const icons = ["🎉", "💖", "✨", "🌷", "⭐", "🧁"];

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

  sparkle.className = "sparkle";

  sparkle.innerText = "✨";

  sparkle.style.left = e.clientX + "px";

  sparkle.style.top = e.clientY + "px";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
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
