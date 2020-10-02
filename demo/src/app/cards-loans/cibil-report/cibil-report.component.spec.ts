import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CibilReportComponent } from './cibil-report.component';

describe('CibilReportComponent', () => {
  let component: CibilReportComponent;
  let fixture: ComponentFixture<CibilReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CibilReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CibilReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
