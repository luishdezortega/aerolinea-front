import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightComponent } from './components/flight/flight.component';
import { MainComponent } from './components/main/main.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';


const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'vuelos', component: FlightComponent
  },
  {
    path: 'crear-reserva', component: CreateReservationComponent
  },
  {
    path: 'consultar-reserva', component: ReservationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
