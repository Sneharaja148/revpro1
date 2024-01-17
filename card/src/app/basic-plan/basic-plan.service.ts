import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { b_plans, i_plans } from '../../../card';
import { users } from '../../../user';

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  private baseUrl = 'http://localhost:4000';
  private customerDataUrl = `${this.baseUrl}/customer_data`;
  private individualPlansUrl = `${this.baseUrl}/home_plans`;
  private businessPlansUrl = `${this.baseUrl}/business_plans`;

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  selectedPlans: any[] = [];

  getIndividualPlans(): Observable<i_plans[]> {
    return this.http.get<i_plans[]>(this.individualPlansUrl);
  }

  getBusinessPlans(): Observable<b_plans[]> {
    return this.http.get<b_plans[]>(this.businessPlansUrl);
  }

  getUserProfile(id: number): Observable<users> {
    const url = `${this.baseUrl}/customer_data/${id}`;
    return this.http.get<users>(url);
  }

  rereq(id: number, type: string, user: users): Observable<users> {
    user.plan_id = id;
    user.plan_type = type;

    const url = `${this.baseUrl}/customer_data/${id}`;

    return this.http.put<users>(url, user).pipe(
      catchError(error => {
        console.error('error adding plan failed', error);

        // Show error message using MatSnackBar
        this.snackBar.open('Error adding plan', 'Close', {
          duration: 3000,
        });

        throw error;
      })
    );
  }
}
