import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetMatchsService {

  constructor(private http: HttpClient) {}

    getLigue1Matchs(): Observable<any>{
      return this.http.get('https://stats.fn.sportradar.com/bet365/fr/Africa:Lagos/gismo/stats_season_fixtures2/98175/1');
    }
   
 
}

  