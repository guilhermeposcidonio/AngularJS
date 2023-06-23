import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LeadingComment } from '@angular/compiler';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'leads',
    component: LeadingComment
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
