const darkModeEvent = document.querySelector('.btnDarkMode');
const choiceTheme = localStorage.getItem('theme');
let prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const getPrefersTheme = () => choiceTheme ? choiceTheme : prefersTheme;
const domEle = document.documentElement;

window.onload = () => {
    if (getPrefersTheme === 'dark') {
        domEle.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        domEle.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
};

const darkActive = () => {
    darkModeEvent.classList.add('active');
}

const darkDeactive = () => {
    darkModeEvent.classList.remove('active');
}
    
darkModeEvent.addEventListener('click', () => {
    if (domEle.getAttribute('data-theme') === 'dark') {
        domEle.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkDeactive();
    } else {
        domEle.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkActive();
    }
});