import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './root.component'
//import { FinanceModule } from './finance/finance.module'

const routes: Routes = [
  {
    path: 'finance', 
    loadChildren: './finance/finance.module#FinanceModule'
  }
];
//   {path: '', redirectTo: '/finance', pathMatch: 'full' },
//   {path: '/finance', component: FinanceComponent},
//   {path: '/company/:code', component: CompanyComponent} 
// ];

@NgModule({

  imports: [ 
    //FinanceModule, 
    RouterModule.forRoot(
      routes,
      {
        enableTracing: false
      })
  ],

  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
