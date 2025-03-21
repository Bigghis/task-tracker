import { createReducer, on } from "@ngrx/store";
import { Task } from "../model/task";
import { addTask, clearTasks } from "./tasks.actions";

export const initialState: Task[] = [];

export const tasksReducer = createReducer(
    initialState,
    on(addTask, (state, { task }) => [...state, task]),
    on(clearTasks, (state) => [])
);


