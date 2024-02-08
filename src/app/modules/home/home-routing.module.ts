import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './pages/films/films.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from '../../core/guard/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,  // Este componente contiene <router-outlet> para rutas secundarias
    children: [
      { path: '', redirectTo: 'films', pathMatch: 'full' },  // Redirecciona a 'home/films' por defecto
      { path: 'films', component: FilmsComponent },           // Carga FilmsComponent en el <router-outlet> de HomeComponent
      { path: 'reservation', component: ReservationComponent },           // Carga FilmsComponent en el <router-outlet> de HomeComponent
      { path: 'reservations', component: ReservationsComponent }, // Carga ReservationsComponent de forma similar
    ],
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class HomeRoutingModule { }
