// Get Element from the DOM
const menuBtn = document.querySelector('.menu-btn');
const navBar = document.querySelector('ul');
const body = document.querySelector('body');
const projectBtn = document.querySelector('.projectBtn');
const aboutBtn = document.querySelector('.aboutBtn');
const resumeBtn = document.querySelector('.resumeBtn');


// Add Event to each element
resumeBtn.addEventListener('click', linkHandle);
projectBtn.addEventListener('click', linkHandle);
aboutBtn.addEventListener('click', linkHandle);
menuBtn.addEventListener('click', menuToggle);

// Link Handler
function linkHandle(){
        body.classList.remove('menuActivated');
        navBar.classList.remove('show');
        menuBtn.classList.remove('close');
        showMenu = false;
}


// Menu Behavior
let showMenu = false;
function menuToggle() {
    if (showMenu === false) {
        
        body.classList.add('menuActivated');
        navBar.classList.add('show');
        menuBtn.classList.add('close');
        showMenu = true;
        
    } else {       
        body.classList.remove('menuActivated');
        navBar.classList.remove('show');
        menuBtn.classList.remove('close');
        showMenu = false;
    }

}



