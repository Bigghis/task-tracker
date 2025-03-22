import { Injectable, OnInit } from '@angular/core';
import { Task } from './model/task';
import { TaskType } from './model/taskType';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const TASKS_URL = 'https://jsonplaceholder.typicode.com/todos';
const TASKS_NUM = 3;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];

  constructor(private http: HttpClient) {}


  getTasks(): Observable<Task[]>  {
   return this.http.get<Task[]>(TASKS_URL).pipe(
    map(tasks => tasks.slice(0, TASKS_NUM)),
    map(tasks => tasks.map(task => ({ ...task, type: this.getRandomTaskType() }))),
    tap(tasks => console.log('Tasks fetched:', tasks)),
    tap(tasks => this.tasks = tasks),
    catchError(error => {
      console.error('Error fetching tasks:', error);
      return of([]);
    })
   );
  }

  getCounter(): number {
    return this.tasks.length;
  }

  toggleComplete(id: number ): Observable<Task> {      
    console.log(`Task ${id} toggled complete`);
    return this.http.put<Task>(`${TASKS_URL}/${id}`, { completed: true });
  }

  private getRandomTaskType(): TaskType {
    const taskTypes = Object.values(TaskType);
    const randomIndex = Math.floor(Math.random() * taskTypes.length);
    return taskTypes[randomIndex];
  }


  addRandomTask(): Observable<Task> {
    return this.http.get<Task[]>(TASKS_URL).pipe(
      map(tasks => tasks[Math.floor(Math.random() * tasks.length)]),
      map(task => ({ ...task, type: this.getRandomTaskType() })),
      tap(task => console.log('Random task fetched:', task)),
      catchError(error => {
        console.error('Error fetching random task:', error);
        return of({} as Task);
      })
    );
  }
}

