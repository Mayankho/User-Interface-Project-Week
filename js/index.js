// JS goes here

//Navigation

const nav = document.querySelector(".nav");
const headerTag = document.querySelector("header");
const headerBox = document.querySelector(".header");
const hamburger = document.querySelector("#hamburger");
const container = document.querySelector(".container");
const headerDiv = document.querySelector(".header-div");

let counter = 2; // set variable named counter
hamburger.addEventListener("click", () => { // setting event listener to the hamburgr symbol
  if (counter % 2 === 0) {
    nav.classList.remove("nav-ghost");
    headerBox.classList.add("expanded");
    nav.classList.add("expanded-nav");
    headerTag.classList.add("expanded-header");
    headerDiv.classList.add("expanded-header-div");
    hamburger.src = "img\\nav-hamburger-close.png";
  } else {
    nav.classList.add("nav-ghost");
    headerBox.classList.remove("expanded");
    nav.classList.remove("expanded-nav");
    headerTag.classList.remove("expanded-header");
    headerDiv.classList.remove("expanded-header-div");
    hamburger.src = "img\\nav-hamburger.png";
  }
  counter++;
});


