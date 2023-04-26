import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginData } from '../interfaces/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost/api/client/login.php';
  
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<boolean> {
    let postData = { email: email, password: password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return   this.http.post<LoginData>(this.authUrl, postData).pipe(
      map(response => {
        if (response.login) {
          localStorage.setItem('user_data', JSON.stringify(response));
        }
        return response.login;
      }));
  }

  logout() {
    // remove access token from local storage
    localStorage.removeItem('user_data');
  }

  isLoggedIn(): boolean {
    // check if access token exists in local storage
    return localStorage.getItem('user_data') !== null;
  }

}
