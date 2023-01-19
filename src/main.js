"use strict";
exports.__esModule = true;
var Task = /** @class */ (function () {
    function Task(name) {
        this.name = name;
        this.completed = false;
    }
    Task.prototype.complete = function () {
        this.completed = true;
    };
    return Task;
}());
var TodoList = /** @class */ (function () {
    function TodoList() {
        this.tasks = [];
    }
    TodoList.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TodoList.prototype.removeTask = function (task) {
        var index = this.tasks.indexOf(task);
        this.tasks.splice(index, 1);
    };
    TodoList.prototype.getCompletedTasks = function () {
        return this.tasks.filter(function (task) { return task.completed === true; });
    };
    return TodoList;
}());
var task1 = new Task("Clean the kitchen");
var task2 = new Task("Walk the dog");
var task3 = new Task("Clean the furniture");
var task4 = new Task("Learn a new language");
var list = new TodoList();
list.addTask(task1);
list.addTask(task2);
list.addTask(task3);
list.addTask(task4);
console.log(list.getCompletedTasks());
