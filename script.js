const aboutButton = document.getElementById("about-button");
const contactButton = document.getElementById("contact-button");
const educationButton = document.getElementById("education-button");
const projectsButton = document.getElementById("projects-button");
const aboutSection = document.getElementById("about-section");
const contactSection = document.getElementById("contact-section");
const educationSection = document.getElementById("education-section");
const projectsSection = document.getElementById("projects-section");

aboutButton.addEventListener("click", () => {
    hideAllSections();
    aboutSection.style.display = "block";
});

contactButton.addEventListener("click", () => {
    hideAllSections();
    contactSection.style.display = "block";
});

educationButton.addEventListener("click", () => {
    hideAllSections();
    educationSection.style.display = "block";
});

projectsButton.addEventListener("click", () => {
    hideAllSections();
    projectsSection.style.display = "block";
});

function hideAllSections() {
    aboutSection.style.display = "none";
    contactSection.style.display = "none";
    educationSection.style.display = "none";
    projectsSection.style.display = "none";
}
