import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { BarChartCompareComponent } from './bar-chart-compare/bar-chart-compare.component';
import { BarChartMonthComponent } from './bar-chart-month/bar-chart-month.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { SaleComponent } from './sale/sale.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'navbar', component: NavComponent },
  { path: 'home', component: WelcomeComponent },
  { path: 'sales', component: SaleComponent },
  { path: 'accounts', component: AccountComponent },
  { path: 'barChart', component: BarChartComponent },
  { path: 'barChartCompare', component: BarChartCompareComponent },
  { path: 'pieChart', component: PieChartComponent },
  { path: 'barChartMonth', component: BarChartMonthComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
