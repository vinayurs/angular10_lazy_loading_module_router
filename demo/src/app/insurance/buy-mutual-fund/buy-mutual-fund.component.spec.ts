import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyMutualFundComponent } from './buy-mutual-fund.component';

describe('BuyMutualFundComponent', () => {
  let component: BuyMutualFundComponent;
  let fixture: ComponentFixture<BuyMutualFundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyMutualFundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyMutualFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
