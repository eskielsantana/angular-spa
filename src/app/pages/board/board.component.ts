import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { MatGridListModule } from '@angular/material/grid-list';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';

import { Task } from '../../others/task.interface';
import { TaskCard } from '../../components/taskcard/taskcard.component';
import { UnderBar } from '../../components/underbar/underbar.component';
import { TaskService } from '../../services/task/task.service';
import { TaskModalService } from '../../services/taskmodal/taskmodal.service';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [MatGridListModule, CommonModule, CdkDropList, CdkDrag, MatIconModule, MatDividerModule, MatButtonModule, TaskCard, UnderBar],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent {
    plannedTasks!: Task[];
    plannedEstimateHours: number = 0;
    inProgressTasks!: Task[];
    inProgressEstimateHours: number = 0;
    completedTaks!: Task[];
    completedEstimateHours: number = 0;

    constructor (private taskService: TaskService, private taskModalService: TaskModalService) {
        this.loadData();
    }

    drop(event: CdkDragDrop<Task[]>) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);

        // Used setTimeout to execute the API request after Angular finished its asyncronous process
        // And the required data is available
        setTimeout(() => {
          if (event.previousContainer !== event.container) {
            const taskId = event.container.data[event.currentIndex].id;
            const listKey = event.container.element.nativeElement.getAttribute('listKey') as string;
            this.taskService.updateTaskState(taskId, listKey, this.loadData);
          }
        });
      }
    }

    fillLists = (tasks:Task[]) => {
      this.plannedTasks     = tasks.filter(task => task.state === 'Planned');
      this.inProgressTasks  = tasks.filter(task => task.state === 'InProgress');
      this.completedTaks    = tasks.filter(task => task.state === 'Completed');

      this.plannedEstimateHours     = this.plannedTasks.reduce((total, task) => total + task.estimate, 0);
      this.inProgressEstimateHours  = this.inProgressTasks.reduce((total, task) => total + task.estimate, 0);
      this.completedEstimateHours   = this.completedTaks.reduce((total, task) => total + task.estimate, 0);
    }

    loadData = () => {
      this.taskService.loadTasks(this.fillLists);
    }

    openDialog = (task:Task) => {
      this.taskModalService.openDialog(task, this.loadData);
    }

    openEmptyDialog = () => {
      this.taskModalService.openEmptyDialog(this.loadData);
    }

    plural = (n : number, single : string, plural : string) => {
      return ( n != 1 ) ? plural : single; 
    }
}
