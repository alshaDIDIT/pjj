let frontparallax = document.getElementById("front");

window.addEventListener('scroll', function () {
    var value = window.scrollY;

    frontparallax.style.top = 250 + value * 0.5 + 'px';
})