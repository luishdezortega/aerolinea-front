import { Component, OnInit } from '@angular/core';
import { AirlineService } from 'src/app/services/airline.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FlightInterface } from 'src/app/models/flight.interface';
import { Response } from 'src/app/models/respose.interface';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  flightList: FlightInterface[] = [] ;
  idVueloSelected: number;

  constructor(
    private airlineService: AirlineService,
    private modalService: NgbModal
  ) { }

  open( content, idVuelo ) {
    this.idVueloSelected = idVuelo;
    this.modalService.open( content, { backdrop: 'static' } ).result.then( result => {
      console.log( result );
     } , error => {
      console.log( error );
     } );
  }

  ngOnInit() {
   this.getFlights();
  }

  private getFlights() {
    this.airlineService.getFligths()
    .subscribe(
      (flights: Response<FlightInterface>) => {
       this.flightList =  flights.data;
       },
      (error: HttpErrorResponse) => {
      // Catch erros here!
      }
    );
  }


}
