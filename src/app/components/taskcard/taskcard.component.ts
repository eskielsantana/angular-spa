import {Component, Input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {Task} from '../../interfaces/task.interface';

@Component({
  selector: 'app-taskcard',
  standalone: true,
  imports: [MatCardModule, MatIconModule],
  templateUrl: './taskcard.component.html',
  styleUrl: './taskcard.component.css'
})
export class TaskCard {
  @Input() task!: Task; // ! to let the TypeScript know the variables will be instantiated
}
