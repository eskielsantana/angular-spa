import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCard } from './taskcard.component';

describe('TaskcardComponent', () => {
  let component: TaskCard;
  let fixture: ComponentFixture<TaskCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCard]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
