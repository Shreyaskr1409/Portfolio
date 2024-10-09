//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
////////// SCROLL TO TOP /////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

const backToTopButton = document.getElementById("back_to_top");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", function () {
  document.getElementById("spacing1").scrollIntoView({
    behavior: "smooth",
  });
});

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
/////////// SET SPACING //////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

const spacing1 = document.getElementById("spacing1");

navbar.setAttribute(
  "style",
  "height: " +
    (document.getElementById("navbar_inner").clientHeight + 2) +
    "px;"
);
spacing1.setAttribute(
  "style",
  "height: " + document.getElementById("navbar").clientHeight + "px;"
);

addEventListener("resize", () => {
  navbar.setAttribute(
    "style",
    "height: " +
      (document.getElementById("navbar_inner").clientHeight + 2) +
      "px;"
  );
  spacing1.setAttribute("style", "height: " + navbar.clientHeight + "px;");
});

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
////////////// LOADING ///////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

function startLoader() {
  let counterElement = document.querySelector("#count2");
  let loadingElement = document.querySelector("#count1");
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100) {
      gsap.to(".counter", 0.25, {
        opacity: 0,
      });
      gsap.to(".bar", 1.5, {
        height: 0,
        stagger: {
          amount: 0.5,
        },
        ease: "power4.inOut",
      });
      gsap.to(".counter", 0.25, {
        delay: 1,
        height: 0,
      });
      loadingElement.innerHTML = ""
      return;
    }
    currentValue += Math.floor(Math.random() * 20) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;
    let delay = Math.floor(Math.random() * 200) + 120;
    setTimeout(updateCounter, delay);
  }
  updateCounter();
}

startLoader();

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////// ARROWS FOR PROJECTS /////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

const leftArrow_2 = document.querySelector(".left-arrow_2");
const rightArrow_2 = document.querySelector(".right-arrow_2");
const cards = document.querySelector(".cards");

let currentIndex = 0;

leftArrow_2.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCardPosition();
  }
});

rightArrow_2.addEventListener("click", () => {
  if (currentIndex < cards.children.length - 4) {
    currentIndex++;
    updateCardPosition();
  }
});

function updateCardPosition() {
  const cardWidth = cards.children[0].getBoundingClientRect().width;
  cards.style.transform = `translateX(${-currentIndex * (cardWidth + 20)}px)`;
}

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
////////// SCROLL ON LOAD /////////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

window.addEventListener("load", function () {
  document.getElementById("spacing1").scrollIntoView({
    behavior: "smooth",
  });
});

//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////
/////// SCROLL TO PROJECTS ///////////
//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////

document
    .getElementById("projects_button_tag_2")
    .addEventListener("click", function () {
      document.getElementById("my_projects").scrollIntoView({
        behavior: "smooth",
      });
    });

document
    .getElementById("projects_nav")
    .addEventListener("click", function () {
      document.getElementById("my_projects").scrollIntoView({
        behavior: "smooth",
      });
    });