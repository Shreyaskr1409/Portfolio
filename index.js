const spacing1 = document.getElementById("spacing1")


navbar.setAttribute("style", "height: "+(document.getElementById("navbar_inner").clientHeight+2)+"px;")
spacing1.setAttribute("style", "height: "+(document.getElementById("navbar").clientHeight)+"px;")

addEventListener("resize",() => {
    navbar.setAttribute("style", "height: "+(document.getElementById("navbar_inner").clientHeight+2)+"px;")
    spacing1.setAttribute("style", "height: "+(navbar.clientHeight)+"px;")
})
