import { Component, Input } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-card',
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})

export class TaskCardComponent {
  @Input() task: Task;

  constructor(private taskService: TaskService) {
    this.task = {
      id: 0,
      title: '',
      description: '',
      completed: false
    };
  }

  toggleComplete(id: number): void {
    this.taskService.toggleComplete(id);
  }
}

