import { Injectable } from '@angular/core';
import { TaskDialog } from '../../components/taskdialog/taskdialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from '../task/task.service';
import { CallbackFunction } from '../../others/types';
import { Task } from '../../others/task.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskModalService {
  dialogRef: MatDialogRef<TaskDialog> | null = null;

  constructor(private dialog: MatDialog, private taskService: TaskService) {}

  openDialog = (task:Task, callback:CallbackFunction) => {
    this.dialogRef = this.dialog.open(TaskDialog, { data: {isEmpty: false, task : {...task}, 
      saveTask: (task:Task) => this.taskService.saveTask(task, callback), 
      deleteTask: (taskId:number) => this.taskService.deleteTask(taskId, callback) } 
    });
  }

  openEmptyDialog = (callback:CallbackFunction) => {
    this.dialog.open(TaskDialog, { data: {isEmpty: true, task : {}, 
      saveTask: (task:Task) => this.taskService.saveTask(task, callback) } 
    });
  }
}
