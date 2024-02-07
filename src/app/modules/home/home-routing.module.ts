import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './pages/films/films.component';
import { BookingsComponent } from './pages/bookings/bookings.component';

const routes: Routes = [
  {
    path: 'films',
    component: FilmsComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
