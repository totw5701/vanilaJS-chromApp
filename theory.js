/*
console.log('Im working. Im JS. Im beautifule.');

const calculator = {
  plus: function(a,b){
    return a+b;
  },
  multiply: function(a,b){
    return a*b;
  },
  division: function(a,b){
    return a/b;
  },
  squared: function(a,b){
    return a**b;
  }
}

const plus = calculator.plus(2,4)
*/

const hello = document.getElementById("hello");
//          = document.querySelector("#hello"); ->이걸 쓰면 css처럼 class는 .으로 id는 #으로 가져올 수 있다.

/*
console.log(hello);


// html에서 만들었던 모든 것들을 object로 만들어준다. dir로 이것 저것 볼 수 있다. style에 가보면 js로 할 수 있는 여러가지를 볼 수 있음.
console.dir(hello)

// 그럼 html에서 hello란 id를 가진 녀석의 색을 바꿔보자
hello.style.color = 'red';
//하하

// documnet로 할 수 있는 것들을 봐보자 지금 html에있는 거의 대부분의 정보를 object로 가지고온것이다. DOM! 
console.dir(document);


//어디 뭣점 바꿔볼까?
document.title = "get the fuck out of here"

//이렇게 JS를 활용해 html을 수정할 수 있다. 애니메이션을 바꾸고 내용을 바꾸고 등등등.
*/



/*
// #2-4

// 윈도우창 사이즈를 바꾸면 메세지가 뜨도록 펑션을 만들어보자
function handleResize() {
    console.log("I have been resized")
}
window.addEventListener("resize", handleResize);  //handleResize) ->필요할때 호출하라, handleResize() -> 지금당장 호출하라





function handleResize2(event) { //이 event는 JS에서 온것이다.
    console.log(event);
}
window.addEventListener("resize", handleResize2); // 이렇게 하면 어떻게 돼게?
   //이 event에 대한 개념은 나중에 다시 자세하게 다루자





function handleClick() {
    hello.style.color ="blue";
}

hello.addEventListener("click", handleClick);
*/


/*

// if- else

if(10 === 5){        // 체킹할때는 = 세개.
    console.log("hi")
}   else if(3 === 5) {
    console.log("he");
}   else{
    console.log("ho");
}



// $$ and이다 둘 다 참이여야함.
// || (shift + 원)은 or이다.

if(20>5 && "nicola" === "nicolas"){
    console.log("yes");
}else{
    console.log("no")
}

const age = prompt("how old R U?")   //prompt 다시 쓸일 없을거다. 굉장히 오래된 javascript임

if (age > 29){
    console.log("wow.... grandpa...im so sorry to hear that")
}   else if(age > 19){
    console.log("hi! why dont we go to pup toninght?")
}   else{
    console.log("go away kid")
}

console.log(age);
*/

/*
const title = document.querySelector("#hello");

const BASE_COLOR = "white"
const OTHER_COLOR = "black"



function handleClick() {
    const currentColor = title.style.color;
    if (currentColor == BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color= BASE_COLOR;
    }
    
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handleClick);
}

init()

//evnet들중에 click뿐만 아니라 엄청 많다.
*/

/* css html css내용을 바꾸는 것보다는 class를 바꾸어 논리만 변경시켜주는것이 좋다. className으로 수정가능.

const title = document.querySelector("#hello");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const currentClass = title.className;
    if (currentClass !== CLICKED_CLASS) {
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}


function init() {
    title.addEventListener("click", handleClick);
}

init();

 하지만 이러한 방법은 className 전체를 수정하기 떄문에 특정 class만을 추가하고 삭제할 수 없다. 전부다 사라져버린다.
*/

/* 이렇게 classList를 사용하면 쉽게 할 수 있다.
const title = document.querySelector("#hello");

const CLICKED_CLASS = "clicked";

function handleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);  //True False로 값을 줌
    if (!hasClass) {
        title.classList.add(CLICKED_CLASS);
    } else {
        title.classList.remove(CLICKED_CLASS)
    }
}


function init() {
    title.addEventListener("click", handleClick);
}

init();
*/

const title = document.querySelector("#hello");

const CLICKED_CLASS = "clicked";

function handleClick() {
    title.classList.toggle(CLICKED_CLASS);   // 있으면 지우고 없으면 만드는 기능, toggle
}


function init() {
    title.addEventListener("click", handleClick);
}

init();






