const buttonAdd = document.getElementById('myButton');

const getTask = () => {
    var task = document.getElementById("task").value;
    task ? addNewTask(task) : null;
}

const addNewTask = (str) => {
    var newLi = document.createElement("li");
    var newCheck = document.createElement("input");
    newCheck.setAttribute("type", "checkbox");
//    newCheck.setAttribute("onclick", "checked()");
    var newtask = document.createTextNode(str);
    newLi.appendChild(newCheck);
    newLi.appendChild(newtask);

    var list = document.getElementById("task-list");
    list.appendChild(newLi);
    list.addEventListener("click", checked, false)
}

const checked = (e) => {
   console.log(e.target);
}

buttonAdd.onclick = () => { getTask(); };
