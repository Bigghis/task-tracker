import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../model/task';
import { TaskService } from '../task.service';
import { TaskType, TaskTypeKey } from '../model/taskType';
import { TaskTypeComponent } from '../type/type.component';
@Component({
  selector: 'app-task-card',
  imports: [ TaskTypeComponent, CommonModule ],
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
      type: TaskTypeKey.OTHER
    };
  }

  toggleComplete(id: number): void {
    this.taskService.toggleComplete(id);
  }
}

