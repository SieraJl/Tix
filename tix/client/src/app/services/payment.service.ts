import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiUrl = 'http://localhost/api/payment/set.php';

  constructor(private http: HttpClient) { }

  createPayment(paymentData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    const body = new URLSearchParams();
    body.set('ticket_id', paymentData.ticket_id);
    body.set('client_id', paymentData.client_id);
    body.set('name', paymentData.name);
    body.set('mm', paymentData.mm);
    body.set('yy', paymentData.yy);
    body.set('ccv', paymentData.ccv);
    body.set('card_number', paymentData.card_number);
    return this.http.post<any>(this.apiUrl, body.toString(),httpOptions);
  }

}