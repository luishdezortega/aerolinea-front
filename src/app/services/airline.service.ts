import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserInterface } from '../models/user.interface';


@Injectable()
export class AirlineService {


  constructor(
    private http: HttpClient
  ) { }



  public  getFligths(): Observable<any> {
   return this.http.get(environment.url.concat('vuelos'));
  }

  public createReservation( user: UserInterface, idVuelo: string ) {
    const headers = new HttpHeaders().set('idVuelo', idVuelo);

    return this.http.post(environment.url.concat('reserva/create'), user, { headers } );
  }


}
