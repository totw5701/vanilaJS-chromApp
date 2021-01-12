const body = document.querySelector("body");


const IMG_NUMBER = 5;



function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`
    image.classList.add("bgImage");
    body.appendChild(image);  // preoend() 하면 html윗쪽에 끼워넣는다.


}

function genRandom() {
    const number = Math.floor(Math.random()*5);
    return number;


// Math.random()   -> 0~1 까지 임의의 실수 만듦
// Math.floor()    -> 무조건 내림
// Math.ceil()     -> 무조건 올림

}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber)
}

init()
