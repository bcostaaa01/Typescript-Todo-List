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
