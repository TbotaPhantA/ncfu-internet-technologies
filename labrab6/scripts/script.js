window.addEventListener('DOMContentLoaded', function() {
    // Hide a loading indicator
    document.getElementById('loading-indicator').style.display = 'block';
    document.getElementById('main-section').style.display = 'none';
});

window.addEventListener('load', function() {
    // Show the loading indicator
    document.getElementById('loading-indicator').style.display = 'none';
    document.getElementById('main-section').style.display = 'block';
});
