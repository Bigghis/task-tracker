import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../model/task';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit{
  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '', completed: false };


  constructor(private taskService: TaskService) {} // dependency injection

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  toggleComplete(id: number): void {
    this.taskService.toggleComplete(id);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  onClearAll(): void {
    this.tasks = this.taskService.getTasks();
  }

}
