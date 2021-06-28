function hidePage(id) {
    document.getElementById(id).style.display = 'none';
}

function showPage(id) {
    document.getElementById(id).style.display = 'block';
}

function hideAllPages() {
    var pages = Array.from(document.getElementsByClassName('page'));

    pages.forEach(function (page) {
        console.warn('inside forEach', page.Id);
        hidePage(page.id)
    });
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

showSkills();
