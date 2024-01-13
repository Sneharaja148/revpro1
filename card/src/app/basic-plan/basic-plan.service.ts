import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

import { i_plans } from '../../../card';

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  private apiUrl = 'http://localhost:3001/plans'; 
  private apiUrl1 = 'http://localhost:3000/plans';

  constructor(private http: HttpClient) { }

  // getPlans(): Observable<i_plans[]> {
  //   return this.http.get<i_plans[]>(this.apiUrl).pipe(
  //     tap(data => console.log('Fetched plans:', data)),
  //     catchError(error => {
  //       console.error('Error fetching plans:', error);
  //       throw error;
  //     })
  //   );
  // }

  selectedPlans: any[] = [];

  getIndividualPlans(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getBusinessPlans(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1);
  }


}
