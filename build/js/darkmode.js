const darkModeEvent = document.querySelector('.btnDarkMode');
let choiceTheme = localStorage.getItem('theme');
let prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
let prefersTheme2 = window.matchMedia('(prefers-color-scheme: light)').matches;
const domBody = document.body;

window.onload = () => {
    if (choiceTheme === 'dark') {
        domBody.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeEvent.classList.add('active');
    } else {
        domBody.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkModeEvent.classList.remove('active');
    }
};

const darkActive = () => {
    darkModeEvent.classList.add('active');
    domBody.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

const darkDeactive = () => {
    darkModeEvent.classList.remove('active');
    domBody.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}

darkModeEvent.addEventListener('click', () => {

    choiceTheme = localStorage.getItem('theme');
    if (choiceTheme === 'light') {
        darkActive();
    } else {
        darkDeactive();
    }
});