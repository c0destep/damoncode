if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

const switchMode = (event) => {
    switch (event.value) {
        case "auto":
            localStorage.removeItem('theme')
            break;
        case "light":
            localStorage.theme = 'light'
            break;
        case "dark":
            localStorage.theme = 'dark'
            break;
        default:
            break;
    }
};

function toggleMenu(flag) {
    let value = document.getElementById("menu");
    if (flag) {
        value.classList.remove("hidden");
    } else {
        value.classList.add("hidden");
    }
}