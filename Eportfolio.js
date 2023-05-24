let menuOpened = false;

function whenClicked() {
    // Jos ei ole menu auki, aukaise se.
    if (menuOpened != true) {
        var menuElements = document.getElementsByClassName("menu");
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].style.display = "flex";
            menuOpened = true;
        }
    }
    // Jos on, niin sulje se
    else {
        var menuElements = document.getElementsByClassName("menu");
        for (var i = 0; i < menuElements.length; i++) {
            menuElements[i].style.display = "none";
            menuOpened = false;
        }
    }
}

const sidebar = document.querySelector('.sidebar');
const openButton = document.querySelector('.open-button');

openButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});
