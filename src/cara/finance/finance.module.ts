import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CompanyComponent } from './company/company.component'
import { CompanyListComponent } from './company-list/company-list.component'
import { BasicInfoComponent } from './basic-info/basic-info.component'
import { FundamentalRatiosComponent } from './fundamental-ratios/fundamental-ratios.component'
import { FinanceComponent } from './finance.component'

import { FinanceRoutingModule } from './finance-routing.module'

@NgModule({
    imports: [
        BrowserModule,
        FinanceRoutingModule
    ],
    declarations: [
        FinanceComponent,
        CompanyComponent,
        CompanyListComponent,
        BasicInfoComponent,
        FundamentalRatiosComponent
    ],
    exports: [ ]
})

export class FinanceModule {

}