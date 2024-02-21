import { TestBed } from '@angular/core/testing';

import { TaskModalService } from './taskmodal.service';

describe('TaskmodalService', () => {
  let service: TaskModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
