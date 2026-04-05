// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger-button');
const sidebar = document.getElementById('sidebar');


hamburger.addEventListener('click', function() {
    sidebar.classList.toggle('open');
    hamburger.classList.toggle('is-active');
   
});

const workHighlights = document.querySelectorAll('.work-highlight');

workHighlights.forEach(function(highlight) {
    highlight.addEventListener('click', function() {
        workHighlights.forEach(function(eachHighlight) {
            eachHighlight.classList.remove('active');
        });
        highlight.classList.add('active');
    });
});