import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderBar } from './underbar.component';

describe('BoardbarComponent', () => {
  let component: UnderBar;
  let fixture: ComponentFixture<UnderBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderBar]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnderBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
