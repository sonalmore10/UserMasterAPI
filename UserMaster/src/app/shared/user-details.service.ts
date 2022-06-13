import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from './user-details.model';
import { HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  constructor(private http: HttpClient) { }
  readonly baseURL = 'https://localhost:44394/service/UserDetails'
  formData:UserDetails =new UserDetails();
  
  list : UserDetails[];
   headers = new HttpHeaders().set('Content-Type','application/json');

  updateUserDetails(){
   return this.http.post(this.baseURL + '/signup',this.formData)
  }
  getUserDetailsList(){
   
    /* this.http.post(this.baseURL + '/getUserDetailsList', this.list) */
    return this.http.post<UserDetails[]>(this.baseURL + '/getUserDetailsList','')
    .pipe(
      map(res => this.list = res as UserDetails[])
    ); 
  // this.http.post(this.baseURL + '/getUserDetailsList',this.list)
  //.toPromise()
  //.then(res => this.list = res as UserDetails[]);
  }
}
