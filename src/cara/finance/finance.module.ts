import { NgModule }       from '@angular/core';

import { CompanyComponent } from './company/company.component'
import { CompanyListComponent } from './company-list/company-list.component'
import { BasicInfoComponent } from './basic-info/basic-info.component'
import { FundamentalRatiosComponent } from './fundamental-ratios/fundamental-ratios.component'
import { FinanceComponent } from './finance.component'

@NgModule({
    imports: [],
    declarations: [
        CompanyComponent,
        CompanyListComponent,
        BasicInfoComponent,
        FundamentalRatiosComponent
    ],
    exports: [ FinanceComponent ]
})

export class FinanceModule {

}