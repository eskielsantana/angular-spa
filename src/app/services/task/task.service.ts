import { Injectable } from '@angular/core';
import { DataService } from '../data/data.service';
import { Task } from '../../others/task.interface';
import { CallbackFunction, TaskListsFunction } from '../../others/types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private dataService: DataService) {}

  loadTasks(callback:TaskListsFunction): void {
    this.dataService.loadTasks().then(callback);
  }

  updateTaskState(taskId: number, newState: string, callback:CallbackFunction): void {
    this.dataService.updateTaskState(taskId, newState).then(callback);
  }

  saveTask(task:Task, callback:CallbackFunction): void {
    this.dataService.saveTask(task).then(callback);
  }

  deleteTask(taskId:number, callback:CallbackFunction): void {
    this.dataService.deleteTask(taskId).then(callback);
  }
}
