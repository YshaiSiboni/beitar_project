import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartDailyComponent } from './bar-chart-daily.component';

describe('BarChartDailyComponent', () => {
  let component: BarChartDailyComponent;
  let fixture: ComponentFixture<BarChartDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartDailyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
