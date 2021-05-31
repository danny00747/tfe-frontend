import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationRecapComponent } from './reservation-recap.component';

describe('ReservationRecapComponent', () => {
  let component: ReservationRecapComponent;
  let fixture: ComponentFixture<ReservationRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationRecapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservationRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
