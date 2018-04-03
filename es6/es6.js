class Task {
   constructor(name) {
      this.name = name;
      this.isComplete = false;
   }
   complete(){
      this.isComplete = !this.isComplete;
   }
}

class TaskList {
   constructor(name) {
      this.name = name;
      this.tasks = [];
   }
   addTask(task, elem){
      this.tasks.push(task);
      this.renderTask(elem);
   }
   removeTask(i, elem){
      this.tasks.splice(i,1);
      this.renderTask(elem);
   }
   renderTask(elem){
      let tasks = this.tasks.map(task => `
      <li class="task">
         <input type="checkbox" class="taskCompleteButton"/>
         <span class="taskName">${task.name}</span>
         <a href="#" class="taskRemove">X</a>
      </li>
      `);
      elem.innerHTML = tasks.reduce((a,b)=> a+b, '');
   }
}


//manipulando el DOM
const addTaskElement = document.getElementById('add-task');
const taskContainerElement = document.getElementById('tasks-container');

const inbox = new TaskList('inbox');

// add task in DOM

function addDomTask(e, list = inbox){
   //obtener texto desde el input
   if(e.key === 'Enter'){
      let task = new Task(this.value);
   // add task to taskslist
      list.addTask(task, taskContainerElement);
      this.value = '';
   }
}
function getListTaskIndex(e){
   let taskItem = e.target.parentElement,
      listTaskItems = [...taskContainerElement.querySelectorAll('li')];
      return listTaskItems.indexOf(taskItem);
}
function removeDomTask(e,list = inbox) {
   //detension del click en el enlace de la x
   if (e.target.tagName === 'A') {
      list.removeTask(getListTaskIndex(e),taskContainerElement);
   }
}

addTaskElement.addEventListener('keyup',addDomTask);
taskContainerElement.addEventListener('click',removeDomTask)