
console.debug('inside functions.js');
function getInfo(name) {
    var msg = "Hello, " + name + " ,bine ai venit ";
    console.warn('inside get info', msg);
    return msg;
}

console.info(getInfo("Tudor " + "Suciu"));

var myName = 'Tudor ' + 'Suciu';
var wellcome = getInfo(myName);
console.info(wellcome);

function showSkills() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('languages').style.display = 'none';
    document.getElementById('skills').style.display = 'block';

}
function showHome() {
    document.getElementById('skills').style.display = 'none';
    document.getElementById('projects').style.display = 'none';
    document.getElementById('languages').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}
function showProjects() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('languages').style.display = 'none';
    document.getElementById('projects').style.display = 'block';
}
function showLanguages() {
    document.getElementById('projects').style.display = 'none';
    document.getElementById('home').style.display = 'none';
    document.getElementById('skills').style.display = 'none';
    document.getElementById('languages').style.display = 'block';
}
