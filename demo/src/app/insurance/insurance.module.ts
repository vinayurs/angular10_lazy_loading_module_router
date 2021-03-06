import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component';
import { CustomerInsuranceComponent } from './customer-insurance/customer-insurance.component';
import { BuyMutualFundComponent } from './buy-mutual-fund/buy-mutual-fund.component';
import { DematComponent } from './demat/demat.component';

import { InsuranceRoutingModule } from './insurance-routing.module';


@NgModule({
  declarations: [LifeInsuranceComponent, CustomerInsuranceComponent, BuyMutualFundComponent, DematComponent],
  imports: [
    CommonModule,
    InsuranceRoutingModule
  ]
})
export class InsuranceModule { }
