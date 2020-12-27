function darkTheme() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let darkButton = document.getElementById("dark-btn");
    darkButton.classList.toggle("active-nav");

    if (darkButton.innerHTML === "Dark Mode<br> Off") {
        darkButton.innerHTML = "Dark Mode<br> On";
    } else if (darkButton.innerHTML === "Dark Mode<br> On") {
        darkButton.innerHTML = "Dark Mode<br> Off";
    } else {
        darkButton.innerHTML = "Dark Mode<br> On";
    }
}
