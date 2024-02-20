import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

import { Task } from '../../others/task.interface';

@Component({
  selector: 'app-taskdialog',
  standalone: true,
  imports: [CommonModule, MatDialogTitle, MatInputModule, MatSelectModule, MatIconModule, MatFormFieldModule, FormsModule, MatDialogContent, MatButtonModule, MatCardModule, MatDialogActions, MatDialogClose],
  templateUrl: './taskdialog.component.html',
  styleUrl: './taskdialog.component.css'
})
export class TaskDialog {
  task!:Task;
  taskData:any;
  isEmpty:boolean = true;
  buttonLabel:string = 'Save';
  titleLabel:string = 'Add New Task';

  constructor(public dialogRef: MatDialogRef<TaskDialog>, @Inject(MAT_DIALOG_DATA) public data: any) {    
    if(data.task === undefined || data.task.id === undefined) { this.task = defaultTask; }
    else {
      this.task = data.task;
    }
    this.taskData = data;
    this.isEmpty = data.isEmpty;
    this.buttonLabel = (this.isEmpty) ? 'Create' : 'Save';
    this.titleLabel = (this.isEmpty) ? 'Add New Task' : 'Update Task';
  }

  onNoClick(): void { this.dialogRef.close(); }

  onCreate(): void {
    this.data.saveTask(this.task);
    this.dialogRef.close(); 
  }

  onDelete(): void {
    this.data.deleteTask(this.task.id);
    this.dialogRef.close(); 
  }
}

const defaultTask: Task = {
  id: -1,
  name: '',
  desc: '',
  state: 'Planned',
  estimate: 0,
};