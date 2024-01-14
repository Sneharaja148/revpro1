import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap ,of} from 'rxjs';

import { b_plans, i_plans } from '../../../card';
import {users} from '../../../user'

@Injectable({
  providedIn: 'root'
})
export class BasicPlanService {
  private url='http://localhost:4000/customer_data';
  private individualPlansUrl = 'http://localhost:4000/home_plans';
  private businessPlansUrl = 'http://localhost:4000/business_plans';

  constructor(private http: HttpClient) { }

  selectedPlans: any[] = [];

  getIndividualPlans(): Observable<i_plans[]> {
    return this.http.get<i_plans[]>(this.individualPlansUrl);
  }

  getBusinessPlans(): Observable<b_plans[]> {
    return this.http.get<b_plans[]>(this.businessPlansUrl);
  }
  getUserProfile(id:number):Observable<users> {
    const urlid=`${this.url}/${id}`;
  return this.http.get<users>(urlid);
  }
  rereq(id:number,type:string,user : users)
  {
    console.log(user.plan_id);
    
    
     user.plan_id=id;
     user.plan_type=type;
     
    console.log(user.plan_type);
    return this.http.put<users>(this.url,user).pipe(catchError(error=>{console.error('error adding plan failed',error);
  throw error;
})
);
  }
}

