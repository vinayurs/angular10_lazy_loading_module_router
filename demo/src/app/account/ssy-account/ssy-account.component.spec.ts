import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsyAccountComponent } from './ssy-account.component';

describe('SsyAccountComponent', () => {
  let component: SsyAccountComponent;
  let fixture: ComponentFixture<SsyAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SsyAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SsyAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
