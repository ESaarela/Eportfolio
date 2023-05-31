let menuOpened = false;

function whenClicked() {
    // Jos ei ole menu auki, aukaise se.
    if (menuOpened != true) {
        // Määrittää muuttujan "menuElements" etsimällä kaikki elementit joissa on luokka "menu"
        var menuElements = document.getElementsByClassName("menu");
        // menuElements on lista muuttujista joissa on "menu"-luokka

        // Tee looppi, joka käy läpi kaikki elementit menuElements-listan sisällä
        for (var i = 0; i < menuElements.length; i++) {
            // Laita menu-luokka näkyväksi
            menuElements[i].style.display = "flex";
        }
    }
    // Jos on, niin sulje se
    else {

        // Määrittää muuttujan "menuElements" etsimällä kaikki elementit joissa on luokka "menu"
        var menuElements = document.getElementsByClassName("menu");
        // menuElements on lista muuttujista joissa on "menu"-luokka

        // Tee looppi, joka käy läpi kaikki elementit menuElements-listan sisällä
        for (var index = 0; index < menuElements.length; index++) {
            // Laita menu-luokka näkymättömäksi
            menuElements[index].style.display = "none";
        }
    }
    // Togglaa menuOpened-bool
    menuOpened = !menuOpened;
}

const sidebar = document.querySelector('.sidebar');
const openButton = document.querySelector('.open-button');

openButton.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
  
