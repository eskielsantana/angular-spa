import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardbarComponent } from './underbar.component';

describe('BoardbarComponent', () => {
  let component: BoardbarComponent;
  let fixture: ComponentFixture<BoardbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
