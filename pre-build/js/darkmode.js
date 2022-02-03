const $checkbox = document.querySelector('.btnDarkMode');
const isUserColorTheme = localStorage.getItem('color-theme');
const isOsColorTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const getUserTheme = () => isUserColorTheme ? isUserColorTheme : isOsColorTheme;
console.log(isOsColorTheme);
const lightActive = () => {
    $checkbox.classList.add('lightActive');
    $checkbox.classList.remove('darkActive');
}

const darkActive = () => {
    $checkbox.classList.add('darkActive');
    $checkbox.classList.remove('lightActive');
}

window.onload = function () {
    if (getUserTheme === 'dark') {
        localStorage.setItem('color-theme', 'dark');
        document.documentElement.setAttribute('color-theme', 'dark');
    } else {
        localStorage.setItem('color-theme', 'light');
        document.documentElement.setAttribute('color-theme', 'light');
    }
}

$checkbox.addEventListener('click', () => {
    if (getUserTheme === 'light') {
        lightActive();
    } else if (getUserTheme === 'dark') {
        darkActive();
    }
    if ($checkbox.classList.contains('active')) {
        localStorage.setItem('color-theme', 'light');
        document.documentElement.setAttribute('color-theme', 'dark');
    } else {
        localStorage.setItem('color-theme', 'dark');
        document.documentElement.setAttribute('color-theme', 'dark');
    }
});