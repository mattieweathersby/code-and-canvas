document.querySelectorAll('.navbar-items li').forEach(li => {
    li.addEventListener('click', function() {
        document.querySelectorAll('.navbar-items li').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});