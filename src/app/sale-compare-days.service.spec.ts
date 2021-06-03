import { TestBed } from '@angular/core/testing';

import { SaleCompareDaysService } from './sale-compare-days.service';

describe('SaleCompareDaysService', () => {
  let service: SaleCompareDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleCompareDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
