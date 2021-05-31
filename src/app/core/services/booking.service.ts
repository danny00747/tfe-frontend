import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '@environments/environment';
import {Observable} from 'rxjs';
import {BookingDTO} from '@app/shared/models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl: string = (environment.production) ? environment.apiUrl : '';

  constructor(private http: HttpClient) {
  }

  createBooking(carId: string, booking: any): Observable<BookingDTO> {
    return this.http.post<BookingDTO>(`${this.apiUrl}/api/v1/bookings/${carId}`, booking);
  }

  cancelBooking(bookingId: string): Observable<{ message: string }> {
    return this.http.get<{ message: string }>(`${this.apiUrl}/api/v1/bookings/${bookingId}/cancel`);
  }
}
