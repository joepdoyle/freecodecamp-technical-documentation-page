// Store button as a variable

const backToTopBtn = document.getElementById("back-to-top")
let rootElement = document.documentElement

window.onscroll = function () {
    scrollFunction()
};

// On scroll the button appears

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Scroll to top action

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

// Scroll to top button event listener

backToTopBtn.addEventListener("click", scrollToTop)