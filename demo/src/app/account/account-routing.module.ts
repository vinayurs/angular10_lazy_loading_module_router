import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepositsComponent } from './deposits/deposits.component';
import { PPFAccountComponent } from './ppfaccount/ppfaccount.component';
import { SsyAccountComponent } from './ssy-account/ssy-account.component';

const routes: Routes = [
  {path:'',component:DepositsComponent},
  {path:'PPFAccount',component:PPFAccountComponent},
  {path:'SsyAccount',component:SsyAccountComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
