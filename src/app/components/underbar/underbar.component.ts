import {Component, Input} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {TaskModalService} from '../../services/taskmodal/taskmodal.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-underbar',
  standalone: true,
  imports: [MatIconModule, MatMenuModule, MatButtonModule, MatToolbarModule, RouterModule],
  templateUrl: './underbar.component.html',
  styleUrl: './underbar.component.css'
})
export class UnderBar {
  @Input() updateData!: () => void;
  @Input() viewMode: string = "Board";

  constructor (private taskModalService:TaskModalService) {}

  openDialog = () => { this.taskModalService.openEmptyDialog(this.updateData); }
}