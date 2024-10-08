const projects = document.getElementsByClassName("default")
// create a map which has key as elementIDs and value as an object with Title and Description
const projects_info = new Map()
projects_info.set("Simpliblog", {
    pro_title: "Simpliblog",
    pro_body: "Encouraging peers to learn from each other via blogs centered around an institute environment.</br></br>This reposotory is a personal project of mine but I also want this to work out in the grand scheme of things as I really think blog-based learning is lacking in university students and learners in India. Blogs bring out the reality of working in an industry.",
    pro_repo: "https://github.com/Shreyaskr1409/SimpliBlog",
    pro_src: "assets/images/Screenshot 2024-10-09 001038-min.png"
})
projects_info.set("Library_App", {
    pro_title: "Library App",
    pro_body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula ornare nibh. Sed finibus eget ex id laoreet. Aliquam egestas laoreet facilisis. Suspendisse pellentesque, urna sed volutpat ornare, sem dui placerat velit, nec facilisis eros neque quis neque. Nam id mauris vel lacus faucibus suscipit quis vel erat. Proin sed tellus quis mauris imperdiet maximus pulvinar sit amet tortor. Curabitur rhoncus sapien ac lacus ullamcorper cursus. In eu ullamcorper ante, non tempus mauris. Cras aliquam lorem quis odio mollis viverra. Donec eget vulputate nisl, mattis ultricies mauris. Quisque eros lectus, maximus ac malesuada et, hendrerit in lectus. Sed mollis nibh ipsum, non imperdiet erat suscipit a. Donec facilisis laoreet lorem. In volutpat non ante in venenatis. Phasellus in neque mauris.",
    pro_repo: "https://github.com/Shreyaskr1409/My_Library",
    pro_src: "assets/images/Screenshot 2024-08-17 154018.png"
})
projects_info.set("Health_App", {
    pro_title: "Health App",
    pro_body: "Quisque vehicula ornare nibh. Sed finibus eget ex id laoreet. Aliquam egestas laoreet facilisis. Suspendisse pellentesque, urna sed volutpat ornare, sem dui placerat velit, nec facilisis eros neque quis neque. Nam id mauris vel lacus faucibus suscipit quis vel erat. Proin sed tellus quis mauris imperdiet maximus pulvinar sit amet tortor. Curabitur rhoncus sapien ac lacus ullamcorper cursus. In eu ullamcorper ante, non tempus mauris. Cras aliquam lorem quis odio mollis viverra. Donec eget vulputate nisl, mattis ultricies mauris. Quisque eros lectus, maximus ac malesuada et, hendrerit in lectus. Sed mollis nibh ipsum, non imperdiet erat suscipit a. Donec facilisis laoreet lorem. In volutpat non ante in venenatis. Phasellus in neque mauris.",
    pro_repo: "https://github.com/Shreyaskr1409/Health-app",
    pro_src: "assets/images/1725279743544.jpg"
})

for (const project of projects) {
    project.addEventListener('click', (event) => {
        const clickedProject = event.target
        const elementID = clickedProject.getAttribute("id")
        
        try {
            document.getElementById("img_p")
                .setAttribute(
                    "src",
                    // clickedProject.getAttribute("src")
                    projects_info.get(elementID).pro_src
                )

            document.getElementById("title_p1")
                .innerText = projects_info.get(elementID).pro_title
            document.getElementById("body_p1")
                .innerHTML = projects_info.get(elementID).pro_body
            document.getElementById("button_p")
                .setAttribute("onclick", `window.open('${projects_info.get(elementID).pro_repo}', '_blank');`)
        } catch (e) {
            console.log("I couldn't set content for the card")
        }
    })
}