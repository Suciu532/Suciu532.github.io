function hidePage(id) {
    document.getElementById(id).style.display = 'none';
}

function showPage(id) {
    document.getElementById(id).style.display = 'block';
}

function hideAllPages() {
    hidePage('home');
    hidePage('projects');
    hidePage('skills');
    hidePage('languages');
}

function showSkills() {
    hideAllPages();
    showPage('skills');

}
function showHome() {
    hideAllPages();
    showPage('home');
}
function showProjects() {
    hideAllPages();
    showPage('projects');
}
function showLanguages() {
    hideAllPages();
    showPage('languages');
}
