import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepositsComponent } from './deposits/deposits.component';
import { PPFAccountComponent } from './ppfaccount/ppfaccount.component';
import { SsyAccountComponent } from './ssy-account/ssy-account.component';

import { AccountRoutingModule } from './account-routing.module';


@NgModule({
  declarations: [DepositsComponent, PPFAccountComponent, SsyAccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
