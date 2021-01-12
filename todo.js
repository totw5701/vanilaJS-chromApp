const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");



const TODOS_LS = "toDos"

let toDos = [];




function deleteTodo(event) {
    //console.log(event.target.parentNode);
    const li = event.target.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(filterFn);  // forEach랑 비슷한데, toDos라는 어레이에 있는 값들 중 true인것 즉 1인값만 array로 만들고 각각 function한다.

    function filterFn(toDo){
        return toDo.id !== parseInt(li.id);
    }

    toDos = cleanToDos
    saveToDos();

}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
    // 자바스크립트는 local storage에 있는 모든 데이터를 string 으로 저장하려고 한다. 그렇기 때문에 저 toDos에 있는 object들을 string으로 바꾸려고 JSON 이거 쓴것임!.
}

function paintToDo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    delBtn.innerText = "✔";
    delBtn.addEventListener("click", deleteTodo)
    span.innerText = text;
    li.appendChild(delBtn);  //delBtn을 li안으로 넣었다.
    li.appendChild(span);  // span을 li안으로 넣었다.
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}





function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);  
        parsedToDos.forEach(function(toDo) {
            paintToDo(toDo.text);
        });   //local storage에 string으로 저장했으니 이 string을 다시 자바스크립트 object로 바꾸어주자. 
    } 
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}


init()
