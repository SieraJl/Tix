import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl ='http://localhost/api/client/login.php';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    const body = new URLSearchParams();
    body.set('email', email);
    body.set('password', password);
    return this.http.post<any>(this.apiUrl, body.toString(), httpOptions).pipe(
      tap(response => {
        if (response.login) {
          localStorage.setItem('user', JSON.stringify(response));
          console.log("service_resp:"+JSON.stringify(response));
          return true;
        }
        return false;
      })
    );
  }



  logout() {
    // remove access token from local storage
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    // check if access token exists in local storage
    return localStorage.getItem('user') !== null;
  }
}