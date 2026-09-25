/* =====================================================
   CodeVerse - script.js
   Interactive playground, Mobile navigation, API Explorer
===================================================== */

// Mobile Navigation Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('active-menu');
    }
}

// 1. Counter Logic
let count = 0;

function increase() {
    count++;
    const countEl = document.getElementById("count");
    if (countEl) countEl.innerText = count;
}

function decrease() {
    if (count > 0) {
        count--;
    }
    const countEl = document.getElementById("count");
    if (countEl) countEl.innerText = count;
}

// 2. Background Color Changer
function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

function changeColor(color) {
    document.body.style.backgroundColor = color;
}

// 3. Zoom Image
function zoomIn() {
    const img = document.getElementById("zoomImage");
    if (img) {
        img.style.transform = "scale(1.25)";
        img.style.transition = "transform 0.3s ease";
    }
}

function zoomOut() {
    const img = document.getElementById("zoomImage");
    if (img) {
        img.style.transform = "scale(1)";
        img.style.transition = "transform 0.3s ease";
    }
}

// 4. Logo Gallery Slider
const galleryImages = [
    "images/html.svg",
    "images/css.svg",
    "images/javascript.svg",
    "images/python.svg",
    "images/java.svg",
    "images/cpp.svg",
    "images/php.svg",
    "images/csharp.svg"
];

let currentSlide = 0;

function updateSlider() {
    const sliderImg = document.getElementById("slider");
    if (sliderImg) {
        sliderImg.src = galleryImages[currentSlide];
        sliderImg.alt = "Programming Logo " + (currentSlide + 1);
    }
}

function nextImage() {
    currentSlide = (currentSlide + 1) % galleryImages.length;
    updateSlider();
}

function previousImage() {
    currentSlide = (currentSlide - 1 + galleryImages.length) % galleryImages.length;
    updateSlider();
}

// 5. Toggle Programming Fact
function toggleFact() {
    const fact = document.getElementById("fact");
    if (fact) {
        if (fact.style.display === "none" || fact.style.display === "") {
            fact.style.display = "block";
        } else {
            fact.style.display = "none";
        }
    }
}

// 6. Contact Form Message
function sendMessage() {
    alert("Thank you! Your message has been sent successfully.");
    return false;
}

// 7. GitHub API Explorer
async function getUser() {
    const usernameInput = document.getElementById("username");
    if (!usernameInput) return;

    const username = usernameInput.value.trim();

    if (username === "") {
        alert("Please enter a GitHub username");
        return;
    }

    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.message === "Not Found") {
            alert("GitHub User not found. Please try another username.");
            return;
        }

        const profileCard = document.getElementById("profile");
        if (profileCard) profileCard.style.display = "block";

        const avatar = document.getElementById("avatar");
        if (avatar) avatar.src = data.avatar_url;

        const name = document.getElementById("name");
        if (name) name.innerText = data.name || data.login;

        const bio = document.getElementById("bio");
        if (bio) bio.innerText = data.bio || "No bio available.";

        const repo = document.getElementById("repo");
        if (repo) repo.innerText = data.public_repos;

        const followers = document.getElementById("followers");
        if (followers) followers.innerText = data.followers;

        const following = document.getElementById("following");
        if (following) following.innerText = data.following;

        const githubLink = document.getElementById("github");
        if (githubLink) githubLink.href = data.html_url;

    } catch (error) {
        alert("Unable to fetch data from GitHub API. Please check your network connection.");
    }
}
