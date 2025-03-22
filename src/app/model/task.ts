import { TaskTypeKey } from "./taskType";

export interface Task {
  id: number;
  title: string;
  description?: string;
  completed: boolean;
  userId?: number;
  type: TaskTypeKey;
}
