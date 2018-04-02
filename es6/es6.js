import { ADDRCONFIG } from "dns";

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
      elem.innerHTML = tasks.reduce((a,b)=> a+b);
   }
}


//manipulando el DOM
const addTaskElement = document.getElementById('add-task');
const taskContainerElement = document.getElementById('tasks-container');

const inbox = new TaskList('inbox');

// add task in DOM

function addDomTask(e, list = inbox){
   //obtener texo desde el input
   if(e.key === 'Enter'){
      let task = new Task(this.value);
      list.addTask(task, taskContainerElement);
      this.value = '';
   }
   // add task to taskslist
}

addTaskElement.addEventListener('keyup',addDomTask);