import { TestBed } from '@angular/core/testing';

import { SaleTodayService } from './sale-today.service';

describe('SaleTodayService', () => {
  let service: SaleTodayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleTodayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
