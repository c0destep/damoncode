window.onload = () => {
    verifyTheme();
}

window.onscroll = () => {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("backToTop").classList.toggle('inline-flex', true);
        document.getElementById("backToTop").classList.toggle('hidden', false);
    } else {
        document.getElementById("backToTop").classList.toggle('inline-flex', false);
        document.getElementById("backToTop").classList.toggle('hidden', true);
    }
}

const switchMode = (event) => {
    switch (event.value) {
        case "auto":
            localStorage.removeItem('theme');
            break;
        case "light":
            localStorage.theme = 'light';
            break;
        case "dark":
            localStorage.theme = 'dark';
            break;
        default:
            break;
    }

    verifyTheme();
};

/* document.querySelectorAll('a[href^="#"]').forEach(el => {
    el.addEventListener('click', function (ev) {
        ev.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); */

function toggleMenu(flag) {
    let value = document.getElementById("menu");
    if (flag) {
        value.classList.remove("hidden");
    } else {
        value.classList.add("hidden");
    }
}

function verifyTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}