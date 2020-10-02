import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ManagePayeeComponent } from './manage-payee/manage-payee.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { PaymentTransferRoutingModule } from './payment-transfer-routing.module';


@NgModule({
  declarations: [FundTransferComponent, ManagePayeeComponent, PayBillsComponent, MyTransactionComponent],
  imports: [
    CommonModule,
    PaymentTransferRoutingModule
  ]
})
export class PaymentTransferModule { }
