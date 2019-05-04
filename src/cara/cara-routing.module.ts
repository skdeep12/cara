import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { AppComponent } from './root.component'
import { FinanceModule } from './finance/finance.module'

const routes: Routes = [
  {path: '', component: AppComponent },
  {path: 'finance', component: FinanceComponent}
];
//   {path: '', redirectTo: '/finance', pathMatch: 'full' },
//   {path: '/finance', component: FinanceComponent},
//   {path: '/company/:code', component: CompanyComponent} 
// ];

@NgModule({

  imports: [ 
    FinanceModule, 
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
