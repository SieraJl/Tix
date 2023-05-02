import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  register(nom: string, email: string, password: string, cin: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    const body = new URLSearchParams();
    body.set('nom', nom);
    body.set('email', email);
    body.set('password', password);
    body.set('cin', cin);
    return this.http.post<any>('http://localhost/api/client/set.php', body, httpOptions);
  }
}
