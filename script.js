

function reveal() {
    var revealElements = document.querySelectorAll(".child-part1, .child-part2, .item-prt1, .item-prt2");

    revealElements.forEach((element) => {
        var elementTop = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal(); // Check initial state on page load
