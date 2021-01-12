const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings")

/* local storage, 내 컴퓨터에 작은 데이터를 저장하는것. 변수 같은것들. 브라우져를 새로고침해도 여기 저장값은 계속 남아있다. */

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}


function handleSubmit(event) {
    event.preventDefault(); // 원래 제출누르면 입력 내용이 다른데로 가고 새로고침이 되는데 이 걸 없앤것임.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if (currentUser === null) {
        askName();
    } else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();




