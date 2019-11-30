import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReservationModal } from './create-reservation.modal';

describe('CreateReservation.ModalComponent', () => {
  let component: CreateReservationModal;
  let fixture: ComponentFixture<CreateReservationModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateReservationModal ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateReservationModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
