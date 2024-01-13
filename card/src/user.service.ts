import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { users } from '../user';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  

private userUrl = 'http://localhost:4000/customer_data'; 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<users[]> {
    return this.http.get<users[]>(this.userUrl).pipe(
      tap(data => console.log('Fetched plans:', data)),
      catchError(error => {
        console.error('Error fetching plans:', error);
        throw error;
      })
    );
  }

  //abc
  
}
