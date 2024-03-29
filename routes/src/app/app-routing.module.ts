import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { SobreComponent } from './pages/sobre/sobre.component';

const routes: Routes = [
  /*  pagina principal, assim utilizado o pathMatch para que nao redenrize outras paginas juntos */
  { path: '', component: HomeComponent, pathMatch: 'full' },
  {
    /* uma rota pai que chama a rota filha */
    path: 'sobre', component: SobreComponent, children: [
      { path: ':id/:username', component: SobreComponent }
    ]
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  { path: '404', component: PageErrorComponent },
  /* essa é a rota "coringa" tudo que for digitado na rota que nao exista sera rediecionado para a pagina 404 */
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
