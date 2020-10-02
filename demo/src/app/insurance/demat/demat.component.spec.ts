import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DematComponent } from './demat.component';

describe('DematComponent', () => {
  let component: DematComponent;
  let fixture: ComponentFixture<DematComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DematComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DematComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
