import { Component, Input } from '@angular/core';
import { Task } from '../model/task';
import { TaskService } from '../task.service';
import { TaskType } from '../model/taskType';
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
      completed: false,
      type: TaskType.OTHER
    };
  }

  toggleComplete(id: number): void {
    this.taskService.toggleComplete(id);
  }
}

