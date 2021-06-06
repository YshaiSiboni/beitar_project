import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDayComponent } from './table-day.component';

describe('TableDayComponent', () => {
  let component: TableDayComponent;
  let fixture: ComponentFixture<TableDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
