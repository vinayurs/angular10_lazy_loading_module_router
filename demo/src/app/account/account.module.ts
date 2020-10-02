import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositsComponent } from './deposits/deposits.component';
import { PPFAccountComponent } from './ppfaccount/ppfaccount.component';
import { SsyAccountComponent } from './ssy-account/ssy-account.component';


@NgModule({
  declarations: [DepositsComponent, PpfaccountComponent, PPFAccountComponent, SsyAccountComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
