import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { Task } from '../../interfaces/task.interface';
import { TaskService } from '../../services/task/task.service';
import { TaskModalService } from '../../services/taskmodal/taskmodal.service';
import { MatTooltipModule} from '@angular/material/tooltip';
import { UnderBar } from '../../components/underbar/underbar.component';
import { MatCardModule } from '@angular/material/card';
import { Helper } from '../../helper';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, MatTooltipModule, MatCardModule, UnderBar],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  dataSource!: Task[];

  columnsToDisplay = ['name', 'estimate', 'state'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand', 'actions'];
  expandedElement: Task | null | undefined;

  constructor (private taskService: TaskService, private taskModalService: TaskModalService) { 
    this.loadData(); 
  }

  editTask = (task:Task) => {
    this.taskModalService.openDialog(task, this.loadData);
  }

  deleteTask = (task:Task) => {
    this.taskService.deleteTask(task.id, this.loadData);
  }

  loadData = () => {
    this.taskService.loadTasks(this.fillTable);
  }

  fillTable = (tasks:Task[]) => {
    this.dataSource = tasks;
  }

  plural = (n : number, single : string, plural : string) => {
    return ( n != 1 ) ? plural : single; 
  }
}