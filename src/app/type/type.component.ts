import { Component, Input } from '@angular/core';
import { TaskType, TaskTypeKey } from '../model/taskType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-type',
  imports: [CommonModule],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})

export class TaskTypeComponent {
  @Input() type: TaskTypeKey = TaskTypeKey.OTHER;

  getTaskTypeName(): string {
    return TaskType[this.type].name;
  }

  getTaskTypeIcon(): string {
    return TaskType[this.type].icon;
  }
}
