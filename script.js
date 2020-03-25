//Get the task text from the input, if there is text then call the addNewTask function
const getTask = () => {
    var task = document.getElementById("task").value;
    task ? addNewTask(task) : null;
    document.getElementById("task").value = "";
}

//create the html for each new task and add it to the list
const addNewTask = (str) => {
    var newLi = document.createElement("li");
    var newCheck = document.createElement("input");
    newCheck.setAttribute("type", "checkbox");
    var newIcon = document.createElement("span");
    newIcon.setAttribute("class", "fas fa-trash-alt");
    var newtask = document.createTextNode(str);
    newLi.appendChild(newCheck);
    newLi.appendChild(newtask);
    newLi.appendChild(newIcon);

    var list = document.getElementById("task-list");
    list.appendChild(newLi);
    list.addEventListener("click", checked, false);
}

//change classes when the checkbox ot the delete icon are clicked
const checked = (e) => {
   if (e.target.tagName === "INPUT"){
       e.target.classList.toggle('checked');
   } else if(e.target.tagName === "SPAN"){
       e.target.parentElement.style.display = "none";
       //classList.add('deleted');
   }
}

const buttonAdd = document.getElementById('myButton');
buttonAdd.onclick = () => { getTask(); };
