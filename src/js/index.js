let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let title = document.getElementById('title');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1.05 + 'px';
    mountains_behind.style.top = value * 0.05 + 'px';

    title.style.marginRight = value * 4 + 'px';
    title.style.marginTop = value * 1.0 + 'px';

    header.style.top = value * 1.0 + 'px';

    btn.style.top = value * 1.05 + 'px';
    mountains_front.style.top = value * 0 + 'px';
})