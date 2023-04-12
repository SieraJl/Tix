import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  constructor(private http: HttpClient) {}

    getClubById(id:number): Observable<any>{
      return this.http.get('https://stats.fn.sportradar.com/bet365/fr/Africa:Lagos/gismo/stats_season_teampositionhistory/98175/'+id);
    }
    
    

  }