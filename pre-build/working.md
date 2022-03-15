# 작업 메모장
2022-01-30 (일)

<br>

## 컨텐츠
<br>

0. Main
- START 버튼을 누르면 Home (첫 서브페이지 화면) 으로 이동

1. Home 
- 서브페이지 중에서 첫번째로 보이는 화면

2. Header
    - Header fixed
    - Header Toggle
    - Sticky Header
<br><br>
3. GNB
    - GNB Hover Full Dropdown
    - GNB Menu hover Full Dropdown
    - GNB Hoverable Dropdown
<br><br>
4. Footer
    - Footer Basic
    - Footer fixed
<br><br>
5. Layout
    - Center element
    - Tab
    - Background-image 100%
    - Left menu
    - Floating menu
    - Slide (Disabled)
    - Flex
    - Grid (Disabled)
<br><br>
6. Input
    - input
    - radio
    - select
    - textarea
    - checkbox
<br><br>
7. Scroll Element
    - Table inner scroll
    - Overflow scroll
<br><br>
8. Custom
    - Context Menu
    - Scroll design
    - ToolTip
<br><br>
9. Popup
    - Popup show / hide
    - Toast popup
    - Drag popup
<br><br>
10. Etc
    <details>
        <summary>Animation element</summary>
        <div markdown="1">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ㆍTop button<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ㆍRotate element<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ㆍBoarder animation<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ㆍFade in / out<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            ㆍaccordion<br>
        </div>
    </details>
<br>

- Text ellipsis
- Key frames (Disabled)

<br><br>

## 모바일 코드 결과 보여주기
- 모바일에서는 PC와 다르게 해상도가 작기 때문에 코드 결과를 의도한대로 보여줄 수가 없다. 그래서 모바일에서 결과보기 버튼을 누르면 얼럿 창을 띄워서 결과를 모바일 버전으로 볼 것인지를 물어보고 진행한다. 
<br><br>
코드 결과를 본다고 할 경우, gif 로 보여지게 된다.
<br><br><br><br>

## 모바일 쿠키 기능 구현
- 모바일에서 결과보기 버튼을 누를 때마다 얼럿 창이 나와서 매번 취소 또는 확인 버튼을 눌러야 한다고 하면 사용자 입장에서 매우 번거로울 것이다. 그렇기 때문에, Jquery cookie 라이브러리를 사용해서 쿠키 생성 기능을 간단하게 구현하였다.

    1. 쿠키가 없는 처음 상태에서 결과보기 버튼을 누르면 얼럿 창이 뜨게 된다.<br><br>
    2. 여기서 사용자는 4가지의 선택지 중에서 선택을 할 수 있다.<br><br>
    2-1. <span style="color:skyblue;">**확인**</span> 을 누를경우 모바일 버전 코드 결과가 보여지게 되고, 얼럿 창은 닫히게 된다.<br><br>
    2-2. <span style="color:red;">**취소**</span> 를 누를경우 얼럿 창이 닫힌다. <br><br>
    2-3. <span style="color:orange;">오늘 하루 그만보기</span> 를 누른경우 즉시 얼럿 창이 닫히고 모바일 버전 코드결과가 나오게된다. 그리고, 24시간 동안 유지되는 쿠키가 생성이 되서 이후에 결과 보기 버튼을 누를 경우에는 얼럿 창 표시가 되지 않고 바로 코드 결과를 볼 수 있다.<br><br>
    2-4. 얼럿 바깥 영역을 누를경우 얼럿이 닫힌다. (이 부분은 취소 버튼을 눌렀을 때와 동일하다.)

<br><br>

## 접근성 작업
<br>
1. 모든 button , a , li (탭) 태그는 키보드로 조작할 수 있어야 한다.<br>
(li에 포커싱이 필요한경우 tabindex="0" 을 추가)
<br>
2. 메뉴나 탭 등에는 title 속성을 추가하여 정보를 제공한다.<br>
3. 특정 기능을 수행하는 버튼에 텍스트가 없을 경우 hidden 클래스를 추가하여 정보를 제공한다.<br>

<br><br>
## 다크모드 지원
<br>
1. 사용자의 선호테마 (os 배경색 설정) 에 따라 light 혹은 dark로 적용된다.<br>
2. 사용자가 원하는 테마로 설정할 수 있다.<br>
3. 사용자가 테마를 설정하고 다시 방문했을경우 설정값이 그대로 유지되어야 한다.<br>
ex) 다크테마로 설정 후 재방문 시 다크테마가 계속 유지<br>
4. 페이지 (url) 이동 또는 새로고침을 했을 때 시스템 설정과 사용자가 저장한 테마 설정과 서로 일치하지가 않아서 생기는 깜빡임 현상 (Flash of inAccurate coloR Theme) 이 일어나지 않아야 한다.<br><br>

> https://css-tricks.com/flash-of-inaccurate-color-theme-fart/

<br>
5. 다크테마 색상을 지정할 때 채도 너무 낮은 색상은 피한다. (채도가 너무 높지도 낮지도 않은 색상 지정)
<br><br>

> https://material.io/design/color/the-color-system.html#tools-for-picking-colors


