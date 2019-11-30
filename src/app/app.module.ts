import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlightComponent } from './components/flight/flight.component';
import { MainComponent } from './components/main/main.component';
import { CreateReservationComponent } from './components/create-reservation/create-reservation.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { HttpClientModule } from '@angular/common/http';
import { AirlineService } from './services/airline.service';
import { CreateReservationModal } from './modals/create-reservation.modal/create-reservation.modal';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FlightComponent,
    MainComponent,
    CreateReservationComponent,
    ReservationComponent,
    CreateReservationModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [
    AirlineService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
