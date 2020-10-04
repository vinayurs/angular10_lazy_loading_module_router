import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplyOnlineComponent } from './apply-online/apply-online.component';
import { CibilReportComponent } from './cibil-report/cibil-report.component';
import { LoansComponent } from './loans/loans.component';

const routes: Routes = [
{path:'ApplyOnlineComponent',component:ApplyOnlineComponent},
{path:'CibilReport',component:CibilReportComponent},
{path:'Loans',component:LoansComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsLoansRoutingModule { }
