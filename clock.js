
const clockContainer = document.querySelector(".js-clock"),
 clockTitle = clockContainer.querySelector("h1");  // ,로 두개 한꺼번에 선언한거임


function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : `${hours}`}:${minutes <10 ? `0${minutes}` : `${minutes}`}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`
}
    
    /*
    if(seconds > 10) {
    clockTitle.innerText = `${hours}:${minutes}:${seconds}`
}   else {
    clockTitle.innerText = `${hours}:${minutes}:0${seconds}`
}   */

 /* 위에처럼 if절을 제대로 쓰는것이 정석이지만 ternary operator를 사용한다면 좀 더 간결하게
 끝낼 수 있다. if 절 전체 대신에 
 clockTitle.innerText = `${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : `${seconds}`}`}
 이렇게 간결하게 쓸 수 있다. :는 else이고 ?는 if라고 생각하쇼 */

function init() {
    getTime();
    setInterval(getTime, 1000);
}


init()


//  위에 방식대로 하면 실시간 업데이트는 되지 않는다. 매번 새로고침을 해줘야함. 이것을 해결하기위해
// setInterval(fn, 1000);  fn이라는 function을 1초 간격으로 반복하라.