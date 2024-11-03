import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRegistration } from '../../interfaces/user-registration.interface';
import { IUserLogin } from '../../interfaces/user-login.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5195/api';

  constructor(private http: HttpClient) { 
  }

  createUser(formData: IUserRegistration){
    return this.http.post(this.baseUrl+'/signup', formData)
  }

  signin(formData: IUserLogin){
    return this.http.post(this.baseUrl+'/signin', formData)
  }
}
