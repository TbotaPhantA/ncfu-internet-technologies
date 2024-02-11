window.addEventListener('DOMContentLoaded', function() {
    const mainSection = document.getElementById('main-section')
    const servicesSection = document.getElementById('services');
    const contactSection = document.getElementById('contact');
    if (mainSection) { mainSection.style.display = 'none'; }
    if (servicesSection) { servicesSection.style.display = 'none'; }
    if (contactSection) { contactSection.style.display = 'none'; }
    // Show a loading indicator
    document.getElementById('loading-indicator').style.display = 'block';
});

window.addEventListener('load', function() {
    // Hide the loading indicator
    document.getElementById('loading-indicator').style.display = 'none';
    const mainSection = document.getElementById('main-section');
    const servicesSection = document.getElementById('services');
    const contactSection = document.getElementById('contact');
    if (mainSection) { mainSection.style.display = 'block'; }
    if (servicesSection) { servicesSection.style.display = 'block'; }
    if (contactSection) { contactSection.style.display = 'block'; }
});

function getUserInfo() {
    return {
        name: "Иванов Иван Иванович",
        photoUrl: "https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
    };
}

const userInfo = getUserInfo();

const usernameElement = document.getElementById("username");
usernameElement.textContent = userInfo.name;

const photoElement = document.getElementById("user-photo");
photoElement.src = userInfo.photoUrl;

