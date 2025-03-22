import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../task.service';
import { Task } from '../model/task';
import { Store } from '@ngrx/store';
import { addTask, clearTasks } from '../store/tasks.actions';
import { TaskType } from '../model/taskType';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  @Output() addTask = new EventEmitter<Task>();
  @Output() clearAll = new EventEmitter<void>();

  store = inject(Store);
  counter: number = 0;

  task: Task = { id: 0, title: '', description: '', completed: false, type: TaskType.OTHER };

  taskTypes = Object.values(TaskType);

  constructor(private taskService: TaskService) {
    console.log("taskTypes:::::", this.taskTypes);
    if (!this.taskTypes || this.taskTypes.length === 0) {
      console.error("TaskTypes array is empty!");
    }
  }

  addTaskHandler(): void {
    this.counter = this.taskService.getCounter();
    console.log("counter:::::", this.counter);
    this.counter++;
    const newTask: Task = {...this.task, id: this.counter};
    this.task = { id: this.counter, title: '', description: '', completed: false, type: TaskType.OTHER }; // reset the task in the form
    this.store.dispatch(addTask(newTask));
  }

  addRandomTask(): void {
    this.taskService.addRandomTask().subscribe((task: Task) => {
      console.log('addRandomTask');
      this.store.dispatch(addTask(task));
    });
  }

  clearTasks(): void {
    console.log('clearTasks');
    this.store.dispatch(clearTasks());
  }
}
