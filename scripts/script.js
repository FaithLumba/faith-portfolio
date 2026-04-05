// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger-button');
const sidebar = document.getElementById('sidebar');


hamburger.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('is-active');
   
});

