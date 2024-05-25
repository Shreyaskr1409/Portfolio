const spacing1 = document.getElementById("spacing1")


navbar.setAttribute("style", "height: "+(document.getElementById("navbar_inner").clientHeight+2)+"px;")
spacing1.setAttribute("style", "height: "+(document.getElementById("navbar").clientHeight)+"px;")

addEventListener("resize",() => {
    navbar.setAttribute("style", "height: "+(document.getElementById("navbar_inner").clientHeight+2)+"px;")
    spacing1.setAttribute("style", "height: "+(navbar.clientHeight)+"px;")
})




function startLoader() {
    let counterElement = document.querySelector("#count2");
    let currentValue = 0;

    function updateCounter() {
        if(currentValue === 100) {
            gsap.to(".counter", 0.25, {
                opacity: 0
            });
            gsap.to(".bar", 1.5, {
                height: 0,
                stagger: {
                    amount: 0.5
                },
                ease: "power4.inOut"
            });
            gsap.to(".counter", 0.25, {
                delay: 1,
                height: 0
            });
            return;
        }
        currentValue += Math.floor(Math.random() * 10) + 1;

        if(currentValue > 100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;
        let delay = Math.floor(Math.random()*200) + 120;
        setTimeout(updateCounter, delay);
    }
    updateCounter();
}

startLoader();