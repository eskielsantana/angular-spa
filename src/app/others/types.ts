import { Task } from "./task.interface";

export type CallbackFunction = () => void;
export type TaskListsFunction = (tasks:Task[]) => void; 