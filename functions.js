function hidePage(id) {
    document.getElementById(id).style.display = 'none';
}

function showSkills() {
    hidePage('home');
    hidePage('projects');
    hidePage('languages');
    document.getElementById('skills').style.display = 'block';

}
function showHome() {
    hidePage('skills');
    hidePage('projects');
    hidePage('languages');
    document.getElementById('home').style.display = 'block';
}
function showProjects() {
    hidePage('home');
    hidePage('skills');
    hidePage('languages');
    document.getElementById('projects').style.display = 'block';
}
function showLanguages() {
    hidePage('home');
    hidePage('skills');
    hidePage('projescts');
    document.getElementById('languages').style.display = 'block';
}
