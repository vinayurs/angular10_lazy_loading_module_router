import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoansComponent } from './loans/loans.component';
import { ApplyOnlineComponent } from './apply-online/apply-online.component';
import { CibilReportComponent } from './cibil-report/cibil-report.component';



@NgModule({
  declarations: [LoansComponent, ApplyOnlineComponent, CibilReportComponent],
  imports: [
    CommonModule
  ]
})
export class CardsLoansModule { }
