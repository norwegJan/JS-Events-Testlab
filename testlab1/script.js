// section1 (the devil's button 😈)

const myBox = document.querySelector("#myBox");

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "AUUU!! 🤕";
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "orange";
  event.target.textContent = "DU VÅG IKKJE 🫣";
});

myBox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "KLIKK MÆ DIN JÆVEL 😈";
});

// section2 (Monsen!)

const trylleKnapp = document.querySelector("#trylleKnapp");
const monsenImg = document.querySelector("#monsen");

trylleKnapp.addEventListener("click", (event) => {
  if (monsenImg.style.visibility === "hidden") {
    monsenImg.style.visibility = "visible";
    trylleKnapp.textContent = "tryll Monsen vekk! 🪄";
  } else {
    monsenImg.style.visibility = "hidden";
    trylleKnapp.textContent = "få Monsen tilbake! 🪄";
  }
});

// section3 (Pacman!)

const pacMan = document.querySelector("#pacman");
const moveAmount = 10;
let x = 0;

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    pacMan.style.left = `${x}px`;
  }
});
