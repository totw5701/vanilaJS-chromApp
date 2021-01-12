const API_KEY = "db28bdd902ed54582582acfeec9e1157";

const COORDS = 'coords';


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };    // object(1:1로 매칭되는 데이터)에서 a:a, b:b 처럼 같은 내용을 지정할때는 그냥 a, b로 써도 된다.
    saveCoords(coordsObj);
}

function handleGeoErorr(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErorr) //API: library를 가져다 쓸 수 있게 도와주는 명령어, 책 위치정보 같은거임. 
}

function loadCoords()  {
    const loadedCords = localStorage.getItem(COORDS);
    if (loadedCords === null) {
        askForCoords();
    } else {
        //getWeather
    }
}



function init() {
    loadCoords();
}

init();

