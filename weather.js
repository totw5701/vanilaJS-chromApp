const weather = document.querySelector(".js-weather");
const API_KEY = "db28bdd902ed54582582acfeec9e1157";
const COORDS = 'coords';


function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} ${place}`
        })
        //API로 필요한 정보를 받아오는것. 이것때문에 새로고침 없이 새로운 메일을 받아보고 그러는거. -> 크롭에서 네트워크 가보면 보인다
        // .then 은 앞에있는거 처리가 다 끝나면 그다음에 시작하는건데 자세한것은 유튜브 클론 코딩에서 배울것임.
}

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
    getWeather(latitude, longitude);
}

function handleGeoErorr(){
    console.log("can't access geo location");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErorr) //API: library를 가져다 쓸 수 있게 도와주는 명령어, 책 위치정보 같은거임. 
}

function loadCoords()  {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}



function init() {
    loadCoords();
}

init();

