import { Injectable } from '@angular/core';
import { Task } from './model/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  deleteTask(id: number): void {
    console.log(`Task ${id} deleted`);
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  addTask(task: Task): void {
    console.log(`Task ${task.title} added`);
    this.tasks.push(task);
  }

  toggleComplete(id: number): void {
    console.log(`Task ${id} toggled complete`);
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }

  clearTasks(): void {
    this.tasks = [];
  }
}

