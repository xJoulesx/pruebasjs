'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Task = function () {
   function Task(name) {
      _classCallCheck(this, Task);

      this.name = name;
      this.isComplete = false;
   }

   _createClass(Task, [{
      key: 'complete',
      value: function complete() {
         this.isComplete = !this.isComplete;
      }
   }]);

   return Task;
}();

var TaskList = function () {
   function TaskList(name) {
      _classCallCheck(this, TaskList);

      this.name = name;
      this.tasks = [];
   }

   _createClass(TaskList, [{
      key: 'addTask',
      value: function addTask(task, elem) {
         this.tasks.push(task);
         this.renderTask(elem);
      }
   }, {
      key: 'removeTask',
      value: function removeTask(i, elem) {
         this.tasks.splice(i, 1);
         this.renderTask(elem);
      }
   }, {
      key: 'renderTask',
      value: function renderTask(elem) {
         // let tasks = this.tasks.map(task => `
         // // <li>
         // //    <div class="collapsible-header">${task.name}
         // //    <a href="#" class="taskRemove">X</a>
         // //    </div>
         // //    <div class="collapsible-body">Lorem Ipsum</div>
         // // </li>
         // `);
         var tasks = this.tasks.map(function (task) {
            return '\n         <li>\n            <div class="collapsible-header"><i class="material-icons">person</i>' + task.name + '\n            <a href="#"><i class="material-icons">delete</i></a>\n            </div>\n            <div class="collapsible-body info">Lorem ipsum dolor sit amet.</div>\n         </li>\n      ';
         });
         elem.innerHTML = tasks.reduce(function (a, b) {
            return a + b;
         }, '');
      }
   }]);

   return TaskList;
}();

//manipulando el DOM


var addTaskElement = document.getElementById('add-task');
var taskContainerElement = document.getElementById('tasks-container');

var inbox = new TaskList('inbox');

// add task in DOM

function addDomTask(e) {
   var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

   //obtener texto desde el input
   if (e.key === 'Enter') {
      var task = new Task(this.value);
      // add task to taskslist
      list.addTask(task, taskContainerElement);
      this.value = '';
   }
}
function getListTaskIndex(e) {
   var taskItem = e.target.parentElement,
       listTaskItems = [].concat(_toConsumableArray(taskContainerElement.querySelectorAll('li')));
   return listTaskItems.indexOf(taskItem);
}
function removeDomTask(e) {
   var list = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : inbox;

   //detension del click en el enlace de la x
   if (e.target.tagName === 'A') {
      list.removeTask(getListTaskIndex(e), taskContainerElement);
   }
}

addTaskElement.addEventListener('keyup', addDomTask);
taskContainerElement.addEventListener('click', removeDomTask);
var elem = document.querySelector('.collapsible');
var instance = M.Collapsible.init(elem);