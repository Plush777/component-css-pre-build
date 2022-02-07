const darkModeEvent = document.querySelector('.btnDarkMode');
let choiceTheme = localStorage.getItem('theme');
let prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
const domBody = document.body;
let setMode = prefersTheme ? 'dark' : 'light';
// let getBodyAttribute = document.body.getAttribute('data-theme');

darkModeLoad = () => {
    const loadBody = document.body;

    let cookBody = loadBody.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    currentBody = cookBody;

    let endDate = new Date();

    endDate.setFullYear(endDate.getFullYear() + 10);

    document.cookie = 'theme=' + (currentBody == 'light' ? 'light' : 'dark') + '; Expires=' + endDate + ';'
    console.log(document.cookie);
}

// darkModeSelected = () => {
//     return document.cookie.match(/theme=dark/i) != null;
// }

// themeFromCookie = () => {
//     getBodyAttribute = darkModeSelected() ? 'dark' : 'light';
// }

window.onload = () => {
    if (choiceTheme === 'dark') {
        domBody.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeEvent.classList.add('active');
    }else {
        domBody.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkModeEvent.classList.remove('active');
    }

    // themeFromCookie();
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
    }else {
        darkDeactive();
    }

    darkModeLoad();
});