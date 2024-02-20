import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDialog } from './taskdialog.component';

describe('TaskdialogComponent', () => {
  let component: TaskDialog;
  let fixture: ComponentFixture<TaskDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDialog]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
