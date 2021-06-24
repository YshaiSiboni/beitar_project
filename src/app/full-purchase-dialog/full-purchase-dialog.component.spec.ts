import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullPurchaseDialogComponent } from './full-purchase-dialog.component';

describe('FullPurchaseDialogComponent', () => {
  let component: FullPurchaseDialogComponent;
  let fixture: ComponentFixture<FullPurchaseDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullPurchaseDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullPurchaseDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
