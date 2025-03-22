import { Component, Input } from '@angular/core';
import { TaskType } from '../model/taskType';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-type',
  imports: [CommonModule],
  templateUrl: './type.component.html',
  styleUrl: './type.component.css'
})

export class TaskTypeComponent {
  @Input() type: TaskType = TaskType.OTHER;

  getTaskType(): string {
    if (this.type) {
      return this.type.substring(0, 1);
    }
    return '';
  }
}
