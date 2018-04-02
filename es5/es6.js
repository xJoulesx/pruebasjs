'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();


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
         var tasks = this.tasks.map(function (task) {
            return '\n      <li class="task">\n         <input type="checkbox" class="taskCompleteButton"/>\n         <span class="taskName">' + task.name + '</span>\n         <a href="#" class="taskRemove">X</a>\n      </li>\n      ';
         });
         elem.innerHTML = tasks.reduce(function (a, b) {
            return a + b;
         });
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

   //obtener texo desde el input
   if (e.key === 'Enter') {
      var task = new Task(this.value);
      list.addTask(task, taskContainerElement);
      this.value = '';
   }
   // add task to taskslist
}

addTaskElement.addEventListener('keyup', addDomTask);