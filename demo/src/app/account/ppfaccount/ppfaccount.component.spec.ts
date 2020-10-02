import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PPFAccountComponent } from './ppfaccount.component';

describe('PPFAccountComponent', () => {
  let component: PPFAccountComponent;
  let fixture: ComponentFixture<PPFAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PPFAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PPFAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
