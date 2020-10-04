import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundTransferComponent } from './fund-transfer/fund-transfer.component';
import { ManagePayeeComponent } from './manage-payee/manage-payee.component';
import { MyTransactionComponent } from './my-transaction/my-transaction.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';

const routes: Routes = [
  {path:'MyTransactionComponent',component:MyTransactionComponent},
  {path:'FundTransfer',component:FundTransferComponent},
  {path:'ManagePayee',component:ManagePayeeComponent},
  {path:'PayBills',component:PayBillsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTransferRoutingModule { }
