
function swapTheme() {
   
    const app = document.getElementById("app")
    const themeToggle = document.getElementById("swap")
    if (themeToggle.classList.contains("button_day")) {
        themeToggle.classList.remove("button_day")
        themeToggle.classList.add("button_night")
        app.classList.remove("day")
        app.classList.add("night")
    } else {
        themeToggle.classList.add("button_day")
        themeToggle.classList.remove("button_night")
        app.classList.add("day")
        app.classList.remove("night")
    }
}
