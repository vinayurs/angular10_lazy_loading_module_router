import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
{
  path:'account',
  loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
},
{
  path:'cards-loans',
  loadChildren: () => import('./cards-loans/cards-loans.module').then(m =>m.CardsLoansModule)
},
{
  path:'insurance',
  loadChildren:()=> import('./insurance/insurance.module').then (m =>m.InsuranceModule)
},
{
  path:'payment-transfer',
  loadChildren: () => import('./payment-transfer/payment-transfer.module').then(m=>m.PaymentTransferModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
