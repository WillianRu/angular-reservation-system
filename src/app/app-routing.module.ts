import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './modules/home/pages/films/films.component';

const routes: Routes = [
  {
    path: 'home',
    component: FilmsComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
