import { Component, EventEmitter, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../task.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-form',
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();
  @Output() clearAll = new EventEmitter<void>();

  counter: number = 0;

  task: Task = { id: 0, title: '', description: '', completed: false };

  constructor(private taskService: TaskService) {}


  
  addTaskHandler(): void {
    this.counter = this.taskService.getCounter();
    console.log("counter:::::", this.counter);
    this.counter++;
    const newTask = {...this.task, id: this.counter};
    this.task = { id: this.counter, title: '', description: '', completed: false }; // reset the task in the form
    this.taskService.addTask(newTask).subscribe((task) => {
      this.addTask.emit(task); // notify that a new task is added
    });
  }

  addRandomTask(): void {
    this.taskService.addRandomTask().subscribe((task) => {
      console.log('addRandomTask');
      this.addTask.emit(task); // notify that a new task is added
    });
  }

  clearTasks(): void {
    console.log('clearTasks');
    this.taskService.clearTasks();
    this.clearAll.emit(); // notify that the tasks are cleared
  }
  
}
