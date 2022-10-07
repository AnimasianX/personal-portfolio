const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const nav4 = document.getElementById('nav-4');
const nav5 = document.getElementById('nav-5');

//functions
function toggleNav() {
    // Toggle menu bars open/close
    menuBars.classList.toggle('change');
    // animate in overlay
    overlay.classList.toggle('overlay-slide-right');
    // Toggle menu active/inactive
    overlay.classList.toggle('overlay-active');
    if (overlay.classList.contains('overlay-active')) {
        // animate in - nav items
        nav1.classList.replace('slide-out-1', 'slide-in-1');
        nav2.classList.replace('slide-out-2', 'slide-in-2');
        nav3.classList.replace('slide-out-3', 'slide-in-3');
        nav4.classList.replace('slide-out-4', 'slide-in-4');
        nav5.classList.replace('slide-out-5', 'slide-in-5');

    } else {
        nav1.classList.replace('slide-in-1', 'slide-out-1');
        nav2.classList.replace('slide-in-2', 'slide-out-2');
        nav3.classList.replace('slide-in-3', 'slide-out-3');
        nav4.classList.replace('slide-in-4', 'slide-out-4');
        nav5.classList.replace('slide-in-5', 'slide-out-5');
    }
}

// Event Listeners
menuBars.addEventListener('click', toggleNav);
nav1.addEventListener('click', toggleNav);
nav2.addEventListener('click', toggleNav);
nav3.addEventListener('click', toggleNav);
nav4.addEventListener('click', toggleNav);
nav5.addEventListener('click', toggleNav);