let tasks = [];

const setup = () => {
    setupEventListenersForDropZones();
    loadTasks();
}

const createTask = () => {
    //create the task object
    let title = document.getElementById("title").value.trim();
    let description = document.getElementById("description").value.trim();

    let task = {
        title: title,
        description: description,
        Date: new Date().toLocaleString(),
        status: 'todo',
        createdAt: Date.now().toString()
    }
    //add the task to the array of tasks
    tasks.push(task);
    createTaskElements(task);
    saveTasksToLocalStorage();
    console.log("createTask Succes");
}


const createTaskElements = (task) => {
    let divDropzone = document.getElementById(task.status);
    let divTask = document.createElement("div");
    divTask.draggable = true;
    divTask.classList.add("task");
    divTask.id = task.createdAt;
    divTask.addEventListener("dragstart", handleDragStart)
    //title
    let titleElem = document.createElement("h3");
    titleElem.appendChild(document.createTextNode(task.title))
    //text
    let descrElem = document.createElement("p");
    descrElem.appendChild(document.createTextNode(task.description));
    //date
    let dateElem = document.createElement("p");
    dateElem.appendChild(document.createTextNode(task.Date));
    //appendelements
    divTask.appendChild(titleElem);
    divTask.appendChild(descrElem);
    divTask.appendChild(dateElem);
    divDropzone.appendChild(divTask);
    return divTask;
}

const saveTasksToLocalStorage = () => {
    localStorage.setItem("VIVESTODO", JSON.stringify(tasks));
    //---------------------------------------------------------
    console.log(JSON.stringify(tasks));
    console.log("saveTaskTolocalStorage Succes");
    console.log("array of all tasks: " + tasks);
}

const loadTasks = () => {
    const saved = localStorage.getItem("VIVESTODO");
    if(saved) tasks = JSON.parse(saved);
    console.log("LoadTask Succes");
    tasks.forEach(task => {
        createTaskElements(task);
    });
}

const moveTask = () => {
    ["todo", "inprogress", "done"].forEach(status =>{
        const column = document.getElementById(status);
        console.log("MoveTask succes");
        const oldHeading = column.querySelector('h3').textContent;
        const newHeading = document.createElement("h3");
        const textNode = document.createTextNode(oldHeading);
        while(column.firstChild) {
            column.removeChild(column.firstChild);
        }
        newHeading.appendChild(textNode);
        column.appendChild(newHeading);

        tasks.filter(task => task.status === status).forEach(task => {
            let divTask = createTaskElements(task);
            //console.log(divTask);
            column.appendChild(divTask);
        })
    })
}

const setupEventListenersForDropZones = () => {
    document.getElementById("btnVoegToe").addEventListener("click", createTask);
    document.querySelectorAll('.column').forEach(col => {
        const status = col.dataset.status;
        col.addEventListener('dragover', e => dragover(e));
        col.addEventListener('dragleave', e=> dragleave(e))
        col.addEventListener('drop', e => handleDrop(e, status));
    })
}
const dragleave = (event) => {
    event.currentTarget.classList.remove("dragover");
}
const dragover = (event) => {
    event.preventDefault();
    event.currentTarget.classList.add("dragover");

}

const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const task = tasks.find(t => t.createdAt === id);
    if(task){
        task.status = newStatus;
        saveTasksToLocalStorage();
        moveTask();
    }
    //e.target.classList.remove("dragover");
    document.querySelectorAll('.column').forEach(col => {
        col.classList.remove("dragover");
    })

}
const handleDragStart = (e) =>{
    e.dataTransfer.setData("text/plain", e.target.id);
}

window.addEventListener("load", setup);