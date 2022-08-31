// ******************************************** HAMBUGER MENU**************************************

// DECLARE THE VARIBLES

const menuBtn = document.querySelector('.menu-btn');
const mobileNav = document.querySelector('ul');

// ADD ONCLICK FUNCTION
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("open");
    mobileNav.classList.toggle("open");
});


// ADD ACTIVE

const DesktopNav = document.querySelector('.li');

DesktopNav.addEventListener('click', () => {
    DesktopNav.classList.add("active-link");
    console.log("okay")
});
//CLOSE HAMBUGERMENU WHEN LINK/CLOSE IS CLICKED
document.onclick = function(e){
    if(e.target.id !== "menu-btn"  && e.target.id !== "ul"){
        menuBtn.classList.remove("open");
    mobileNav.classList.remove("open");
    }
}
