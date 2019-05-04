import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './finance.component'

const finRoutes: Routes = [
    {
        path: '',
        component: FinanceComponent
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(finRoutes)
    ],
    exports: [
      RouterModule
    ]
  })

  
  export class FinanceRoutingModule {}