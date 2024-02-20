import { Task } from "../interfaces/task.interface";

export type CallbackFunction = () => void;
export type TaskListsFunction = (tasks:Task[]) => void; 