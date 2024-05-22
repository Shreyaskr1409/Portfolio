const spacing1 = document.getElementById("spacing1")
// const left_box = document.getElementById("left_box")


navbar.setAttribute("style", "height: "+(document.getElementById("navbar_inner").clientHeight+2)+"px;")
spacing1.setAttribute("style", "height: "+(document.getElementById("navbar").clientHeight + 10)+"px;")

addEventListener("resize",() => {
    navbar.setAttribute("style", "height: "+(document.getElementById("navbar_inner").clientHeight+2)+"px;")
    spacing1.setAttribute("style", "height: "+(navbar.clientHeight + 10)+"px;")
})