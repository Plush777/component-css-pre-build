const darkModeEvent = document.querySelector('.btnDarkMode');
let choiceTheme = localStorage.getItem('theme');
let prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const domBody = document.body;

let setMode = prefersTheme ? 'dark' : 'light';

setTheme = (varTheme) => {
    setMode = varTheme
    document.body.setAttribute.varTheme = varTheme;
}

darkModeLoad = () => {
    const loadBody = document.body;
    let cookBody = loadBody.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    currentBody = cookBody;

    let endDate = new Date();
    endDate.setFullYear(endDate.getFullYear() + 10);

    document.cookie = 'theme=' + (currentBody == 'light' ? 'light' : 'dark') + '; Expires=' + endDate + ';'
    // console.log(document.cookie)
}

darkModeSelected = () => {
    return document.cookie.match(/theme=dark/i) != null;
}

themeFromCookie = () => {
    domBody.getAttribute('data-theme') = darkModeSelected() ? 'dark' : 'light';
}

window.onload = () => {
    if (choiceTheme === 'dark') {
        domBody.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        domBody.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
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
    const nextMode = setMode === 'light' ? 'dark' : 'light'
    setTheme(nextMode);

    choiceTheme = localStorage.getItem('theme');
    if (choiceTheme === 'light') {
        darkActive();
    } else {
        darkDeactive();
    }

    darkModeLoad();
});