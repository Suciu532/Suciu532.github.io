function hidePage(id) {
    document.getElementById(id).style.display = 'none';
}

function showPage(id) {
    document.getElementById(id).style.display = 'block';
}

function hideAllPages() {
    var pageIds = ['home', 'skills', 'projects', 'languages'];

    pageIds.forEach(function (pageId) {
        console.info('inside forEach', pageId);
        hidePage(pageId);
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
