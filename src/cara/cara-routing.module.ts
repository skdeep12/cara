import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceComponent } from './finance/finance.component';
import { CompanyComponent } from './finance/company/company.component';
import { AppComponent } from './root.component'

const routes: Routes = [
  {path: '', component: AppComponent }
];
//   {path: '', redirectTo: '/finan ce', pathMatch: 'full' },
//   {path: '/finance', component: FinanceComponent},
//   {path: '/company/:code', component: CompanyComponent} 
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
