console.info(132 / 2);
console.warn(new Date());
console.error("Salut3");
console.debug("Salut4");
var name = "Tudor Suciu";
console.info("Name:", name);
var age = 12 + 10;
console.info(age);
console.info("Numele:", name, ",", "Varsta:", age);

var skills = ['html', "css", `js`];
console.info("skilss: ", skills);
name = 'Tudor';
console.info("Name:", name);

var m = document.getElementById("motto");
console.info('my motto:', m);



m.onclick = function () {
    console.info('click pe motto');

    if (m.innerText == 'Student constructii de masini @ IEI') {
        m.innerHTML = "<strong>Cursant</strong> @ <i>FastTrackIT</i>";
        m.style.color = "#1144dd";
    } else {
        m.innerHTML = "<strong>Student constructii de masini</strong> @ <i>IEI</i>";
        m.style.color = '';

    }
}