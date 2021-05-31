import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';
import {PrincingDetailsDTO} from '@app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class PricingClassService {

  apiUrl: string = (environment.production) ? environment.apiUrl : '';

  constructor(private http: HttpClient) {
  }

  getAllPricingClasses(): Observable<PrincingDetailsDTO[]> {
    return this.http.get<PrincingDetailsDTO[]>(`${this.apiUrl}/api/v1/pricingClass`);
  }

  patchPricingClass(className: string, princingDetailsDTO: PrincingDetailsDTO): Observable<PrincingDetailsDTO> {
    return this.http.patch<PrincingDetailsDTO>(`${this.apiUrl}/api/v1/pricingClass/${className}`, princingDetailsDTO);
  }
}
