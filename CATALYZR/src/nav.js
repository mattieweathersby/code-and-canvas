document.querySelectorAll('.navbar-items li').forEach(li => {
    li.addEventListener('click', function() {
        document.querySelectorAll('.navbar-items li').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.navbar-items');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('open');
});