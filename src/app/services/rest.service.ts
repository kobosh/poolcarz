import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { map, Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/catch';

import { Ride } from '../book-ride/Ride';
import { Login } from '../login/Login';
@Injectable()
export class RestService {
  constructor(private http: HttpClient) {}

  getAllRides(): Observable<Ride[]> {
    return this.http.get<Ride[]>('../../assets/rides.json')
      //.pipe(map((response: Response) =>response.json()))// <Ride[]>response.json())
      //.catchError(this.handleError));
  }

  getAllUsers(): Observable<Login[]> {
    return this.http.get<Login[]>('../../assets/users.json')
      //.map((response: Response) => <Login[]>response.json())
      //.catch(this.handleError);
  }

  private handleError(error: any) {
  //   const errMsg = (error.message) ? error.message :
  //   error.status ? `${error.status} - ${error.statusText}` : 'Server error';
  //   return Observable.throw(errMsg);
  // 
}

}
