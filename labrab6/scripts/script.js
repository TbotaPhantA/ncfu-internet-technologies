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
    console.log("Дата: ", new Date().toDateString());
    console.log("Время: ", new Date().toTimeString());
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

// footer change
const footer = document.querySelector(".footer");

window.addEventListener("resize", () => {
    const width = window.innerWidth;

    if (width < 768) {
        footer.classList.add("footer-mobile");
    } else {
        footer.classList.remove("footer-mobile");
    }
});

let root = document.querySelector(":root");
let button = document.querySelector("#themeToggle");

const darkTheme = "Темная тема";
const lightTheme = "Светлая тема"
const themeKey = "theme";

if (!localStorage.getItem(themeKey)) {
    localStorage.setItem(themeKey, lightTheme);
}

refineTheme()

button.addEventListener('click', () => {
    event.preventDefault();
    const newTheme = localStorage.theme === lightTheme ? darkTheme : lightTheme;
    localStorage.setItem(themeKey, newTheme);
    refineTheme()
    button.textContent = button.textContent === darkTheme
        ? lightTheme
        : darkTheme;
})

function refineTheme() {
    if (localStorage.getItem(themeKey) === darkTheme) {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
}
