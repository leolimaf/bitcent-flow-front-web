import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUserRegistration } from '../../interfaces/user-registration.interface';
import { IUserLogin } from '../../interfaces/user-login.interface';
import { TOKEN_KEY } from '../constants';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { 
  }

  createUser(formData: IUserRegistration){
    return this.http.post(environment.apiBaseUrl+'/signup', formData)
  }

  signin(formData: IUserLogin){
    return this.http.post(environment.apiBaseUrl+'/signin', formData)
  }

  isLoggedIn(){
    return localStorage.getItem(TOKEN_KEY) != null ? true : false;
  }

  saveToken(token: string){
    localStorage.setItem(TOKEN_KEY, token);
  }

  getToken(){
    return localStorage.getItem(TOKEN_KEY);
  }

  deleteToken(){
    localStorage.removeItem(TOKEN_KEY);
  }
}
