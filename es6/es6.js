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
      // let tasks = this.tasks.map(task => `
      // // <li>
      // //    <div class="collapsible-header">${task.name}
      // //    <a href="#" class="taskRemove">X</a>
      // //    </div>
      // //    <div class="collapsible-body">Lorem Ipsum</div>
      // // </li>
      // `);
      let tasks = this.tasks.map(task => `
         <li>
            <div class="collapsible-header"><i class="material-icons">person</i>${task.name}
            <a href="#"><i class="material-icons">delete</i></a>
            </div>
            <div class="collapsible-body info">Lorem ipsum dolor sit amet.</div>
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
var elem = document.querySelector('.collapsible');
var instance = M.Collapsible.init(elem);