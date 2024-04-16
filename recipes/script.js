window.addEventListener('load', function() {
    var currentPage = window.location.pathname.split('/').pop(); // Get the current page filename
    var backButton = document.getElementById('back');

    if (currentPage !== 'index.html') {
        backButton.style.display = 'block'; // Show the button if not on index.html
    }
});
