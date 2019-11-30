import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInterface } from 'src/app/models/user.interface';
import { AirlineService } from 'src/app/services/airline.service';

@Component({
  selector: 'app-create-reservation-modal',
  templateUrl: './create-reservation.modal.html',
  styleUrls: ['./create-reservation.modal.scss']
})


export class CreateReservationModal implements OnInit {

  @Input() idVueloSelected: number;

  public response: string;

  public reservaForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('[a-zA-Z]+')
    ]),
    identification: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('[0-9]+')
    ]),
    nationality: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.pattern('[a-zA-Z]+')
    ]),
    cellphone: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
      Validators.pattern('[0-9]+')
    ]),
    dateBorn: new FormControl('', [
      Validators.required,
    ])
  });

  constructor(
    private airlineService: AirlineService
  ) { }

  public onSend()  {
    this.airlineService.createReservation(this.reservaForm.value, this.idVueloSelected.toString())
    .subscribe(( resp: any ) => {
      this.response = resp.data;
    },
    (error) => {
      this.response = 'Error';
    });
  }
  ngOnInit(): void { }
}
