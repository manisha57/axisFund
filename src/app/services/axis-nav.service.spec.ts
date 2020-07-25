import { TestBed } from '@angular/core/testing';

import { AxisNavService } from './axis-nav.service';

describe('AxisNavService', () => {
  let service: AxisNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AxisNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
