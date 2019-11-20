function toggle(id) {

    if (id !== 'search-form') {
        var searchForm = document.getElementById('search-form');
        if (searchForm) {
            searchForm.classList.remove('block');
        }
    }

    if (id !== 'card-form') {
        var cardForm = document.getElementById('card-form');
        if (cardForm) {
            cardForm.classList.remove('block');
        }
    }

    if (id !== 'login-form') {
        var loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.classList.remove('block');
        }
    }

    var form = document.getElementById(id);
    form.classList.toggle('block');
}

function filter() {
    var checkboxes = document.getElementsByClassName('fill-checkbox');
    var radios = document.getElementsByClassName('fat-radio');
    var sliders = document.getElementsByClassName('price-range');
    var containers = document.getElementsByClassName('menu-ice-cream-container');

    var slider = sliders[0];

    var i = 0;
    var count = containers.length;

    while (i < count) {

        var container = containers[i];

        if (
            filterCheckboxes(container, checkboxes) && filterRadio(container, radios) && filterRange(container, slider)
        ) {
            container.classList.remove('hide'); //показываем
        } else {
            container.classList.add('hide');// скрываем
        }
        i++;
    }
}

function filterRadio(container, radios) {
    return true

}

function filterRange(container, slider) {
    return true
}

function filterCheckboxes(container, checkboxes) {

    var i = 0;
    var count = checkboxes.length;

    while (i < count) {

        if (checkCheckbox(container, checkboxes[i])) {
            return true;
        }
        i++;
    }

    return false;
}

function checkCheckbox(container, checkbox) {
    return (container.dataset.fill === checkbox.value) && checkbox.checked;
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(n);
}

function showSlides(n) {

    // console.log(1);
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var body = document.getElementsByTagName("body")[0];

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
    if (dots[slideIndex - 1]) {
        dots[slideIndex - 1].className += " active";
    }

    if (body && body.classList) {

        body.classList.remove('green');
        body.classList.remove('blue');
        body.classList.remove('camel');

        if (n === 1) {
            body.classList.add('green');
        } else if (n === 2) {
            body.classList.add('blue');
        } else if (n === 3) {
            body.classList.add('camel');
        } else {
            body.classList.add('green');
        }

    }
}