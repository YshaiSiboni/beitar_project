import { TestBed } from '@angular/core/testing';

import { SaleCompareMonthService } from './sale-compare-month.service';

describe('SaleCompareMonthService', () => {
  let service: SaleCompareMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleCompareMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
