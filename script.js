// Seleciona os botões e seções do HTML
const aboutButton = document.getElementById("about-button"); // Botão "Sobre Mim"
const contactButton = document.getElementById("contact-button"); // Botão "Contato"
const educationButton = document.getElementById("education-button"); // Botão "Formação Acadêmica"
const projectsButton = document.getElementById("projects-button"); // Botão "Projetos"
const aboutSection = document.getElementById("about-section"); // Seção "Sobre Mim"
const contactSection = document.getElementById("contact-section"); // Seção "Contato"
const educationSection = document.getElementById("education-section"); // Seção "Formação Acadêmica"
const projectsSection = document.getElementById("projects-section"); // Seção "Projetos"

// Adiciona um evento de clique aos botões
aboutButton.addEventListener("click", () => {
    hideAllSections(); // Chama a função para ocultar todas as seções
    aboutSection.style.display = "block"; // Exibe a seção "Sobre Mim"
});

contactButton.addEventListener("click", () => {
    hideAllSections(); // Chama a função para ocultar todas as seções
    contactSection.style.display = "block"; // Exibe a seção "Contato"
});

educationButton.addEventListener("click", () => {
    hideAllSections(); // Chama a função para ocultar todas as seções
    educationSection.style.display = "block"; // Exibe a seção "Formação Acadêmica"
});

projectsButton.addEventListener("click", () => {
    hideAllSections(); // Chama a função para ocultar todas as seções
    projectsSection.style.display = "block"; // Exibe a seção "Projetos"
});

// Função para ocultar todas as seções
function hideAllSections() {
    aboutSection.style.display = "none"; // Oculta a seção "Sobre Mim"
    contactSection.style.display = "none"; // Oculta a seção "Contato"
    educationSection.style.display = "none"; // Oculta a seção "Formação Acadêmica"
    projectsSection.style.display = "none"; // Oculta a seção "Projetos"
}
