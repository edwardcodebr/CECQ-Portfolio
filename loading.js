document.addEventListener('DOMContentLoaded', function() {
    var loadingScreen = document.getElementById('loading-screen');
    var loadingBar = document.querySelector('.loading-bar');

    // Show loading bar for 5 seconds
    setTimeout(function() {
        loadingBar.style.width = '100%';
    }, 1000);

    // Hide the loading screen after the loading animation completes
    setTimeout(function() {
        loadingScreen.style.opacity = 0;
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            document.body.classList.remove('loading');
        }, 300);
    }, 6000); // 6000 milliseconds (5 seconds for the bar to load + 1 second for spinner)

});

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
        document.body.classList.add('loading');
    }
});