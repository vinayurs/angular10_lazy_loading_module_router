import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuyMutualFundComponent } from './buy-mutual-fund/buy-mutual-fund.component';
import { CustomerInsuranceComponent } from './customer-insurance/customer-insurance.component';
import { DematComponent } from './demat/demat.component';
import { LifeInsuranceComponent } from './life-insurance/life-insurance.component';

const routes: Routes = [
  {path:'',component:LifeInsuranceComponent},
  {path:'CustomerInsurance',component:CustomerInsuranceComponent},
  {path:'Demat',component:DematComponent},
  {path:'BuyMutual',component:BuyMutualFundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsuranceRoutingModule { }
