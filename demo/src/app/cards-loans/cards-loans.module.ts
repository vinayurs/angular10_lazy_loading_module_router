import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans/loans.component';
import { ApplyOnlineComponent } from './apply-online/apply-online.component';
import { CibilReportComponent } from './cibil-report/cibil-report.component';
import { CardsLoansRoutingModule } from './cards-loans-routing.module';


@NgModule({
  declarations: [LoansComponent, ApplyOnlineComponent, CibilReportComponent],
  imports: [
    CommonModule,
    CardsLoansRoutingModule
  ]
})
export class CardsLoansModule { }
