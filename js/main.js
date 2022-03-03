window.onload = () => {
    verifyTheme();
    backToTop();

    let formSendContact = document.getElementById('formSendContact');
    let buttonSendContact = document.getElementById('buttonSendContact');
    let hasSend = document.getElementById('hasSend');
    let hasNotSend = document.getElementById('hasNotSend');

    buttonSendContact.addEventListener('click', async () => {
        buttonSendContact.disable = true;

        let Data = new FormData(formSendContact);

        let response = await fetch(formSendContact.action, {
            method: formSendContact.method,
            body: Data
        });

        if (response.status === 200) {
            let result = await response.json();

            buttonSendContact.disable = false;

            if (result.status === 'error') {
                hasNotSend.classList.toggle('hidden', false);
                hasNotSend.innerText = result.message;

                setTimeout(function () {
                    hasNotSend.classList.toggle('hidden', true);
                }, 5000);
            } else {
                hasSend.classList.toggle('hidden', false);
                hasSend.innerText = result.message;

                setTimeout(function () {
                    hasSend.classList.toggle('hidden', true);
                    formSendContact.reset();
                }, 5000);
            }
        } else {
            hasNotSend.classList.toggle('hidden', false);
            hasNotSend.innerText = 'Lamentamos que houver um erro no envio da mensagem!!';

            setTimeout(function () {
                hasNotSend.classList.toggle('hidden', true);
            }, 5000);
        }
    });
}

window.onscroll = () => {
    backToTop();
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

function backToTop() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        document.getElementById("backToTop").classList.toggle('inline-flex', true);
        document.getElementById("backToTop").classList.toggle('hidden', false);
    } else {
        document.getElementById("backToTop").classList.toggle('inline-flex', false);
        document.getElementById("backToTop").classList.toggle('hidden', true);
    }
}