import { createAction } from "@ngrx/store";
import { Task } from "../model/task";

export const addTask = createAction('[Task] Add Task', (task: Task) => ({ task }));
export const clearTasks = createAction('[Task] Clear Tasks');
