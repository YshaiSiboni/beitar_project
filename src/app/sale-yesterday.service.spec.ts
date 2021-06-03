import { TestBed } from '@angular/core/testing';

import { SaleYesterdayService } from './sale-yesterday.service';

describe('SaleYesterdayService', () => {
  let service: SaleYesterdayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleYesterdayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
