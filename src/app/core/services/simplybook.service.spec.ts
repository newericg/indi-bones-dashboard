import { TestBed } from '@angular/core/testing';

import { SimplybookService } from './simplybook.service';

describe('SimplybookService', () => {
  let service: SimplybookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimplybookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
