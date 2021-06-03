import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartCompareComponent } from './bar-chart-compare.component';

describe('BarChartCompareComponent', () => {
  let component: BarChartCompareComponent;
  let fixture: ComponentFixture<BarChartCompareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartCompareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarChartCompareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
