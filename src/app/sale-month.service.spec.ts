import { TestBed } from '@angular/core/testing';

import { SaleMonthService } from './sale-month.service';

describe('SaleMonthService', () => {
  let service: SaleMonthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleMonthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
