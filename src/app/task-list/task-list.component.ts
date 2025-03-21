import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../model/task';
import { CommonModule } from '@angular/common';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Store } from '@ngrx/store';
import { addTask } from '../store/tasks.actions';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule, TaskCardComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  newTask: Task = { id: 0, title: '', description: '', completed: false };

  store = inject(Store);


  constructor(private taskService: TaskService) {} // dependency injection

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      for (const task of tasks) {
        this.store.dispatch(addTask(task));
      }
    },
    (error) => {
      console.error('Error fetching tasks:', error);
    },
    () => { // finally
      this.store.select(state => state.tasks)  
      .subscribe((tasks) => {
        this.tasks = tasks;
      });
    }
  );
  }

  getCounter(): number {
    return this.tasks.length;
  }

  toggleComplete(id: number): void {
    this.taskService.toggleComplete(id);
  }
}
