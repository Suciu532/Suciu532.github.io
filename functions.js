function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function highlight(el) {
    el.style.borderColor = '#00df00';
    setTimeout(function () {
        el.style.borderColor = '#55df44';
    }, 100);
    setTimeout(function () {
        el.style.borderColor = '#99df88';
    }, 200);
    setTimeout(function () {
        el.style.borderColor = '';
    }, 300);
}

function show(id) {
    document.getElementById(id).style.display = 'block';
    var page = document.getElementById(id);
    if (page) {
        page.style.display = 'block';
        highlight(page);
    } else {
        console.warn("pagina cu id-ul %o nu exista", id);
    }
}

function hideAllPages() {
    var pages = Array.from(document.getElementsByClassName('page'));

    pages.forEach(function (page) {
        hide(page.id)
    });
}

function showPage(id) {
    hideAllPages();
    show(id);
}

show('home');

document.querySelector('#top-menu-bar').addEventListener("click", function (e) {

    if (e.target.matches("a")) {
        var id = e.target.getAttribute("data-page");
        showPage(id);
        highlight(e.target);
    }
})
