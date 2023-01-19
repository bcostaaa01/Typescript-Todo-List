import { ListFormat } from "typescript";

class Task {
  name: string;
  completed: boolean;

  constructor(name: string) {
    this.name = name;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}

class TodoList {
  tasks: Task[];

  constructor() {
    this.tasks = [];
  }

  addTask(task: Task) {
    this.tasks.push(task);
  }

  removeTask(task: Task) {
    const index = this.tasks.indexOf(task);
    this.tasks.splice(index, 1);
  }

  getCompletedTasks() {
    return this.tasks.filter((task) => task.completed === true);
  }
}

let task1 = new Task("Clean the kitchen");
let task2 = new Task("Walk the dog");
let task3 = new Task("Clean the furniture");
let task4 = new Task("Learn a new language");

let list = new TodoList();

