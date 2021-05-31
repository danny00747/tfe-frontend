import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CarDTO, ModelDTO} from '@app/shared/models';
import {environment} from '@environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl: string = (environment.production) ? environment.apiUrl : '';

  constructor(private http: HttpClient) {
  }

  getAllCars(): Observable<CarDTO[]> {
    return this.http.get<CarDTO[]>(`${this.apiUrl}/api/v1/admin/cars`);
  }

  getCars(): Observable<CarDTO[]> {
    return this.http.get<CarDTO[]>(`${this.apiUrl}/api/v1/cars`);
  }

  getCarsByBrand(brand: string): Observable<CarDTO[]> {
    return this.http.get<CarDTO[]>(`${this.apiUrl}/api/v1/cars?brand=${brand}`);
  }

  getOneCar(carId: string): Observable<CarDTO> {
    return this.http.get<CarDTO>(`${this.apiUrl}/api/v1/cars/${carId}`);
  }

  getNoneBookedCars(withdrawalDate: string): Observable<CarDTO[]> {
    return this.http.get<CarDTO[]>(`${this.apiUrl}/api/v1/cars?withdrawalDate=${withdrawalDate}`);
  }

  saveDamagedCars(carIds: Array<string>): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.apiUrl}/api/v1/admin/cars/damaged`, carIds);
  }

  getAllCarsModels(): Observable<ModelDTO[]> {
    return this.http.get<ModelDTO[]>(`${environment.apiUrl}/api/v1/models`);
  }

}
