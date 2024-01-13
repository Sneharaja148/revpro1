import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

import { b_plans, i_plans } from '../../../card';

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
   
  private individualPlansUrl = 'http://localhost:4000/broadband_plans';
  private businessPlansUrl = 'http://localhost:4000/business_plans';

  constructor(private http: HttpClient) { }

  selectedPlans: any[] = [];

  getIndividualPlans(): Observable<i_plans[]> {
    return this.http.get<i_plans[]>(this.individualPlansUrl);
  }

  getBusinessPlans(): Observable<b_plans[]> {
    return this.http.get<b_plans[]>(this.businessPlansUrl);
  }
}

