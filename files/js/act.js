// the navigation menu

function openNav() {
    document.getElementById("mySidenav").style.height = "1500px";
    document.getElementById("mySidenav").style.pointerEvents = "auto";
}

function closeNav() {
    document.getElementById("mySidenav").style.height = "0";
    document.getElementById("mySidenav").style.pointerEvents = "none";
}

window.addEventListener('click', function (event) {
    var sideNav = document.getElementById("mySidenav");
    var openButton = document.getElementById("openButton");
    var openButtono = document.getElementById("openButtono");

    if (!sideNav.contains(event.target) && event.target !== openButton && event.target !== openButtono) {
        closeNav();
    }
});

// the section move with the button

document.addEventListener("DOMContentLoaded", function () {
    const learnMoreButton = document.getElementById("beginnow");
    const tabadiv = document.getElementById("thebegining");

    learnMoreButton.addEventListener("click", function (e) {
        e.preventDefault();
        tabadiv.scrollIntoView({ behavior: "smooth" });
    });
});
