//btnDarkMode 셀렉터를 찾음
const darkModeEvent = document.querySelector('.btnDarkMode');
//로컬스토리지에 저장된 테마가 있는지 확인
let choiceTheme = localStorage.getItem('theme');
//선호테마가 다크모드와 일치하는지 확인
let prefersTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
//body태그 선택
const domBody = document.body;
//다크모드와 일치하면 dark , 일치하지 않으면 light
let setMode = prefersTheme ? 'dark' : 'light';

// ?
setTheme = (varTheme) => {
    setMode = varTheme
    document.body.setAttribute.varTheme = varTheme;
}

darkModeLoad = () => {
    const loadBody = document.body;

    //body에 data-theme 속성을 불러왔을 때 dark와 일치하면 dark , 일치하지 않으면 light
    let cookBody = loadBody.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    // cookBody 를 currentBody에 저장함.
    currentBody = cookBody;

    // 현재 날짜 및 시간을 가지고 있는 date 객체 생성
    let endDate = new Date();

    // 현재 년도 (2022)를 설정하고, 설정한 년도를 불러와서 불러온 년도에 + 10을 더함.
    endDate.setFullYear(endDate.getFullYear() + 10);

    //document.cookie : 쿠키를 생성하거나 지우거나 수정할 수 있음.
    /* body에 data-theme 속성을 불러온 값과 테마가 light일때 일치하는 값  */

    /* loadBody.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'  
    == 'light' ? 'light' : 'dark'
    */
    document.cookie = 'theme=' + (currentBody == 'light' ? 'light' : 'dark') + '; Expires=' + endDate + ';'
    console.log(document.cookie);
}

darkModeSelected = () => {
    return document.cookie.match(/theme=dark/i) != null;
}

themeFromCookie = () => {
    domBody.getAttribute('data-theme') = darkModeSelected() ? 'dark' : 'light';
}

//윈도우가 로드됬을 때
window.onload = () => {
    /*만약 로컬스토리지에 dark 테마가 저장되있을경우 body에 dark 속성을 추가하고,
    로컬스토리지 theme값을 dark로 설정함.
    그리고 btnDarkMode에 active 클래스를 추가함.
    */
    if (choiceTheme === 'dark') {
        domBody.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkModeEvent.classList.add('active');
    }

    /* dark 테마가 아닐경우 body에 light 속성 , 로컬스토리지에 theme값을 light로 설정함. 
    그리고 btnDarkMode에 active 클래스를 제거함.
    */
    else {
        domBody.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        darkModeEvent.classList.remove('active');
    }
};

//btnDarkMode 버튼을 클릭했을 때 active 클래스를 추가하고, 다크모드로 적용함.
const darkActive = () => {
    darkModeEvent.classList.add('active');
    domBody.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
}

//btnDarkMode 버튼을 클릭했을 때 active 클래스를 제거하고, 라이트모드로 적용함.
const darkDeactive = () => {
    darkModeEvent.classList.remove('active');
    domBody.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}

//btnDarkMode 버튼에 클릭 이벤트가 있을 때
darkModeEvent.addEventListener('click', () => {

    // ?
    const nextMode = setMode === 'light' ? 'dark' : 'light'
    setTheme(nextMode);

    // ?
    choiceTheme = localStorage.getItem('theme');

    //로컬스토리지에 저장된 테마가 light로 일치할경우 함수 실행
    if (choiceTheme === 'light') {
        darkActive();
    }

    //아닐경우(dark일경우) 함수 실행
    else {
        darkDeactive();
    }

    darkModeLoad();
});